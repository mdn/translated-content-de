---
title: Cross-site leaks (XS-Leaks)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

Cross-site leaks (auch XS-Leaks genannt) sind eine Klasse von Angriffen, bei denen eine Angreifer-Website Informationen über die Zielseite oder über die Beziehung des Benutzers zur Zielseite ableiten kann, indem sie Webplattform-APIs nutzt, die es Websites ermöglichen, miteinander zu interagieren. Die geleakten Informationen könnten beispielsweise Folgendes umfassen:

- Ob der Benutzer die Zielseite besucht hat.
- Ob der Benutzer bei der Zielseite angemeldet ist.
- Was die Benutzer-ID auf der Seite ist.
- Was der Benutzer kürzlich auf der Seite gesucht hat.

Dies könnte als ein weit weniger schädliches Problem erscheinen als beispielsweise ein [Cross-Site Scripting](/de/docs/Web/Security/Attacks/XSS)-Angriff, aber es kann dennoch ernsthafte Konsequenzen für die Benutzer haben. Zum Beispiel:

- Ein Benutzer könnte Konten auf Websites haben, die er nicht öffentlich machen möchte. Das Lecken dieser Informationen an einen Angreifer könnte sie der Erpressung oder Vergeltung durch eine unterdrückende Regierung aussetzen (zum Beispiel gegen einen Benutzer, der Informationen über spezielle medizinische Verfahren sucht).
- Zu wissen, dass ein Benutzer ein Konto auf einer Website hat, insbesondere wenn seine Benutzer-ID ermittelt werden kann, kann einen nachfolgenden Phishing-Angriff viel überzeugender machen.

Im Gegensatz zu anderen Angriffen wie [XSS](/de/docs/Web/Security/Attacks/XSS) oder [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) sind Cross-site Leaks keine einzelne Technik. Stattdessen sind sie ein Begriff für eine ganze Klasse von Angriffen, die Schwächen darin ausnutzen, wie Browser Websites voneinander isolieren.

In diesem Leitfaden werden wir nicht versuchen, jeden Cross-site Leak Angriff und die entsprechende Verteidigung zu beschreiben. Stattdessen beginnen wir damit, einige Beispielangriffe zu beschreiben, um dann die häufigsten zugrunde liegenden Schwächen zu skizzieren, die sie ermöglichen. Schließlich beschreiben wir einige allgemeine Schutzmaßnahmen, die gegen viele bekannte Angriffe wirken können.

## Beispiel-Cross-site Leaks

In diesem Abschnitt beschreiben wir drei verschiedene Cross-site Leaks, um einen Eindruck davon zu vermitteln, wie sie funktionieren.

- [Existenz von Seiten über Fehlerereignisse leaken](#existenz_von_seiten_über_fehlerereignisse_leaken): Bei diesem Angriff kann ein Angreifer feststellen, ob bestimmte Endpunkte auf der Zielseite HTTP-Fehlercodes zurückgeben, indem er versucht, sie als Ressourcen zu laden und auf die [`error`](/de/docs/Web/API/HTMLElement/error_event)- und [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignisse lauscht. Wenn bestimmte Seiten nur für angemeldete Benutzer verfügbar sind, kann der Angreifer feststellen, ob der Benutzer bei der Zielseite angemeldet ist.
- [Frame-Zählung mit Fensterreferenzen](#frame-zählung_mit_fensterreferenzen): Bei diesem Angriff erhält der Angreifer eine Referenz auf ein [`window`](/de/docs/Web/API/Window)-Objekt, das eine Seite auf der Zielseite hostet, zum Beispiel als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open). Der Angreifer kann dann die Anzahl der {{htmlelement("iframe")}}-Elemente auf der Zielseite bestimmen, was wiederum aufzeigen könnte, ob der Benutzer bei der Zielseite angemeldet ist.
- [Leaking von Redirects mit einer CSP](#leaking_von_redirects_mit_einer_csp): Bei diesem Angriff hat die Angreifer-Website eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die nur erlaubt, eine bestimmte Seite der Zielseite zu laden, und versucht dann, diese Seite zu laden. Wenn der Seitenaufruf blockiert wird, weiß der Angreifer, dass die Ziel-URL die Anforderung weitergeleitet hat. Diese Weiterleitung könnte darauf hindeuten, dass der Benutzer angemeldet (oder nicht angemeldet) ist, abhängig davon, wie die Seite funktioniert.

Alle drei Angriffe werden auf die gleiche Weise ausgeführt: Der Angreifer entwirft eine Seite, die den Angriff implementiert, und überredet dann den Benutzer, die Seite zu besuchen, zum Beispiel indem er ihm eine E-Mail sendet oder einen Post mit dem Link teilt. Wenn der Benutzer die Seite besucht, wird der Angriff automatisch ausgeführt.

Im weiteren Verlauf dieses Abschnitts werden wir diese drei Angriffe etwas detaillierter beschreiben, um Ihnen ein konkretes Bild davon zu vermitteln, wie sie funktionieren. Obwohl die drei Angriffe recht unterschiedliche Teile der Webplattform betreffen, haben sie eine gemeinsame Ursache: das Ausmaß, in dem der Browser Websites ermöglicht, durch Mechanismen wie Einbettung, Laden von Subressourcen oder Öffnen neuer Fenster miteinander zu verbinden und zu interagieren.

> [!NOTE]
> Für einen vollständigeren Katalog von Cross-site Leaks siehe das [XS-Leaks Wiki](https://xsleaks.dev/) und das [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Existenz von Seiten über Fehlerereignisse leaken

Bei diesem Angriff testet der Angreifer, ob spezifische Seiten auf der Zielseite geladen werden können, indem er beobachtet, ob Versuche, sie als Ressourcen einzubinden, einen Fehler erzeugen. Wenn diese Seiten nur für angemeldete Benutzer verfügbar sind, könnte ein Angreifer damit bestimmen, ob ein Benutzer angemeldet ist.

Der Angriff beruht darauf, dass eine Website eine Ressource von einer anderen Website laden kann, indem beispielsweise das `src`-Attribut eines {{htmlelement("script")}}-Elements auf die URL der Ressource gesetzt wird:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Dies führt zu einer HTTP-Anfrage an die `https://example.org/` Website. Wenn die Anfrage Cookies enthält, die die Seite zur Identifizierung von Benutzern verwendet, und die angeforderte Seite nur für angemeldete Benutzer verfügbar ist, dann offenbart der Erfolg oder Misserfolg der Anfrage, ob der Benutzer angemeldet ist oder nicht.

Wenn die Anfrage fehlschlägt, weil beispielsweise der Server einen HTTP-Statuscode {{httpstatus("404")}} zurückgibt, löst das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis aus. Wenn die Anfrage erfolgreich ist, löst das Element ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis aus. Indem der Angreifer auf diese Ereignisse lauscht, kann er herausfinden, ob der Benutzer angemeldet ist.

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

Ein Angreifer könnte sogar die Benutzer-ID eines Benutzers herausfinden, indem er iterativ versucht, Seiten zu laden und zu sehen, ob Seiten wie `https://example.org/users/mein_benutzername` existieren.

### Frame-Zählung mit Fensterreferenzen

Bei einem Frame-Zählungsangriff findet der Angreifer heraus, wie viele Frames derzeit auf der Zielseite geladen sind. Dies leckt wiederum Informationen über den Zustand der Zielseite, was es dem Angreifer ermöglichen könnte, beispielsweise zu erfahren, ob der Benutzer derzeit auf der Seite angemeldet ist.

Wenn eine Angreifer-Website eine Referenz auf ein [`Window`](/de/docs/Web/API/Window)-Objekt erhält, das die Zielseite enthält, kann der Angreifer die Anzahl der Frames auf der Zielseite bestimmen, indem er die [`window.length`](/de/docs/Web/API/Window/length)-Eigenschaft ausliest.

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

### Leaking von Redirects mit einer CSP

Auf einigen Websites leitet der Server eine Anfrage weiter oder nicht, je nachdem, ob der Benutzer angemeldet ist (oder einen speziellen Status auf der Seite hat). Stellen Sie sich zum Beispiel eine Website vor, die Administratoren eine Seite auf `https://admin.example.org/` anzeigt. Wenn der Benutzer nicht angemeldet ist und diese Seite anfordert, könnte der Server ihn auf `https://login.example.org/` umleiten. Das bedeutet, dass ein Angreifer, der feststellen könnte, ob ein Versuch, `https://admin.example.org/` zu laden, zu einer Weiterleitung führte, weiß, ob der Benutzer Administrator auf der Seite ist.

Bei dem hier beschriebenen Angriff nutzt der Angreifer das [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Feature, um festzustellen, ob eine Cross-Site-Anfrage umgeleitet wurde.

- Zuerst erstellen Sie eine Seite, die durch eine CSP geregelt wird, die nur erlaubt, {{htmlelement("iframe")}}-Elemente mit Inhalten von `https://admin.example.org/` zu füllen.

- Dann fügen Sie einen Ereignis-Listener auf der Seite hinzu, der auf das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis lauscht.

- Schließlich erstellen Sie ein {{htmlelement("iframe")}}-Element und setzen sein `src`-Attribut auf `https://admin.example.org/`.

```html
<!DOCTYPE html>
<html>
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

- Wenn der Benutzer als Administrator angemeldet ist, wird das `<iframe>` geladen, und der Browser löst kein `securitypolicyviolation` aus.
- Wenn der Benutzer nicht als Administrator angemeldet ist, leitet der Server auf `https://login.example.org/` um. Da diese URL nicht von der CSP des Angreifers erlaubt ist, blockiert der Browser das `<iframe>` und löst das `securitypolicyviolation`-Ereignis aus, worauf der Ereignis-Handler des Angreifers ausgeführt wird.

Beachten Sie, dass dieser Angriff funktioniert, auch wenn die Zielseite das Einbetten mithilfe eines Mechanismus wie [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) verhindert.

## Abwehrmaßnahmen gegen Cross-site Leaks

Cross-site Leaks nutzen Mechanismen auf der Webplattform aus, die es Websites ermöglichen, miteinander zu interagieren. Dementsprechend beinhalten Abwehrmaßnahmen gegen Cross-site Leaks in der Regel die _Isolation_ der Zielwebsite von potenziellen Angreifern, indem diese Cross-Site-Interaktionen deaktiviert oder kontrolliert werden.

Da Cross-site Leaks auf viele verschiedene Weisen funktionieren können, gibt es keine einzelne Abwehrmaßnahme, die gegen alle funktioniert. Es gibt jedoch mehrere Praktiken, die gegen viele von ihnen wirken, und wir werden sie hier zusammenfassen.

### Fetch-Metadaten

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten")}} sind ein Begriff für eine Sammlung von HTTP-Request-Headern, die Informationen über den Kontext einer HTTP-Anfrage liefern, einschließlich:

- {{httpheader("Sec-Fetch-Site")}}: Ob die Anfrage same-origin, same-site oder cross-site ist.
- {{httpheader("Sec-Fetch-Mode")}}: Der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage.
- {{httpheader("Sec-Fetch-User")}}: Ob die Anfrage eine vom Benutzer initiierte Navigation ist.
- {{httpheader("Sec-Fetch-Dest")}}: Das [`destination`](/de/docs/Web/API/Request/destination) der Anfrage.

Fetch-Metadaten-Header sind an sich keine Verteidigungsmechanismen, sondern ermöglichen es einem Server, eine Richtlinie zu implementieren, die Anfragen in Cross-site Leaks sowie andere Angriffe wie [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriffe ablehnt.

Zum Beispiel, der [Existenz von Seiten über Fehlerereignisse leaken](#existenz_von_seiten_über_fehlerereignisse_leaken)-Angriff hängt davon ab, dass der Angreifer Cross-site-Anfragen stellen kann, um Seiten der Zielwebsite als Ressourcen zu laden:

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
  if (isAllowed(req)) {
    // Respond with the admin page if the user is admin
    getAdminPage(req, res);
  } else {
    res.status(404).send("Not found.");
  }
});
```

Da die Anfrage des Angreifers eine Cross-site-Anfrage ist und keine Navigation, gibt dieser Server immer einen Fehler zurück, unabhängig davon, ob der Benutzer angemeldet ist oder nicht.

Eine solche Richtlinie wird als _Resource Isolation Policy_ bezeichnet. Um mehr über die Implementierung von Isolationsrichtlinien mit Fetch-Metadaten zu erfahren, siehe [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) und [Isolation Policies](https://xsleaks.dev/docs/defenses/isolation-policies/).

### SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bestimmt, ob das Cookie in Anfragen gesendet wird, die von einer anderen Website stammen.

Der Wert `Lax` von `SameSite` bedeutet, dass Cross-Site-Anfragen das Cookie nur beinhalten, wenn die Anfrage eine Top-Level-Navigation ist (was im Wesentlichen bedeutet, dass der Wert in der Adressleiste des Browsers zur Zielseite wechselt) und eine {{Glossary("Safe/HTTP", "sichere")}} Methode verwendet (dies schließt insbesondere {{httpmethod("POST")}}-Anfragen aus).

Dies kann gegen einige Cross-site Leaks schützen. Zum Beispiel hängt der [Existenz von Seiten über Fehlerereignisse leaken](#existenz_von_seiten_über_fehlerereignisse_leaken)-Angriff davon ab, dass der Angreifer Cross-Site-Resource-Anfragen stellt, die die Sitzungscookies des Benutzers enthalten. Das Setzen von `SameSite` auf `Lax` für das Sitzungscookie des Benutzers würde diesen Angriff verhindern, da das Cookie nicht in der Anfrage des Angreifers enthalten wäre und keine Seiten, die eine Anmeldung erfordern, jemals zurückgegeben würden.

In der Regel sollte `SameSite` als Maßnahme zur Verteidigung in der Tiefe betrachtet und zusätzlich zu einer expliziteren Isolationsrichtlinie wie einer auf Fetch-Metadaten basierenden eingesetzt werden.

### Framing-Schutz

Viele Cross-site Leaks beruhen darauf, dass die angreifende Website das Ziel als {{htmlelement("iframe")}} einbetten kann. Zum Beispiel ist dies eine Methode, die ein Angreifer nutzen kann, um eine Referenz auf das [`window`](/de/docs/Web/API/Window) des Ziels zu erhalten, um einen [Frame-Zählungsangriff](#frame-zählung_mit_fensterreferenzen) zu ermöglichen.

Das bedeutet, dass es eine gute Praxis ist, zu verhindern, dass eine Seite eingebettet werden kann, es sei denn, Sie müssen das Einbetten zulassen, und wenn Sie das Einbetten zulassen müssen, beschränken Sie es so weit wie möglich.

Es gibt zwei relevante Werkzeuge hierfür:

- Die [`frame-ancestors`-Anweisung](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Der {{httpheader("X-Frame-Options")}}-Response-Header.

Die `frame-ancestors`-Anweisung ist ein Ersatz für `X-Frame-Options`. Obwohl [die Unterstützung von `frame-ancestors` durch Browser sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), unterstützen einige sehr alte Browser, wie Internet Explorer, `frame-ancestors` nicht.

Wenn sowohl `frame-ancestors` als auch `X-Frame-Options` gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`. Das bedeutet, dass es keinen Grund gibt, nicht sowohl `X-Frame-Options` als auch `frame-ancestors` zu setzen und damit das Einbetten auch in Browsern zu verhindern, die `frame-ancestors` nicht unterstützen.

### Cross-Origin Opener Policy (COOP)

Wie wir im [Frame-Zählungsangriff](#frame-zählung_mit_fensterreferenzen) gesehen haben, ist eine weitere Möglichkeit, eine Referenz auf das Ziel-`window`](/de/docs/Web/API/Window) zu erhalten, den Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open) zu nutzen:

```js
const target = window.open("https://example.com");
```

Der {{httpheader("Cross-Origin-Opener-Policy")}}-Response-Header bestimmt, ob ein Dokument innerhalb derselben {{Glossary("Browsing_context", "browsing context group")}} wie das Dokument geöffnet wird, das es geöffnet hat.

Wenn Ihr Server diesen Header sendet und auf einen anderen Wert als den Standardwert `"unsafe-none"` setzt, dann wird Ihre Seite in eine andere Browsing-Context-Gruppe geladen, wenn ein Dokument von einem anderen Ursprung versucht, Ihre Seite mit `window.open()` zu öffnen. Unter anderem bedeutet dies, dass der Opener keine Referenz auf das `window`-Objekt Ihrer Seite erhalten wird und es daher nicht für einen Frame-Zählungsangriff verwenden kann.

### Zusammenfassung der Abwehrmaßnahmen

Wie wir gesehen haben, umfassen Cross-site Leaks eine Reihe von Angriffen, die sich auf verschiedene Teile der Webplattform richten: Eine einzelne Abwehrmaßnahme funktioniert nicht gegen alle von ihnen. In der Tat haben einige Leaks, wie dasjenige, das CSP nutzt, um Redirects zu leaken, derzeit keine Abwehrmaßnahmen.

In diesem Leitfaden haben wir einige Abwehrmaßnahmen skizziert, die Ihrer Website helfen, sich vor potenziellen Angreifern zu isolieren, und wir empfehlen, alle von ihnen zu implementieren:

- Verwenden Sie Fetch-Metadaten, um eine Ressourcen-Isolationsrichtlinie zu implementieren.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn möglich, oder `Lax`, wenn nötig.
- Verwenden Sie die `frame-ancestors`-CSP-Anweisung und den `X-Frame-Options`-Response-Header, um zu verhindern, dass Ihre Seite eingebettet wird, oder um zu kontrollieren, welche Seiten Ihre Seite einbetten dürfen.
- Senden Sie den `Cross-Origin-Opener-Policy`-Response-Header, um zu verhindern, dass andere Seiten auf Ihr globales `window`-Objekt zugreifen.

## Siehe auch

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
