---
title: Cross-site Leaks (XS-Leaks)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: 81bf621759d3a52fdf737c2d75f186a0073d1406
---

Cross-Site-Leaks (auch bekannt als XS-Leaks) sind eine Klasse von Angriffen, bei denen die Website eines Angreifers Informationen über die Ziel-Website oder über die Beziehung des Benutzers zur Ziel-Website ableiten kann. Dies geschieht durch die Nutzung von Webplattform-APIs, die Websites erlauben, miteinander zu interagieren. Die Informationen, die durchgesickert werden könnten, umfassen beispielsweise:

- Ob der Benutzer die Ziel-Website besucht hat.
- Ob der Benutzer in die Ziel-Website eingeloggt ist.
- Welche Benutzer-ID der Benutzer auf der Website hat.
- Was der Benutzer kürzlich auf der Website gesucht hat.

Dies mag weniger schädlich erscheinen als beispielsweise ein [Cross-Site-Scripting-Angriff (XSS)](/de/docs/Web/Security/Attacks/XSS), kann jedoch dennoch schwerwiegende Folgen für die Benutzer haben. Zum Beispiel:

- Ein Benutzer könnte Konten auf Websites haben, die er nicht öffentlich machen möchte. Das Durchsickern dieser Informationen an einen Angreifer könnte ihn Erpressung oder Vergeltungsmaßnahmen einer repressiven Regierung aussetzen (zum Beispiel gegen einen Benutzer, der Informationen über bestimmte medizinische Verfahren sucht).
- Wenn bekannt ist, dass ein Benutzer ein Konto auf einer Website hat, insbesondere wenn dessen Benutzer-ID ermittelt werden kann, kann ein nachfolgender Phishing-Angriff viel überzeugender erscheinen.

Im Gegensatz zu anderen Angriffen wie [XSS](/de/docs/Web/Security/Attacks/XSS) oder [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) sind Cross-Site-Leaks keine einzelne Technik. Stattdessen handelt es sich um einen Begriff für eine ganze Klasse von Angriffen, die Schwächen in der Art und Weise ausnutzen, wie Browser Websites voneinander isolieren.

In diesem Leitfaden werden wir nicht versuchen, jeden Cross-Site-Leak-Angriff und jede Verteidigung zu beschreiben. Stattdessen beginnen wir mit der Beschreibung einiger Beispielangriffe, dann skizzieren wir die gemeinsamen zugrunde liegenden Schwächen, die diese ermöglichen, und beschreiben einige allgemeine Verteidigungsmaßnahmen, die gegen viele bekannte Angriffe wirken können.

## Beispiel-Cross-Site-Leaks

In diesem Abschnitt beschreiben wir drei verschiedene Cross-Site-Leaks, um eine Vorstellung davon zu geben, wie sie funktionieren.

- [Seitenexistenz mit Fehlerereignissen durchsickern lassen](#seitenexistenz_mit_fehlerereignissen_durchsickern_lassen): Bei diesem Angriff kann ein Angreifer feststellen, ob bestimmte Endpunkte der Ziel-Website HTTP-Fehlercodes zurückgeben, indem er versucht, sie als Ressourcen zu laden und auf die [`error`](/de/docs/Web/API/HTMLElement/error_event) und [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignisse hört. Wenn bestimmte Seiten nur für eingeloggte Benutzer verfügbar sind, kann der Angreifer feststellen, ob der Benutzer bei der Ziel-Website angemeldet ist.
- [Frame-Zählung mit Fensterreferenzen](#frame-zählung_mit_fensterreferenzen): Bei diesem Angriff erhält der Angreifer eine Referenz auf ein [`window`](/de/docs/Web/API/Window)-Objekt, das eine Seite auf der Ziel-Website hostet, zum Beispiel als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open). Der Angreifer kann dann die Anzahl der {{htmlelement("iframe")}}-Elemente auf der Zielseite bestimmen, was wiederum aufzeigen könnte, ob der Benutzer bei der Zielseite angemeldet ist.
- [Weiterleitungen mit einer CSP durchsickern lassen](#weiterleitungen_mit_einer_csp_durchsickern_lassen): Bei diesem Angriff hat die Seite des Angreifers eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die nur das Laden einer bestimmten Seite von der Ziel-Website erlaubt, und versucht dann, diese Seite zu laden. Wenn das Laden der Seite blockiert wird, weiß der Angreifer, dass die Ziel-Website die Anfrage weitergeleitet hat. Diese Weiterleitung kann anzeigen, ob der Benutzer (nicht) eingeloggt war, je nachdem, wie die Website funktioniert.

Alle drei Angriffe werden auf die gleiche Weise durchgeführt: Der Angreifer erstellt eine Seite, die den Angriff implementiert, und überzeugt dann den Benutzer, die Seite zu besuchen, zum Beispiel indem er ihm eine E-Mail sendet oder einen Beitrag mit dem Link teilt. Beim Besuch der Seite wird der Angriff automatisch ausgeführt.

Im weiteren Verlauf dieses Abschnitts werden wir diese drei Angriffe etwas detaillierter beschreiben, um Ihnen ein konkreteres Gefühl dafür zu geben, wie sie funktionieren. Obwohl die drei Angriffe ganz unterschiedliche Teile der Webplattform anvisieren, haben sie eine gemeinsame zugrunde liegende Ursache: Das Ausmaß, in dem der Browser es Websites ermöglicht, sich über Mechanismen wie das Framing, das Laden von Subressourcen oder das Öffnen neuer Fenster zu verbinden und miteinander zu interagieren.

> [!NOTE]
> Für einen umfassenderen Katalog von Cross-Site-Leaks siehe das [XS-Leaks Wiki](https://xsleaks.dev/) und das [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Seitenexistenz mit Fehlerereignissen durchsickern lassen

Bei diesem Angriff testet der Angreifer, ob bestimmte Seiten auf der Ziel-Website geladen werden können, indem er überprüft, ob das Einbetten dieser als Ressourcen einen Fehler erzeugt. Wenn diese Seiten nur für eingeloggte Benutzer verfügbar sind, könnte ein Angreifer feststellen, ob ein Benutzer eingeloggt ist.

Der Angriff hängt von der Fähigkeit einer Website ab, eine Ressource von einer anderen Website zu laden, beispielsweise indem das `src`-Attribut eines {{htmlelement("script")}}-Elements auf die URL der Ressource gesetzt wird:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Dies führt zu einer HTTP-Anfrage an die Website `https://example.org/`. Wenn die Anfrage Cookies enthält, die die Website zur Identifizierung von Benutzern verwendet, und die angeforderte Seite nur für eingeloggte Benutzer verfügbar ist, dann zeigt der Erfolg oder Misserfolg der Anfrage, ob der Benutzer eingeloggt ist.

Wenn die Anfrage fehlschlägt, beispielsweise weil der Server einen HTTP-Statuscode {{httpstatus("404")}} zurückgibt, löst das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis aus. Wenn der Antrag erfolgreich ist, löst das Element ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis aus. Indem der Angreifer auf diese Ereignisse hört, kann er herausfinden, ob der Benutzer eingeloggt ist.

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

Ein Angreifer könnte sogar die Benutzer-ID entdecken, indem er iterativ versucht, Seiten zu laden, um zu sehen, ob Seiten wie `https://example.org/users/my_username` existieren.

### Frame-Zählung mit Fensterreferenzen

Bei einem Frame-Zählungsangriff findet der Angreifer die Anzahl der aktuell auf der Zielseite geladenen Frames heraus. Das gibt wiederum Informationen über den Zustand der Zielseite preis, was dem Angreifer wiederum ermöglichen könnte zu erfahren, ob der Benutzer gerade auf der Website eingeloggt ist.

Wenn eine Angreifer-Website eine Referenz auf ein [`Window`](/de/docs/Web/API/Window)-Objekt erhält, das die Zielseite enthält, kann der Angreifer die Anzahl der Frames auf der Zielseite zählen, indem er die [`window.length`](/de/docs/Web/API/Window/length)-Eigenschaft liest.

Der Angreifer kann ein `Window`-Objekt erhalten, indem er [`window.open()`](/de/docs/Web/API/Window/open) aufruft:

```js
const target = window.open("https://example.org");
const frames = target.length;
```

Alternativ kann der Angreifer die Zielseite in ein {{htmlelement("iframe")}} einbetten und die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow)-Eigenschaft des Frames abrufen:

```html
<iframe src="https://example.org"></iframe>
```

```js
const target = document.querySelector("iframe").contentWindow;
const frames = target.length;
```

### Weiterleitungen mit einer CSP durchsickern lassen

Auf einigen Websites leitet der Server eine Anfrage weiter oder nicht, je nachdem, ob der Benutzer eingeloggt ist (oder auf der Website einen speziellen Status hat). Stellen Sie sich zum Beispiel eine Website vor, die Administratoren eine Seite unter `https://admin.example.org/` anzeigt. Wenn der Benutzer nicht eingeloggt ist und diese Seite anfordert, könnte der Server ihn zu `https://login.example.org/` weiterleiten.
Das bedeutet, dass, wenn ein Angreifer bestimmen könnte, ob ein Versuch, `https://admin.example.org/` zu laden, zu einer Weiterleitung geführt hat, er weiß, ob der Benutzer ein Administrator auf der Website ist.

In dem hier beschriebenen Angriff nutzt der Angreifer die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Funktion, um zu erkennen, ob eine Cross-Site-Anfrage weitergeleitet wurde.

- Zunächst erstellt er eine Seite, die durch eine CSP geregelt ist, die nur erlaubt, dass {{htmlelement("iframe")}}-Elemente Inhalte von `https://admin.example.org/` enthalten.

- Als Nächstes fügt er einen Ereignislistener in der Seite hinzu, der auf das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis hört.

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

- Wenn der Benutzer als Administrator eingeloggt ist, wird das `<iframe>` geladen, und der Browser löst kein `securitypolicyviolation`-Ereignis aus.
- Wenn der Benutzer nicht als Administrator eingeloggt ist, leitet der Server zu `https://login.example.org/` weiter. Da diese URL von der CSP des Angreifers nicht erlaubt wird, blockiert der Browser das `<iframe>` und löst das `securitypolicyviolation`-Ereignis aus, und der Ereignishandler des Angreifers wird ausgeführt.

Beachten Sie, dass dieser Angriff auch dann funktioniert, wenn die Ziel-Website das Einbetten mit einem Mechanismus wie [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) verhindert.

## Verteidigungen gegen Cross-Site-Leaks

Cross-Site-Leaks nutzen Mechanismen der Webplattform aus, die es Websites ermöglichen, miteinander zu interagieren. Entsprechend beinhalten die Verteidigungsmaßnahmen gegen Cross-Site-Leaks üblicherweise die _Isolation_ der Ziel-Website von potenziellen Angreifern, indem diese Cross-Site-Interaktionen deaktiviert oder kontrolliert werden.

Da Cross-Site-Leaks auf viele verschiedene Arten funktionieren können, gibt es keine einzige Verteidigung, die gegen alle funktioniert. Es gibt jedoch mehrere Praktiken, die gegen viele von ihnen wirken, und wir werden sie hier zusammenfassen.

### Fetch-Metadaten

[Fetch-Metadaten](/de/docs/Web/HTTP/Guides/Fetch_metadata) ist der Begriff für eine Sammlung von HTTP-Anforderungs-Headern, die Informationen über den Kontext einer HTTP-Anfrage liefern, einschließlich:

- {{httpheader("Sec-Fetch-Site")}}: Ob die Anfrage gleichherkunft, gleichsite oder cross-site ist.
- {{httpheader("Sec-Fetch-Mode")}}: Der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage.
- {{httpheader("Sec-Fetch-User")}}: Ob die Anfrage eine benutzerinitiierte Navigation ist.
- {{httpheader("Sec-Fetch-Dest")}}: Das [`destination`](/de/docs/Web/API/Request/destination) der Anfrage.

Fetch-Metadaten-Header sind kein Verteidigungsmechanismus an sich, sondern ermöglichen es einem Server, eine Politik zu implementieren, die Anfragen ablehnt, die bei Cross-Site-Leaks sowie bei anderen Angriffen wie [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) verwendet werden.

Zum Beispiel hängt der [Angriff, der die Existenz von Seiten mit Fehlerereignissen durchsickern lässt](#seitenexistenz_mit_fehlerereignissen_durchsickern_lassen) davon ab, dass der Angreifer cross-site Anfragen stellen kann, um Seiten, die der Zielseite gehören, als Ressourcen zu laden:

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

Da die Anfrage des Angreifers cross-site ist und keine Navigation darstellt, gibt dieser Server immer einen Fehler zurück, unabhängig davon, ob der Benutzer eingeloggt ist oder nicht.

Beachten Sie, dass wir auch den {{httpheader("Vary")}} Antwort-Header senden. Dies stellt sicher, dass, wenn die Antwort zwischengespeichert wird, die zwischengespeicherte Antwort nur an Anfragen mit den gleichen Werten für die Fetch-Metadaten-Header, die wir verwenden, gegeben wird.

Eine solche Politik wird als _Resource Isolation Policy_ bezeichnet. Um viel mehr über die Implementierung von Isolation Policies mit Fetch-Metadaten zu erfahren, siehe [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) und [Isolation Policies](https://xsleaks.dev/docs/defenses/isolation-policies/).

### SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookie-Attribut bestimmt, ob das Cookie in Anfragen gesendet wird, die von einer anderen Website stammen.

Der `Lax`-Wert von `SameSite` bedeutet, dass cross-site Anfragen das Cookie nur einschließen, wenn die Anfrage eine Top-Level-Navigation ist (was im Wesentlichen bedeutet, dass der Wert in der Adressleiste des Browsers zur Zielseite wechselt) und eine {{Glossary("Safe/HTTP", "sichere")}} Methode verwendet (insbesondere werden damit {{httpmethod("POST")}}-Anfragen ausgeschlossen).

Dies kann gegen einige Cross-Site-Leaks schützen. Der [Angriff, der die Existenz von Seiten mit Fehlerereignissen durchsickern lässt](#seitenexistenz_mit_fehlerereignissen_durchsickern_lassen), hängt beispielsweise davon ab, dass der Angreifer cross-site Ressourcenanfragen stellen kann, die die Sitzungscookies des Benutzers enthalten. Das Setzen von `SameSite` auf `Lax` für das Sitzungscookie des Benutzers würde diesen Angriff verhindern, da das Cookie in die Anfrage des Angreifers nicht aufgenommen würde und keine Seiten, die einen Login erfordern, jemals zurückgegeben werden würden.

In der Regel sollte `SameSite` als Maßnahme zur Tiefenverteidigung behandelt und zusammen mit einer expliziteren Isolation Policy wie einer auf Fetch-Metadaten basierenden implementiert werden.

### Framing-Schutz

Viele Cross-Site-Leaks beruhen darauf, dass die angreifende Website die Zielseite als {{htmlelement("iframe")}} einbetten kann. Beispielsweise ist dies eine Methode, mit der ein Angreifer eine Referenz auf das [`window`](/de/docs/Web/API/Window) der Zielseite erhalten kann, um einen [Frame-Zählungsangriff](#frame-zählung_mit_fensterreferenzen) zu ermöglichen.

Das bedeutet, dass es eine gute Praxis ist, zu verhindern, dass eine Website eingebettet werden kann, es sei denn, Sie müssen das Einbetten zulassen. Und wenn Sie das Einbetten zulassen müssen, beschränken Sie es so weit wie möglich.

Es gibt zwei relevante Werkzeuge hier:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Der {{httpheader("X-Frame-Options")}} Antwort-Header.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Obwohl [die Unterstützung von `frame-ancestors` in Browsern sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), unterstützen einige sehr alte Browser, insbesondere Internet Explorer, `frame-ancestors` nicht.

Wenn `frame-ancestors` und `X-Frame-Options` beide gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`. Das bedeutet, dass es keinen Grund gibt, nicht sowohl `X-Frame-Options` als auch `frame-ancestors` zu setzen und das Einbetten auch in Browsern zu verhindern, die `frame-ancestors` nicht unterstützen.

### Cross-Origin Opener Policy (COOP)

Wie wir im [Frame-Zählungsangriff](#frame-zählung_mit_fensterreferenzen) gesehen haben, ist eine andere Möglichkeit, eine Referenz auf das [`window`](/de/docs/Web/API/Window) der Zielseite zu erhalten, die Rückgabe eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open):

```js
const target = window.open("https://example.com");
```

Der {{httpheader("Cross-Origin-Opener-Policy")}} Antwort-Header bestimmt, ob ein Dokument in der gleichen {{Glossary("Browsing_context", "Browsing-Context-Gruppe")}} geöffnet wird wie das Dokument, das es geöffnet hat.

Wenn Ihr Server diesen Header sendet und ihn auf einen anderen Wert als den Standardwert `"unsafe-none"` setzt, wird Ihre Seite in eine andere Browsing-Context-Gruppe geladen, wenn ein Dokument von einem anderen Ursprung versucht, Ihre Seite mit `window.open()` zu öffnen. Unter anderem bedeutet das, dass der Opener keine Referenz auf das `window`-Objekt für Ihre Seite erhält und es daher nicht in einem Frame-Zählungsangriff verwenden kann.

## Verteidigungs-Checkliste

Cross-Site-Leaks umfassen eine Reihe von Angriffen, die auf verschiedene Teile der Webplattform abzielen. Eine einzelne Verteidigung funktioniert nicht gegen alle, und einige Leaks, wie das, das CSP ausnutzt, um Weiterleitungen zu durchsickern, haben noch keine Verteidigungen.

In diesem Leitfaden haben wir einige Verteidigungsmaßnahmen skizziert, die helfen, Ihre Website von potenziellen Angreifern zu isolieren, und wir empfehlen, alle umzusetzen:

- Verwenden Sie Fetch-Metadaten, um eine Resource Isolation Policy zu implementieren.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn Sie können, oder `Lax`, wenn Sie müssen.
- Verwenden Sie die `frame-ancestors`-CSP-Direktive und den `X-Frame-Options`-Antwort-Header, um zu verhindern, dass Ihre Website eingebettet wird, oder um zu kontrollieren, welche Websites Ihre einbetten können.
- Senden Sie den `Cross-Origin-Opener-Policy`-Antwort-Header, um zu verhindern, dass andere Websites auf Ihr `window`-Globalobjekt zugreifen.

## Siehe auch

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
