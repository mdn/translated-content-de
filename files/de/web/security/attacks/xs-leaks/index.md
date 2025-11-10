---
title: Cross-site leaks (XS-Leaks)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: b07e3b87504a8984cf31d7a735ec373d33a11cd5
---

Cross-site leaks (auch XS-Leaks genannt) sind eine Art von Angriff, bei dem die Website eines Angreifers Informationen über die Zielwebsite oder über die Beziehung des Benutzers zur Zielwebsite ableiten kann. Dabei werden Webplattform-APIs genutzt, die es Websites erlauben, miteinander zu interagieren. Zu den geleakten Informationen könnten beispielsweise gehören:

- Ob der Benutzer die Zielwebsite besucht hat.
- Ob der Benutzer bei der Zielwebsite angemeldet ist.
- Was die Benutzer-ID auf der Website ist.
- Was der Benutzer kürzlich auf der Website gesucht hat.

Dies mag weniger schädlich erscheinen als beispielsweise ein [Cross-Site-Scripting](/de/docs/Web/Security/Attacks/XSS)-Angriff, aber es kann dennoch schwerwiegende Konsequenzen für Benutzer haben. Zum Beispiel:

- Ein Benutzer könnte Konten auf Websites haben, von denen er nicht möchte, dass sie öffentlich bekannt werden. Wenn diese Informationen zu einem Angreifer durchsickern, könnte dies dazu führen, dass ihm Erpressung oder Vergeltung durch eine unterdrückerische Regierung droht (zum Beispiel gegen einen Benutzer, der Informationen über bestimmte medizinische Verfahren sucht).
- Zu wissen, dass ein Benutzer ein Konto auf einer Website hat, insbesondere wenn seine Benutzer-ID ermittelt werden kann, könnte einen anschließenden Phishing-Angriff weitaus überzeugender machen.

Im Gegensatz zu anderen Angriffen wie [XSS](/de/docs/Web/Security/Attacks/XSS) oder [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) handelt es sich bei Cross-Site-Leaks nicht um eine einzelne Technik. Stattdessen ist es ein Begriff für eine ganze Klasse von Angriffen, die Schwächen in der Art und Weise ausnutzen, wie Browser Websites voneinander isolieren.

In diesem Leitfaden werden wir nicht versuchen, jeden Cross-Site-Leak-Angriff und jede Verteidigung zu beschreiben. Stattdessen beginnen wir mit der Beschreibung einiger Beispielangriffe, skizzieren dann die allgemeinen zugrunde liegenden Schwächen, die sie ermöglichen, und beschreiben einige allgemeine Verteidigungen, die gegen viele bekannte Angriffe wirken können.

## Beispiel lecks über Websites hinweg

In diesem Abschnitt beschreiben wir drei verschiedene Cross-Site-Leaks, um eine Vorstellung davon zu geben, wie sie funktionieren.

- [Existenz von Seiten mittels Fehlerereignissen leaken](#existenz_von_seiten_mittels_fehlerereignissen_leaken): Bei diesem Angriff kann ein Angreifer feststellen, ob bestimmte Endpunkte auf der Zielwebsite HTTP-Fehlercodes zurückgeben, indem er versucht, sie als Ressourcen zu laden und auf die [`error`](/de/docs/Web/API/HTMLElement/error_event)- und [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignisse zu lauschen. Wenn bestimmte Seiten nur für eingeloggte Benutzer verfügbar sind, kann der Angreifer feststellen, ob der Benutzer bei der Zielwebsite angemeldet ist.
- [Frame-Zählung mittels Fensterreferenzen](#frame-zählung_mittels_fensterreferenzen): Bei diesem Angriff erhält der Angreifer eine Referenz auf ein [`window`](/de/docs/Web/API/Window)-Objekt, das eine Seite der Zielwebsite hostet, zum Beispiel als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open). Der Angreifer kann dann die Anzahl der {{htmlelement("iframe")}}-Elemente auf der Zielseite bestimmen, was wiederum darauf hinweisen könnte, ob der Benutzer auf der Zielwebsite angemeldet ist.
- [Umleitungen mit einer CSP leaken](#umleitungen_mit_einer_csp_leaken): Bei diesem Angriff verfügt die Seite des Angreifers über eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die nur das Laden einer bestimmten Seite von der Zielwebsite erlaubt, und versucht dann, diese Seite zu laden. Wenn das Laden der Seite blockiert wird, weiß der Angreifer, dass die Zielseite die Anfrage umgeleitet hat. Diese Umleitung kann anzeigen, ob der Benutzer je nach Funktionsweise der Website angemeldet (oder nicht angemeldet) war.

Alle drei Angriffe werden auf die gleiche Weise durchgeführt: Der Angreifer erstellt eine Seite, die den Angriff implementiert, und überzeugt den Benutzer, die Seite zu besuchen, zum Beispiel, indem er ihm eine E-Mail sendet oder einen Beitrag mit dem Link teilt. Wenn der Benutzer die Seite besucht, wird der Angriff automatisch ausgeführt.

Im restlichen Teil dieses Abschnitts beschreiben wir diese drei Angriffe etwas ausführlicher, um Ihnen ein konkretes Gefühl dafür zu geben, wie sie funktionieren. Obwohl die drei Angriffe ganz unterschiedliche Teile der Webplattform ins Visier nehmen, haben sie eine gemeinsame Ursache: das Ausmaß, in dem der Browser es Websites ermöglicht, über Mechanismen wie das Framing, das Laden von Subressourcen oder das Öffnen neuer Fenster miteinander zu interagieren.

> [!NOTE]
> Für einen umfassenderen Katalog von Cross-Site-Leaks siehe das [XS-Leaks Wiki](https://xsleaks.dev/) und das [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Existenz von Seiten mittels Fehlerereignissen leaken

Bei diesem Angriff testet der Angreifer, ob bestimmte Seiten auf der Zielwebsite geladen werden können, indem er überprüft, ob Versuche, sie als Ressourcen einzubetten, einen Fehler erzeugen. Wenn diese Seiten nur für eingeloggte Benutzer verfügbar sind, könnte ein Angreifer feststellen, ob ein Benutzer eingeloggt ist.

Der Angriff basiert auf der Fähigkeit einer Website, eine Ressource von einer anderen Website zu laden, beispielsweise durch Setzen des `src`-Attributs eines {{htmlelement("script")}}-Elements auf die URL der Ressource:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Dies führt zu einer HTTP-Anfrage an die Website `https://example.org/`. Wenn die Anfrage Cookies enthält, die die Website zur Identifizierung von Benutzern verwendet, und die angeforderte Seite nur für eingeloggte Benutzer verfügbar ist, offenbart der Erfolg oder Misserfolg der Anfrage, ob der Benutzer eingeloggt ist oder nicht.

Schlägt die Anfrage fehl, beispielsweise weil der Server eine HTTP-Statusmeldung {{httpstatus("404")}} zurückgibt, löst das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis aus. Gelingt die Anfrage, löst das Element ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis aus. Durch das Lauschen auf diese Ereignisse kann der Angreifer feststellen, ob der Benutzer eingeloggt ist.

```js
const url = "https://example.org/admin";
const script = document.createElement("script");

script.addEventListener("load", (e) => {
  console.log(`${url} exists`);
});

script.addEventListener("error", (e) => {
  console.log(`${url} does not exist`);
});

script.src = url;
document.head.appendChild(script);
```

Ein Angreifer könnte sogar die Benutzer-ID herausfinden, indem er iterativ versucht, Seiten zu laden, um zu sehen, ob Seiten wie `https://example.org/users/my_username` existieren.

### Frame-Zählung mittels Fensterreferenzen

Bei einem Frame-Zählungsangriff ermittelt der Angreifer die Anzahl der aktuell im Ziel geladenen Frames. Dies wiederum leakt Informationen über den Zustand der Zielseite, was dem Angreifer ermöglichen könnte zu erfahren, ob der Benutzer derzeit auf der Seite eingeloggt ist.

Wenn eine Angreifer-Website eine Referenz auf ein [`Window`](/de/docs/Web/API/Window)-Objekt erhält, das die Zielseite enthält, kann der Angreifer die Anzahl der Frames in der Zielseite durch Auslesen der Eigenschaft [`window.length`](/de/docs/Web/API/Window/length) zählen.

Der Angreifer kann ein `Window`-Objekt erhalten, indem er [`window.open()`](/de/docs/Web/API/Window/open) aufruft:

```js
const target = window.open("https://example.org");
const frames = target.length;
```

Alternativ kann der Angreifer die Zielseite in einem {{htmlelement("iframe")}} einbetten und die Eigenschaft [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) des Frames abrufen:

```html
<iframe src="https://example.org"></iframe>
```

```js
const target = document.querySelector("iframe").contentWindow;
const frames = target.length;
```

### Umleitungen mit einer CSP leaken

Bei einigen Websites leitet der Server eine Anfrage basierend darauf um, ob der Benutzer eingeloggt ist (oder einen besonderen Status auf der Website hat). Stellen Sie sich zum Beispiel eine Seite vor, die Administratoren eine Seite unter `https://admin.example.org/` anzeigt. Ist der Benutzer nicht eingeloggt und fordert diese Seite an, könnte der Server ihn zu `https://login.example.org/` umleiten.
Das bedeutet, wenn ein Angreifer feststellen könnte, ob ein Versuch, `https://admin.example.org/` zu laden, zu einer Umleitung geführt hat, wüsste er, ob der Benutzer ein Administrator auf der Seite ist.

In dem hier beschriebenen Angriff nutzt der Angreifer die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Funktion, um festzustellen, ob eine cross-site Anfrage umgeleitet wurde.

- Zuerst erstellt er eine Seite, die von einer CSP regiert wird, die nur {{htmlelement("iframe")}}-Elementen erlaubt, Inhalte von `https://admin.example.org/` zu enthalten.

- Als nächstes fügt er in die Seite einen Ereignislistener ein, der auf das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis lauscht.

- Schließlich erstellt er ein {{htmlelement("iframe")}}-Element und setzt dessen `src`-Attribut auf `https://admin.example.org/`.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="frame-src https://admin.example.org/" />
  </head>
  <body>
    <script>
      document.addEventListener("securitypolicyviolation", () => {
        console.log("Page was redirected");
      });
      const frame = document.createElement("iframe");
      document.body.appendChild(frame);
      frame.src = "https://admin.example.org/";
    </script>
  </body>
</html>
```

- Wenn der Benutzer als Admin eingeloggt ist, wird das `<iframe>` geladen und der Browser löst kein `securitypolicyviolation`-Ereignis aus.
- Wenn der Benutzer nicht als Admin eingeloggt ist, leitet der Server zu `https://login.example.org/` um. Da diese URL von der CSP des Angreifers nicht zugelassen ist, blockiert der Browser das `<iframe>` und löst das `securitypolicyviolation`-Ereignis aus, und der Event-Handler des Angreifers wird ausgeführt.

Beachten Sie, dass dieser Angriff auch dann funktioniert, wenn die Zielseite das Einbetten mit einem Mechanismus wie [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) untersagt.

## Verteidigungen gegen Cross-Site-Leaks

Cross-Site-Leaks nutzen Mechanismen der Webplattform aus, die es Websites ermöglichen, miteinander zu interagieren. Entsprechend beziehen sich die Verteidigungen gegen Cross-Site-Leaks meist darauf, die Zielwebsite von potenziellen Angreifern zu isolieren, indem diese Interaktionen zwischen den Seiten deaktiviert oder kontrolliert werden.

Da Cross-Site-Leaks auf viele unterschiedliche Weisen funktionieren können, gibt es keine einzelne Verteidigung, die gegen alle funktioniert. Allerdings gibt es mehrere Praktiken, die gegen viele von ihnen wirken, und wir werden sie hier zusammenfassen.

### Fetch-Metadaten

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten")}} ist der Begriff für eine Sammlung von HTTP-Anforderungsheadern, die Informationen über den Kontext einer HTTP-Anfrage liefern, einschließlich:

- {{httpheader("Sec-Fetch-Site")}}: Ob die Anfrage gleicher Ursprungs, gleich-site oder cross-site ist.
- {{httpheader("Sec-Fetch-Mode")}}: Der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage.
- {{httpheader("Sec-Fetch-User")}}: Ob die Anfrage eine vom Benutzer initiierte Navigation ist.
- {{httpheader("Sec-Fetch-Dest")}}: Der [`destination`](/de/docs/Web/API/Request/destination) der Anfrage.

Fetch-Metadaten-Header sind kein eigenständiger Abwehrmechanismus, ermöglichen es jedoch einem Server, eine Richtlinie zu implementieren, die Anfragen, die in Cross-Site-Leaks und anderen Angriffen wie [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) verwendet werden, ablehnt.

Zum Beispiel hängt der [Leaking page existence using error events](#existenz_von_seiten_mittels_fehlerereignissen_leaken) Angriff davon ab, dass der Angreifer in der Lage ist, Cross-Site-Anfragen zu stellen, um Ressourcen zu laden, die zu der Ziel-Website gehören:

```js
// Attempt to load a page in the target as a resource
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Ein Server kann Fetch-Metadaten nutzen, um diese Anfragen abzulehnen, wie im folgenden [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code:

```js
function isAllowed(req) {
  // Allow same-origin, same-site, and user-initiated requests
  const secFetchSite = req.headers["sec-fetch-site"];
  if (
    secFetchSite === "same-origin" ||
    secFetchSite === "same-site" ||
    secFetchSite === "none"
  ) {
    return true;
  }

  // Allow cross-site navigations, such as clicking links
  const secFetchMode = req.headers["sec-fetch-mode"];
  if (secFetchMode === "navigate" && req.method === "GET") {
    return true;
  }

  // Deny everything else
  return false;
}

app.get("/admin", (req, res) => {
  res.setHeader("Vary", "sec-fetch-site, sec-fetch-mode");
  if (isAllowed(req)) {
    // Respond with the admin page if the user is admin
    getAdminPage(req, res);
  } else {
    res.status(404).send("Not found.");
  }
});
```

Da die Anfrage des Angreifers cross-site ist und keine Navigation darstellt, gibt dieser Server immer einen Fehler zurück, egal ob der Benutzer eingeloggt ist oder nicht.

Beachten Sie, dass wir auch den {{httpheader("Vary")}}-Antwortheader senden. Dies stellt sicher, dass, wenn die Antwort zwischengespeichert wird, die zwischengespeicherte Antwort nur für Anfragen mit denselben Werten für die verwendeten Fetch-Metadaten-Header geliefert wird.

Eine solche Richtlinie wird als _Ressourcen-Isolationsrichtlinie_ bezeichnet. Um mehr über die Implementierung von Isolationsrichtlinien mit Fetch-Metadaten zu erfahren, lesen Sie [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) und [Isolationsrichtlinien](https://xsleaks.dev/docs/defenses/isolation-policies/).

### SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bestimmt, ob das Cookie bei Anfragen, die von einer anderen Website stammen, gesendet wird oder nicht.

Der Wert `Lax` von `SameSite` bedeutet, dass Cross-Site-Anfragen das Cookie nur einschließen, wenn die Anfrage eine Top-Level-Navigation ist (was im Wesentlichen bedeutet, dass sich der Wert in der Adressleiste des Browsers zur Zielwebsite ändert) und eine {{Glossary("Safe/HTTP", "sichere")}} Methode verwendet (was insbesondere {{httpmethod("POST")}}-Anfragen ausschließt).

Dies kann vor einigen Cross-Site-Leaks schützen. Zum Beispiel hängt der [Leaking page existence using error events](#existenz_von_seiten_mittels_fehlerereignissen_leaken) Angriff davon ab, dass der Angreifer Ressourcenanfragen stellt, die die Session-Cookies des Benutzers einschließen. Das Setzen von `SameSite` auf `Lax` für das Session-Cookie des Benutzers würde diesen Angriff verhindern, da das Cookie in der Anfrage des Angreifers nicht enthalten wäre und keine Seiten, die ein Login erfordern, jemals zurückgegeben würden.

Als Regel sollte `SameSite` als Maßnahme zur Tiefenverteidigung behandelt werden und zusätzlich zu einer expliziteren Isolationsrichtlinie wie einer, die auf Fetch-Metadaten basiert, eingesetzt werden.

### Einbettungsschutz

Viele Cross-Site-Leaks basieren darauf, dass die angreifende Seite die Zielseite als {{htmlelement("iframe")}} einbetten kann. Zum Beispiel ist dies eine Methode, die ein Angreifer verwenden kann, um eine Referenz auf das [`window`](/de/docs/Web/API/Window) der Zielseite zu erhalten, um einen [Frame-Count](#frame-zählung_mittels_fensterreferenzen)-Angriff auszuführen.

Das bedeutet, dass es eine gute Praxis ist, zu verhindern, dass eine Seite eingebettet werden kann, es sei denn, Sie müssen die Einbettung erlauben. Und wenn Sie die Einbettung erlauben müssen, beschränken Sie sie so weit wie möglich.

Es gibt hier zwei relevante Werkzeuge:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Inhalts-Sicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP).
- Der {{httpheader("X-Frame-Options")}}-Antwortheader.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Obwohl die [Browser-Unterstützung für `frame-ancestors` sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), unterstützen einige sehr alte Browser, insbesondere Internet Explorer, `frame-ancestors` nicht.

Wenn `frame-ancestors` und `X-Frame-Options` beide gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`. Das bedeutet, dass es keinen Grund gibt, nicht sowohl `X-Frame-Options` als auch `frame-ancestors` zu setzen und so das Einbetten auch in Browsern zu verhindern, die `frame-ancestors` nicht unterstützen.

### Cross-Origin Opener Policy (COOP)

Wie wir beim [Frame-Counting](#frame-zählung_mittels_fensterreferenzen)-Angriff gesehen haben, gibt es eine weitere Möglichkeit, eine Referenz auf das Ziel-`window`](/de/docs/Web/API/Window) zu erhalten, indem man den Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open) verwendet:

```js
const target = window.open("https://example.com");
```

Der {{httpheader("Cross-Origin-Opener-Policy")}}-Antwortheader bestimmt, ob ein Dokument in derselben {{Glossary("Browsing_context", "Browsing-Context-Gruppe")}} geöffnet wird wie das Dokument, das es geöffnet hat.

Wenn Ihr Server diesen Header sendet und auf einen anderen Wert als den Standard `"unsafe-none"` setzt, dann wird, wenn ein Dokument aus einer anderen Herkunft versucht, Ihre Seite mit `window.open()` zu öffnen, Ihre Seite in einer anderen Browsing-Context-Gruppe geladen. Unter anderem bedeutet das, dass der Öffner keine Referenz auf das `window`-Objekt für Ihre Seite erhält und es daher nicht für einen Frame-Counting-Angriff verwenden kann.

## Zusammenfassende Verteidigungs-Checkliste

Cross-Site-Leaks umfassen eine Vielzahl von Angriffen, die auf verschiedene Teile der Webplattform abzielen. Eine einzelne Verteidigung funktioniert nicht gegen alle und einige Leaks, wie dasjenige, das CSP benutzt, um Umleitungen zu leaken, haben noch keine Verteidigungen.

In diesem Leitfaden haben wir einige Verteidigungen vorgestellt, die helfen, Ihre Website von potenziellen Angreifern zu isolieren. Wir empfehlen, alle diese Maßnahmen zu implementieren:

- Verwenden Sie Fetch-Metadaten, um eine Ressourcen-Isolationsrichtlinie zu implementieren.
- Setzen Sie das `SameSite`-Attribut für Session-Cookies auf `Strict`, wenn möglich, oder auf `Lax`, wenn erforderlich.
- Verwenden Sie die `frame-ancestors`-CSP-Direktive und den `X-Frame-Options`-Antwortheader, um zu verhindern, dass Ihre Seite eingebettet wird, oder um zu kontrollieren, welche Seiten Ihre Seite einbetten können.
- Senden Sie den `Cross-Origin-Opener-Policy`-Antwortheader, um zu verhindern, dass andere Seiten auf Ihr `window`-globales Objekt zugreifen.

## Siehe auch

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
