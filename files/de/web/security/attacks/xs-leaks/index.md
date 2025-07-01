---
title: Cross-Site-Leaks (XS-Leaks)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

Cross-Site-Leaks (auch XS-Leaks genannt) sind eine Art von Angriff, bei dem die Webseite eines Angreifers Informationen über die Zielseite oder über die Beziehung des Benutzers zur Zielseite ableiten kann, indem Webplattform-APIs genutzt werden, die es Webseiten ermöglichen, miteinander zu interagieren. Die geleakten Informationen könnten beispielsweise Folgendes umfassen:

- Ob der Benutzer die Zielseite besucht hat.
- Ob der Benutzer bei der Zielseite eingeloggt ist.
- Was die Benutzer-ID des Benutzers auf der Seite ist.
- Wonach der Benutzer kürzlich auf der Seite gesucht hat.

Dies mag wie ein weit weniger schädliches Problem erscheinen als beispielsweise ein [Cross-Site-Scripting](/de/docs/Web/Security/Attacks/XSS)-Angriff, aber es kann dennoch schwerwiegende Konsequenzen für Benutzer haben. Zum Beispiel:

- Ein Benutzer könnte Konten auf Webseiten haben, die er nicht öffentlich machen möchte. Das Leaken dieser Informationen an einen Angreifer könnte ihn Erpressung oder Vergeltungsmaßnahmen durch eine unterdrückerische Regierung aussetzen (zum Beispiel gegen einen Benutzer, der Informationen über spezifische medizinische Verfahren sucht).
- Das Wissen, dass ein Benutzer ein Konto auf einer Seite hat, besonders wenn seine Benutzer-ID ermittelt werden kann, kann einen anschließenden Phishing-Angriff viel überzeugender machen.

Im Gegensatz zu anderen Angriffen wie [XSS](/de/docs/Web/Security/Attacks/XSS) oder [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) sind Cross-Site-Leaks keine einzelne Technik. Stattdessen sind sie ein Begriff für eine ganze Klasse von Angriffen, die Schwächen in der Art und Weise ausnutzen, wie Browser Webseiten voneinander isolieren.

In diesem Leitfaden werden wir nicht versuchen, jeden Cross-Site-Leak-Angriff und seine Abwehr zu beschreiben. Stattdessen beginnen wir mit der Beschreibung einiger Beispielangriffe, umreißen dann die gemeinsamen zugrunde liegenden Schwächen, die sie ermöglichen, und beschreiben schließlich einige allgemeine Abwehrmaßnahmen, die gegen viele bekannte Angriffe wirken können.

## Beispielhafte Cross-Site-Leaks

In diesem Abschnitt beschreiben wir drei verschiedene Cross-Site-Leaks, um eine Vorstellung davon zu vermitteln, wie sie funktionieren.

- [Leaking-Seitenexistenz durch Fehlerereignisse](#leaking-seitenexistenz_durch_fehlerereignisse): In diesem Angriff kann ein Angreifer bestimmen, ob bestimmte Endpunkte auf der Zielseite HTTP-Fehlercodes zurückgeben, indem er versucht, sie als Ressourcen zu laden und auf die [`error`](/de/docs/Web/API/HTMLElement/error_event)- und [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignisse hört. Wenn bestimmte Seiten nur für eingeloggte Benutzer verfügbar sind, kann der Angreifer feststellen, ob der Benutzer bei der Zielseite angemeldet ist.
- [Frame-Zählung mithilfe von Fensterreferenzen](#frame-zählung_mithilfe_von_fensterreferenzen): In diesem Angriff erhält der Angreifer eine Referenz zu einem [`window`](/de/docs/Web/API/Window)-Objekt, das eine Seite auf der Zielseite hostet, zum Beispiel als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open). Der Angreifer kann dann die Anzahl der {{htmlelement("iframe")}}-Elemente auf der Zielseite ermitteln, was wiederum verraten könnte, ob der Benutzer bei der Zielseite angemeldet ist.
- [Leaking von Weiterleitungen mit einer CSP](#leaking_von_weiterleitungen_mit_einer_csp): In diesem Angriff hat die Seite des Angreifers eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die nur erlaubt, dass eine bestimmte Seite von der Zielseite geladen wird, und versucht dann, diese Seite zu laden. Wenn das Laden der Seite blockiert wird, weiß der Angreifer, dass die Zielseite die Anfrage weitergeleitet hat. Diese Weiterleitung könnte anzeigen, ob der Benutzer eingeloggt ist (oder nicht), abhängig davon, wie die Seite funktioniert.

Alle drei Angriffe werden auf die gleiche Weise eingesetzt: Der Angreifer erstellt eine Seite, die den Angriff implementiert, und überredet dann den Benutzer, die Seite zu besuchen, zum Beispiel durch das Senden einer E-Mail oder das Teilen eines Beitrags mit dem enthaltenen Link. Wenn der Benutzer die Seite besucht, wird der Angriff automatisch ausgeführt.

Im restlichen Teil dieses Abschnitts beschreiben wir diese drei Angriffe etwas detaillierter, um Ihnen ein konkretes Gefühl dafür zu geben, wie sie funktionieren. Obwohl die drei Angriffe auf ganz unterschiedliche Teile der Webplattform abzielen, haben sie eine gemeinsame Grundursache: Das Ausmaß, in dem der Browser es Websites ermöglicht, sich über Mechanismen wie Frames, Laden von Subressourcen oder Öffnen neuer Fenster gegenseitig zu verbinden und zu interagieren.

> [!NOTE]
> Für einen umfassenderen Katalog von Cross-Site-Leaks siehe das [XS-Leaks Wiki](https://xsleaks.dev/) und das [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Leaking-Seitenexistenz durch Fehlerereignisse

Bei diesem Angriff testet der Angreifer, ob bestimmte Seiten auf der Zielseite geladen werden können, indem er überprüft, ob Versuche, sie als Ressourcen einzubetten, einen Fehler erzeugen. Wenn diese Seiten nur für eingeloggte Benutzer verfügbar sind, könnte ein Angreifer feststellen, ob ein Benutzer eingeloggt ist.

Der Angriff beruht auf der Fähigkeit einer Website, eine Ressource von einer anderen Seite zu laden, zum Beispiel durch das Setzen des `src`-Attributs eines {{htmlelement("script")}}-Elements auf die URL der Ressource:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Dies führt zu einer HTTP-Anfrage an die `https://example.org/`-Website. Wenn die Anfrage Cookies enthält, die die Seite zur Identifizierung von Benutzern verwendet, und die angeforderte Seite nur für eingeloggte Benutzer verfügbar ist, dann offenbart der Erfolg oder das Scheitern der Anfrage, ob der Benutzer eingeloggt ist oder nicht.

Wenn die Anfrage fehlschlägt, zum Beispiel weil der Server einen HTTP-{{httpstatus("404")}}-Statuscode zurückgibt, dann löst das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis aus. Wenn die Anfrage erfolgreich ist, löst das Element ein [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis aus. Indem er auf diese Ereignisse hört, kann der Angreifer herausfinden, ob der Benutzer eingeloggt ist.

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

Ein Angreifer kann sogar in der Lage sein, die Benutzer-ID eines Benutzers zu entdecken, indem er iterativ versucht, Seiten zu laden, um zu sehen, ob Seiten wie `https://example.org/users/my_username` existieren.

### Frame-Zählung mithilfe von Fensterreferenzen

Bei einem Frame-Zählungsangriff stellt der Angreifer die Anzahl der derzeit in der Zielseite geladenen Frames fest. Dies wiederum leakt Informationen über den Zustand der Zielseite, die es dem Angreifer ermöglichen könnten, zum Beispiel herauszufinden, ob der Benutzer derzeit bei der Seite eingeloggt ist.

Wenn eine Angreiferseite eine Referenz zu einem [`Window`](/de/docs/Web/API/Window)-Objekt enthält, das die Zielseite enthält, kann der Angreifer durch Ablesen der [`window.length`](/de/docs/Web/API/Window/length)-Eigenschaft die Anzahl der Frames auf der Zielseite zählen.

Der Angreifer kann ein `Window`-Objekt durch Aufrufen von [`window.open()`](/de/docs/Web/API/Window/open) erhalten:

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

### Leaking von Weiterleitungen mit einer CSP

Auf einigen Websites wird die Anfrage je nach Anmeldung des Benutzers (oder einem speziellen Status auf der Seite) umgeleitet oder nicht. Stellen Sie sich zum Beispiel eine Seite vor, die Administratoren auf einer Seite unter `https://admin.example.org/` zeigt. Wenn der Benutzer nicht eingeloggt ist und diese Seite anfragt, könnte der Server ihn möglicherweise zu `https://login.example.org/` umleiten.
Das bedeutet, dass wenn ein Angreifer feststellen könnte, ob ein Versuch, `https://admin.example.org/` zu laden, zu einer Weiterleitung führte, er wüsste, ob der Benutzer ein Administrator auf der Seite ist.

In dem hier beschriebenen Angriff nutzt der Angreifer die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Funktion, um zu erkennen, ob eine Cross-Site-Anfrage weitergeleitet wurde.

- Zuerst erstellt der Angreifer eine Seite, die durch eine CSP geregelt wird, die nur erlaubt, dass {{htmlelement("iframe")}}-Elemente Inhalte von `https://admin.example.org/` enthalten.

- Danach fügt der Angreifer einen Ereignislistener auf der Seite hinzu, der auf das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis hört.

- Schließlich erstellt der Angreifer ein {{htmlelement("iframe")}}-Element und setzt dessen `src`-Attribut auf `https://admin.example.org/`.

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

- Wenn der Benutzer als Admin eingeloggt ist, lädt das `<iframe>`, und der Browser löst kein `securitypolicyviolation` aus.
- Wenn der Benutzer nicht als Admin eingeloggt ist, leitet der Server zu `https://login.example.org/` um. Da diese URL von der CSP des Angreifers nicht erlaubt ist, blockiert der Browser das `<iframe>` und löst das `securitypolicyviolation`-Ereignis aus, und der Ereignishandler des Angreifers wird ausgeführt.

Beachten Sie, dass dieser Angriff auch funktioniert, wenn die Zielseite das Einbetten durch einen Mechanismus wie [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) verbietet.

## Abwehrmaßnahmen gegen Cross-Site-Leaks

Cross-Site-Leaks nutzen Mechanismen in der Webplattform aus, die es Webseiten ermöglichen, miteinander zu interagieren. Entsprechend beinhalten die Abwehrmaßnahmen gegen Cross-Site-Leaks in der Regel das _Isolieren_ der Zielseite von potenziellen Angreifern, indem diese Cross-Site-Interaktionen deaktiviert oder kontrolliert werden.

Da Cross-Site-Leaks auf viele verschiedene Arten funktionieren können, gibt es keine einzige Abwehrmaßnahme, die gegen alle wirkt. Es gibt jedoch mehrere Praktiken, die gegen viele von ihnen wirken, und wir werden sie hier zusammenfassen.

### Fetch-Metadaten

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten")}} ist der Begriff für eine Sammlung von HTTP-Anforderungs-Headern, die Informationen über den Kontext einer HTTP-Anfrage bereitstellen, einschließlich:

- {{httpheader("Sec-Fetch-Site")}}: Ob die Anfrage herkunftsgleich, gleichseitig oder seitenübergreifend ist.
- {{httpheader("Sec-Fetch-Mode")}}: Der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage.
- {{httpheader("Sec-Fetch-User")}}: Ob die Anfrage eine benutzerinitiierte Navigation ist.
- {{httpheader("Sec-Fetch-Dest")}}: Das [`destination`](/de/docs/Web/API/Request/destination) der Anfrage.

Fetch-Metadaten-Header sind kein Verteidigungsmechanismus an sich, ermöglichen es einem Server jedoch, eine Richtlinie zu implementieren, die Anfragen ablehnt, die in Cross-Site-Leaks sowie in anderen Angriffen wie [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriffen verwendet werden.

Zum Beispiel hängt der [Leaking-Seitenexistenz durch Fehlerereignisse](#leaking-seitenexistenz_durch_fehlerereignisse) Angriff davon ab, dass der Angreifer seitenübergreifende Anfragen stellen kann, um Seiten als Ressourcen zu laden, die zur Zielseite gehören:

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

Da die Anfrage des Angreifers seitenübergreifend ist und keine Navigation darstellt, gibt dieser Server immer einen Fehler für sie zurück, unabhängig davon, ob der Benutzer eingeloggt ist.

Beachten Sie, dass wir auch den {{httpheader("Vary")}}-Antwort-Header senden. Dies stellt sicher, dass, wenn die Antwort zwischengespeichert wird, die zwischengespeicherte Antwort nur für Anfragen mit denselben Werten für die von uns verwendeten Fetch-Metadaten-Header bereitgestellt wird.

Eine solche Richtlinie wird als _Ressourcenisolationsrichtlinie_ bezeichnet. Um mehr darüber zu erfahren, wie man Isolationsrichtlinien mit Fetch-Metadaten implementiert, siehe [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) und [Isolationsrichtlinien](https://xsleaks.dev/docs/defenses/isolation-policies/).

### SameSite-Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookie-Attribut bestimmt, ob das Cookie in Anforderungen gesendet wird, die von einer anderen Website stammen.

Der `Lax`-Wert von `SameSite` bedeutet, dass seitenübergreifende Anfragen das Cookie nur einschließen, wenn die Anfrage eine Navigation auf oberster Ebene ist (was im Wesentlichen bedeutet, dass sich der Wert in der Adressleiste des Browsers in die Zielseite ändert) und eine {{Glossary("Safe/HTTP", "sichere")}} Methode verwendet (meistens schließt dies {{httpmethod("POST")}}-Anfragen aus).

Dies kann gegen einige Cross-Site-Leaks schützen. Zum Beispiel hängt der [Leaking-Seitenexistenz durch Fehlerereignisse](#leaking-seitenexistenz_durch_fehlerereignisse) Angriff davon ab, dass der Angreifer seitenübergreifende Ressourcenanfragen stellen kann, die die Sitzungs-Cookies des Benutzers enthalten. Das Setzen von `SameSite` auf `Lax` für das Sitzungscookie des Benutzers würde diesen Angriff verhindern, da das Cookie in der Anfrage des Angreifers nicht enthalten wäre und keine Seiten, die eine Anmeldung erfordern, jemals zurückgegeben würden.

Im Allgemeinen sollte `SameSite` als Maßnahme zur tiefgehenden Verteidigung behandelt und zusätzlich zu einer expliziteren Isolationsrichtlinie wie einer auf der Basis von Fetch-Metadaten eingesetzt werden.

### Einbettungsschutz

Viele Cross-Site-Leaks verlassen sich darauf, dass die angreifende Seite die Zielseite als {{htmlelement("iframe")}} einbetten kann. Zum Beispiel ist dies eine Methode, die ein Angreifer verwenden kann, um eine Referenz zum [`window`](/de/docs/Web/API/Window) der Zielseite zu erhalten, um einen [Frame-Zählungsangriff](#frame-zählung_mithilfe_von_fensterreferenzen) durchzuführen.

Dies bedeutet, dass es eine gute Praxis ist, zu verhindern, dass eine Seite eingebettet werden kann, es sei denn, Sie müssen das Einbetten zulassen, und wenn Sie es zulassen müssen, beschränken Sie es so weit wie möglich.

Es gibt zwei relevante Werkzeuge hierfür:

- Die [`frame-ancestors`-Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP).
- Der {{httpheader("X-Frame-Options")}}-Antwort-Header.

Die `frame-ancestors`-Direktive ist ein Ersatz für `X-Frame-Options`. Obwohl [die Browser-Unterstützung für `frame-ancestors` sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), unterstützen einige sehr alte Browser, insbesondere Internet Explorer, `frame-ancestors` nicht.

Wenn `frame-ancestors` und `X-Frame-Options` beide gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`. Dies bedeutet, dass es keinen Grund gibt, `X-Frame-Options` nicht zusätzlich zu `frame-ancestors` zu setzen und somit das Einbetten sogar in Browsern zu verhindern, die `frame-ancestors` nicht unterstützen.

### Cross-Origin-Opener-Policy (COOP)

Wie wir beim [Frame-Zählungsangriff](#frame-zählung_mithilfe_von_fensterreferenzen) gesehen haben, besteht eine andere Möglichkeit, eine Referenz zum [`window`](/de/docs/Web/API/Window) der Zielseite zu erhalten, darin, sie als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open) zu erhalten:

```js
const target = window.open("https://example.com");
```

Der {{httpheader("Cross-Origin-Opener-Policy")}}-Antwort-Header bestimmt, ob ein Dokument in derselben {{Glossary("Browsing_context", "Browsing-Context-Group")}} wie das Dokument, das es geöffnet hat, geöffnet wird.

Wenn Ihr Server diesen Header sendet und ihn auf einen anderen Wert als den Standardwert `"unsafe-none"` setzt, wird Ihr Dokument, wenn versucht wird, es von einem anderen Ursprung mit `window.open()` zu öffnen, in eine andere Browsing-Context-Group geladen. Unter anderem bedeutet dies, dass der Öffner keine Referenz zum `window`-Objekt Ihrer Seite erhält und es daher nicht in einem Frame-Zählungsangriff verwenden kann.

### Verteidigungs-Checkliste

Wie wir gesehen haben, umfassen Cross-Site-Leaks eine Reihe von Angriffen, die auf verschiedene Teile der Webplattform abzielen: Eine einzelne Verteidigung funktioniert bei keinem von ihnen. Tatsächlich haben einige Leaks, wie dasjenige, das CSP ausnutzt, um Weiterleitungen zu leaken, noch keine Verteidigungen.

In diesem Leitfaden haben wir einige Verteidigungen skizziert, die dazu beitragen, Ihre Seite von potenziellen Angreifern zu isolieren, und wir empfehlen, alle davon zu implementieren:

- Verwenden Sie Fetch-Metadaten, um eine Ressourcenisolationsrichtlinie zu implementieren.
- Setzen Sie das `SameSite`-Attribut für Sitzungscookies auf `Strict`, wenn Sie können, oder auf `Lax`, wenn Sie müssen.
- Verwenden Sie die `frame-ancestors`-CSP-Direktive und den `X-Frame-Options`-Antwort-Header, um zu verhindern, dass Ihre Seite eingebettet wird, oder um zu kontrollieren, welche Seiten Ihre Seite einbetten können.
- Senden Sie den `Cross-Origin-Opener-Policy`-Antwort-Header, um zu verhindern, dass andere Seiten auf Ihr `window`-globales Objekt zugreifen.

## Siehe auch

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
