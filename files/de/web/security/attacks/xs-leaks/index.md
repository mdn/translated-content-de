---
title: Cross-site leaks (XS-Leaks)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: b2a7378d76136b568fe9414f46abda899b2bf700
---

Cross-site-Leaks (auch als XS-Leaks bezeichnet) sind eine Klasse von Angriffen, bei denen die Website eines Angreifers Informationen über die Zielwebsite oder über die Beziehung des Benutzers zur Zielwebsite ableiten kann, indem Web-Plattform-APIs genutzt werden, die es Websites ermöglichen, miteinander zu interagieren. Zu den geleakten Informationen könnten zum Beispiel gehören:

- Ob der Benutzer die Zielwebsite besucht hat.
- Ob der Benutzer bei der Zielwebsite angemeldet ist.
- Wie die Benutzer-ID auf der Website lautet.
- Wonach der Benutzer kürzlich auf der Website gesucht hat.

Dies mag als ein weniger schädliches Problem erscheinen als zum Beispiel ein [Cross-Site-Scripting](/de/docs/Web/Security/Attacks/XSS)-Angriff, kann aber dennoch schwerwiegende Konsequenzen für Benutzer haben. Zum Beispiel:

- Ein Benutzer könnte Konten auf Websites haben, die er nicht der Öffentlichkeit bekannt machen möchte. Indem diese Informationen an einen Angreifer weitergegeben werden, könnte der Benutzer Erpressung oder Vergeltungsmaßnahmen einer repressiven Regierung ausgesetzt sein (zum Beispiel gegen einen Benutzer, der Informationen über spezifische medizinische Verfahren sucht).
- Das Wissen darüber, dass ein Benutzer ein Konto auf einer Website hat, insbesondere wenn seine Benutzer-ID ermittelt werden kann, kann einen anschließenden Phishing-Angriff viel überzeugender machen.

Im Gegensatz zu anderen Angriffen wie [XSS](/de/docs/Web/Security/Attacks/XSS) oder [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) sind Cross-site-Leaks keine einzelne Technik. Stattdessen handelt es sich um einen Begriff für eine ganze Klasse von Angriffen, die Schwachstellen in der Art und Weise ausnutzen, wie Browser Websites voneinander isolieren.

In diesem Leitfaden werden wir nicht versuchen, jeden Cross-site-Leak-Angriff und jede Verteidigung zu beschreiben. Stattdessen beginnen wir mit der Beschreibung einiger Beispielangriffe, skizzieren dann die gemeinsamen zugrunde liegenden Schwachstellen, die sie ermöglichen, und beschreiben schließlich einige allgemeine Verteidigungen, die gegen viele bekannte Angriffe wirken können.

## Beispiel für Cross-site-Leaks

In diesem Abschnitt beschreiben wir drei verschiedene Cross-site-Leaks, um einen Eindruck davon zu geben, wie sie funktionieren.

- [Leaking von Seitenexistenz durch Fehlerereignisse](#leaking_von_seitenexistenz_durch_fehlerereignisse): Bei diesem Angriff kann ein Angreifer feststellen, ob bestimmte Endpunkte der Zielseite HTTP-Fehlercodes zurückgeben, indem er versucht, sie als Ressourcen zu laden und auf die [`error`](/de/docs/Web/API/HTMLElement/error_event) und [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignisse zu hören. Wenn bestimmte Seiten nur für eingeloggte Benutzer verfügbar sind, kann der Angreifer feststellen, ob der Benutzer bei der Zielwebsite angemeldet ist.
- [Frame-Zählung durch Fensterreferenzen](#frame-zählung_durch_fensterreferenzen): Bei diesem Angriff bekommt der Angreifer eine Referenz zu einem [`window`](/de/docs/Web/API/Window)-Objekt, das eine Seite in der Zielwebsite hostet, zum Beispiel als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open). Der Angreifer kann dann die Anzahl der {{htmlelement("iframe")}}-Elemente auf der Zielseite ermitteln, was wiederum verraten könnte, ob der Benutzer auf der Zielwebsite eingeloggt ist.
- [Leaking von Weiterleitungen mit einer CSP](#leaking_von_weiterleitungen_mit_einer_csp): Bei diesem Angriff hat die Seite des Angreifers eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die nur das Laden einer bestimmten Seite von der Zielseite erlaubt, und versucht dann, diese Seite zu laden. Wenn das Laden der Seite blockiert wird, weiß der Angreifer, dass die Zielseite die Anfrage weitergeleitet hat. Diese Weiterleitung kann je nach Funktionsweise der Seite darauf hindeuten, dass der Benutzer eingeloggt war (oder nicht).

Alle drei Angriffe werden auf die gleiche Weise durchgeführt: Der Angreifer erstellt eine Seite, die den Angriff implementiert, und überzeugt dann den Benutzer, die Seite zu besuchen, beispielsweise durch das Senden einer E-Mail oder das Teilen eines Beitrags mit dem Link. Wenn der Benutzer die Seite besucht, wird der Angriff automatisch ausgeführt.

Im Rest dieses Abschnitts werden wir diese drei Angriffe etwas detaillierter beschreiben, um Ihnen ein konkretes Verständnis dafür zu geben, wie sie funktionieren. Obwohl die drei Angriffe ganz unterschiedliche Teile der Web-Plattform anvisieren, haben sie eine gemeinsame Ursache: das Ausmaß, in dem der Browser es Websites ermöglicht, durch Mechanismen wie Framing, Laden von Subressourcen oder Öffnen neuer Fenster miteinander zu verbinden und zu interagieren.

> [!NOTE]
> Für eine vollständigere Auflistung von Cross-site-Leaks siehe das [XS-Leaks Wiki](https://xsleaks.dev/) und das [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Leaking von Seitenexistenz durch Fehlerereignisse

Bei diesem Angriff testet der Angreifer, ob bestimmte Seiten der Zielwebsite geladen werden können, indem er überprüft, ob Versuche, sie als Ressourcen einzubinden, einen Fehler erzeugen. Wenn diese Seiten nur für eingeloggte Benutzer verfügbar sind, könnte ein Angreifer feststellen, ob ein Benutzer eingeloggt ist.

Der Angriff beruht darauf, dass eine Website in der Lage ist, eine Ressource von einer anderen Website zu laden, zum Beispiel indem sie das `src` Attribut eines {{htmlelement("script")}}-Elements auf die URL der Ressource setzt:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Dies führt zu einer HTTP-Anfrage an die `https://example.org/`-Website. Wenn die Anfrage Cookies enthält, die die Seite zur Identifizierung von Benutzern verwendet, und die angeforderte Seite nur für eingeloggte Benutzer verfügbar ist, dann zeigt der Erfolg oder Misserfolg der Anfrage, ob der Benutzer eingeloggt ist.

Wenn die Anfrage fehlschlägt, zum Beispiel weil der Server einen HTTP-{{httpstatus("404")}}-Statuscode zurückgibt, dann löst das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis aus. Wenn die Anfrage erfolgreich ist, löst das Element ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis aus. Indem der Angreifer auf diese Ereignisse hört, kann er herausfinden, ob der Benutzer eingeloggt ist.

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

Ein Angreifer könnte sogar die Benutzer-ID eines Benutzers herausfinden, indem er iterativ versucht, Seiten zu laden, um zu sehen, ob Seiten wie `https://example.org/users/my_username` existieren.

### Frame-Zählung durch Fensterreferenzen

Bei einem Frame-Zählungsangriff ermittelt der Angreifer die Anzahl der aktuell auf der Zielseite geladenen Frames. Dies wiederum verrät Informationen über den Zustand der Zielwebsite, was es einem Angreifer ermöglichen kann, zum Beispiel zu erfahren, ob der Benutzer aktuell auf der Seite eingeloggt ist.

Wenn eine Angreifer-Website eine Referenz zu einem [`Window`](/de/docs/Web/API/Window)-Objekt erhält, das die Zielseite enthält, kann der Angreifer die Anzahl der Frames auf der Zielwebsite zählen, indem er die [`window.length`](/de/docs/Web/API/Window/length)-Eigenschaft liest.

Der Angreifer kann ein `Window`-Objekt erhalten, indem er [`window.open()`](/de/docs/Web/API/Window/open) aufruft:

```js
const target = window.open("https://example.org");
const frames = target.length;
```

Alternativ kann der Angreifer die Zielseite in einem {{htmlelement("iframe")}} einbetten und die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft des Frames abrufen:

```html
<iframe src="https://example.org"></iframe>
```

```js
const target = document.querySelector("iframe").contentWindow;
const frames = target.length;
```

### Leaking von Weiterleitungen mit einer CSP

Bei einigen Websites leitet der Server je nach Anmelde- oder Statusstatus des Benutzers eine Anfrage weiter oder nicht. Stellen Sie sich beispielsweise eine Seite vor, die Administratoren auf `https://admin.example.org/` eine Seite zeigt. Wenn der Benutzer nicht eingeloggt ist und diese Seite anfordert, könnte der Server ihn zu `https://login.example.org/` umleiten.
Dies bedeutet, dass, wenn ein Angreifer feststellen könnte, ob ein Versuch, `https://admin.example.org/` zu laden, zu einer Weiterleitung führt, er weiß, ob der Benutzer ein Administrator auf der Seite ist.

Bei dem hier beschriebenen Angriff verwendet der Angreifer die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Funktion, um festzustellen, ob eine Cross-Site-Anfrage weitergeleitet wurde.

- Zuerst erstellen sie eine Seite, die durch eine CSP gesteuert wird, die nur {{htmlelement("iframe")}}-Elemente erlaubt, die Inhalte von `https://admin.example.org/` enthalten.

- Als nächstes fügen sie einen Ereignis-Listener in der Seite hinzu, der auf das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis lauscht.

- Schließlich erstellen sie ein {{htmlelement("iframe")}}-Element und setzen dessen `src` Attribut auf `https://admin.example.org/`.

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

- Wenn der Benutzer als Administrator angemeldet ist, wird das `<iframe>` geladen und der Browser löst kein `securitypolicyviolation` aus.
- Wenn der Benutzer nicht als Administrator angemeldet ist, leitet der Server zu `https://login.example.org/` um. Da diese URL von der CSP des Angreifers nicht erlaubt ist, blockiert der Browser das `<iframe>` und löst das `securitypolicyviolation`-Ereignis aus, und der Event-Handler des Angreifers wird ausgeführt.

Beachten Sie, dass dieser Angriff auch funktioniert, wenn die Zielseite das Einbetten mit einem Mechanismus wie [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) verbietet.

## Verteidigungen gegen Cross-site-Leaks

Cross-site-Leaks nutzen Mechanismen in der Web-Plattform aus, die es Websites ermöglichen, miteinander zu interagieren. Entsprechend beinhalten die Verteidigungen gegen Cross-site-Leaks in der Regel das _Isolieren_ der Zielwebsite von potenziellen Angreifern, indem diese Interaktionen von Websites untereinander deaktiviert oder kontrolliert werden.

Da Cross-site-Leaks auf viele verschiedene Arten funktionieren können, gibt es keine einzige Verteidigung, die gegen alle funktioniert. Es gibt jedoch mehrere Praktiken, die gegen viele von ihnen wirken, und wir werden sie hier zusammenfassen.

### Fetch-Metadaten

[Fetch-Metadaten](/de/docs/Web/HTTP/Guides/Fetch_metadata) ist der Begriff für eine Sammlung von HTTP-Anforderungs-Headern, die Informationen über den Kontext einer HTTP-Anforderung bereitstellen, einschließlich:

- {{httpheader("Sec-Fetch-Site")}}: Ob die Anfrage gleiche Ursprungs-, gleiche Standort- oder Cross-Site-Anfrage ist.
- {{httpheader("Sec-Fetch-Mode")}}: Der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage.
- {{httpheader("Sec-Fetch-User")}}: Ob die Anfrage eine benutzerinitiierte Navigation ist.
- {{httpheader("Sec-Fetch-Dest")}}: Das [`destination`](/de/docs/Web/API/Request/destination) der Anfrage.

Fetch-Metadaten-Header sind nicht alleine ein Verteidigungsmechanismus, ermöglichen es jedoch einem Server, eine Richtlinie zu implementieren, die Anfragen in Cross-site-Leaks sowie andere Angriffe wie [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) abweist.

Zum Beispiel beruht der Angriff [Leaking von Seitenexistenz durch Fehlerereignisse](#leaking_von_seitenexistenz_durch_fehlerereignisse) darauf, dass der Angreifer in der Lage ist, Cross-site-Anfragen zu stellen, um Seiten der Zielseite als Ressourcen zu laden:

```js
// Attempt to load a page in the target as a resource
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Ein Server kann Fetch-Metadaten verwenden, um diese Anfragen abzulehnen, wie im folgenden [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code:

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

Da die Anfrage des Angreifers Cross-Site ist und keine Navigation darstellt, gibt dieser Server immer einen Fehler zurück, unabhängig davon, ob der Benutzer angemeldet ist oder nicht.

Beachten Sie, dass wir auch den {{httpheader("Vary")}}-Antwort-Header senden. Dies stellt sicher, dass, wenn die Antwort zwischengespeichert wird, die zwischengespeicherte Antwort nur auf Anfragen mit denselben Werten für die verwendeten Fetch-Metadaten-Header gegeben wird.

Eine solche Richtlinie wird als _Ressourcen-Isolationsrichtlinie_ bezeichnet. Um mehr über die Implementierung von Isolationsrichtlinien mit Fetch-Metadaten zu erfahren, siehe [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) und [Isolation Policies](https://xsleaks.dev/docs/defenses/isolation-policies/).

### SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bestimmt, ob das Cookie in Anfragen gesendet wird, die von einer anderen Website stammen.

Der `Lax`-Wert von `SameSite` bedeutet, dass Cross-Site-Anfragen das Cookie nur dann enthalten, wenn die Anfrage eine Top-Level-Navigation (bedeutet im Wesentlichen, dass der Wert in der Adressleiste des Browsers zur Zielwebsite ändert) und eine {{Glossary("Safe/HTTP", "sichere")}} Methode verwendet (am bemerkenswertesten, dass dies {{httpmethod("POST")}}-Anfragen ausschließt).

Dies kann gegen einige Cross-site-Leaks schützen. Zum Beispiel beruht der Angriff [Leaking von Seitenexistenz durch Fehlerereignisse](#leaking_von_seitenexistenz_durch_fehlerereignisse) darauf, dass der Angreifer Cross-Site-Ressourcenanfragen stellt, die die Sitzungscookies des Benutzers enthalten. Das Setzen von `SameSite` auf `Lax` auf dem Sitzungscookie des Benutzers würde diesen Angriff verhindern, da das Cookie nicht in die Anfrage des Angreifers aufgenommen würde und keine Seiten, die eine Anmeldung erfordern, jemals zurückgegeben werden würden.

In der Regel sollte `SameSite` als Maßnahme zur Tiefenverteidigung behandelt und zusätzlich zu einer expliziteren Isolationsrichtlinie wie einer auf Fetch-Metadaten basierenden Richtlinie eingesetzt werden.

### Framing-Schutz

Viele Cross-site-Leaks stützen sich darauf, dass die Angreifer-Website die Zielseite als ein {{htmlelement("iframe")}} einbetten kann. Zum Beispiel ist dies eine Methode, mit der ein Angreifer auf die [`window`](/de/docs/Web/API/Window)-Referenz der Zielseite zugreifen kann, um einen [Frame-Zählungsangriff](#frame-zählung_durch_fensterreferenzen) zu ermöglichen.

Dies bedeutet, dass es eine gute Praxis ist, zu verhindern, dass eine Website eingebettet werden kann, es sei denn, Sie müssen das Einbetten zulassen, und wenn Sie das Einbetten zulassen müssen, schränken Sie es so weit wie möglich ein.

Es gibt zwei relevante Tools hierbei:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP).
- Der {{httpheader("X-Frame-Options")}}-Antwort-Header.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Obwohl die [Browser-Unterstützung für `frame-ancestors` sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), unterstützen einige sehr alte Browser, insbesondere der Internet Explorer, `frame-ancestors` nicht.

Wenn `frame-ancestors` und `X-Frame-Options` beide gesetzt sind, dann ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`. Das bedeutet, dass es keinen Grund gibt, `X-Frame-Options` nicht zusätzlich zu `frame-ancestors` zu setzen und dadurch das Einbetten auch in Browsern zu verhindern, die `frame-ancestors` nicht unterstützen.

### Cross-Origin Opener Policy (COOP)

Wie wir beim [Frame-Zählungsangriff](#frame-zählung_durch_fensterreferenzen) gesehen haben, ist eine weitere Möglichkeit, eine Referenz auf das [`window`](/de/docs/Web/API/Window) der Zielseite zu erhalten, diese als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open):

```js
const target = window.open("https://example.com");
```

Der {{httpheader("Cross-Origin-Opener-Policy")}}-Antwort-Header bestimmt, ob ein Dokument im gleichen {{Glossary("Browsing_context", "Browsing-Kontext-Gruppen")}} wie das Dokument, das es geöffnet hat, geöffnet wird.

Wenn Ihr Server diesen Header sendet und ihn auf einen Wert außer dem Standardwert `"unsafe-none"` setzt, wird, wenn ein Dokument von einem anderen Ursprung versucht, Ihre Seite mit `window.open()` zu öffnen, Ihre Seite in einer anderen Browsing-Kontext-Gruppe geladen. Unter anderem bedeutet dies, dass der Öffner keine Referenz auf das `window`-Objekt für Ihre Seite erhält und es daher nicht in einem Frame-Zählungsangriff verwenden kann.

## Verteidigungs-Checkliste

Cross-site-Leaks umfassen eine Reihe von Angriffen, die auf verschiedene Teile der Web-Plattform abzielen. Eine einzige Verteidigung wirkt nicht gegen alle von ihnen, und einige Leaks, wie dasjenige, das CSP nutzt, um Weiterleitungen zu leaken, haben noch keine Abwehrmaßnahmen.

In diesem Leitfaden haben wir einige Verteidigungen skizziert, die helfen, Ihre Website vor potenziellen Angreifern zu isolieren, und wir empfehlen, alle davon zu implementieren:

- Verwenden Sie Fetch-Metadaten, um eine Ressourcen-Isolationsrichtlinie zu implementieren.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn möglich, oder `Lax`, wenn nötig.
- Verwenden Sie die `frame-ancestors`-CSP-Direktive und den `X-Frame-Options`-Antwort-Header, um zu verhindern, dass Ihre Seite eingebettet wird, oder um zu kontrollieren, welche Seiten Ihre Seite einbetten können.
- Senden Sie den `Cross-Origin-Opener-Policy`-Antwort-Header, um zu verhindern, dass andere Seiten auf Ihr `window`-Globalobjekt zugreifen.

## Siehe auch

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
