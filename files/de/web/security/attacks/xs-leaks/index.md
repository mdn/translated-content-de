---
title: Cross-Site Leaks (XS-Leaks)
slug: Web/Security/Attacks/XS-Leaks
l10n:
  sourceCommit: 96f892f4775399675a77864f4afb74f5a399807a
---

Cross-site leaks (auch als XS-Leaks bezeichnet) sind eine Angriffsklasse, bei der die Seite eines Angreifers Informationen über die Zielseite oder die Beziehung des Benutzers zur Zielseite ableiten kann, indem Web-Plattform-APIs genutzt werden, die es Seiten ermöglichen, miteinander zu interagieren. Die durchgesickerten Informationen könnten beispielsweise Folgendes umfassen:

- Ob der Benutzer die Zielseite besucht hat.
- Ob der Benutzer bei der Zielseite angemeldet ist.
- Was die Benutzer-ID auf der Seite ist.
- Was der Benutzer kürzlich auf der Seite gesucht hat.

Dies mag als ein viel weniger schädliches Problem erscheinen als zum Beispiel ein [Cross-Site Scripting](/de/docs/Web/Security/Attacks/XSS) Angriff, kann aber dennoch schwerwiegende Konsequenzen für die Benutzer haben. Zum Beispiel:

- Ein Benutzer könnte Konten auf Websites haben, die er nicht öffentlich machen möchte. Wenn diese Informationen einem Angreifer zugänglich werden, könnten sie zu Erpressung oder Vergeltungsmaßnahmen einer repressiven Regierung führen (zum Beispiel gegen einen Benutzer, der Informationen über spezifische medizinische Verfahren sucht).
- Zu wissen, dass ein Benutzer ein Konto auf einer Seite hat, insbesondere wenn dessen Benutzer-ID ermittelt werden kann, kann einen anschließenden Phishing-Angriff viel überzeugender machen.

Anders als bei anderen Angriffen wie [XSS](/de/docs/Web/Security/Attacks/XSS) oder [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) sind Cross-Site Leaks keine einzelne Technik. Stattdessen handelt es sich um einen Begriff für eine ganze Klasse von Angriffen, die Schwächen in der Art und Weise ausnutzen, wie Browser Websites voneinander isolieren.

In diesem Leitfaden werden wir nicht versuchen, jeden Cross-Site Leak Angriff und jede Verteidigung zu beschreiben. Stattdessen beginnen wir damit, ein paar Beispielangriffe zu beschreiben, dann die gemeinsamen zugrunde liegenden Schwächen darzulegen, die sie ermöglichen, und schließlich einige allgemeine Abwehrmaßnahmen zu beschreiben, die gegen viele bekannte Angriffe wirken können.

## Beispielhafte Cross-Site Leaks

In diesem Abschnitt werden wir drei verschiedene Cross-Site Leaks beschreiben, um eine Vorstellung davon zu geben, wie sie funktionieren.

- [Leaking page existence using error events](#leaking_page_existence_using_error_events): In diesem Angriff kann ein Angreifer durch die Einbindung als Ressourcen und das Abhören von [`error`](/de/docs/Web/API/HTMLElement/error_event) und [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignissen feststellen, ob bestimmte Endpunkte auf der Zielseite HTTP-Fehlercodes zurückgeben. Wenn bestimmte Seiten nur für angemeldete Benutzer verfügbar sind, kann der Angreifer feststellen, ob der Benutzer bei der Zielseite angemeldet ist.
- [Frame counting using window references](#frame_counting_using_window_references): In diesem Angriff erhält der Angreifer eine Referenz auf ein [`window`](/de/docs/Web/API/Window) Objekt, das eine Seite der Zielseite beherbergt, zum Beispiel als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open). Der Angreifer kann dann die Anzahl der {{htmlelement("iframe")}} Elemente auf der Zielseite bestimmen, was wiederum möglicherweise offenbart, ob der Benutzer beim Ziel angemeldet ist.
- [Leaking redirects with a CSP](#leaking_redirects_with_a_csp): In diesem Angriff hat die Seite des Angreifers eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), die nur das Laden einer bestimmten Seite der Zielseite erlaubt, und versucht dann, diese Seite zu laden. Wenn der Seitenladevorgang blockiert wird, weiß der Angreifer, dass das Ziel die Anfrage umgeleitet hat. Diese Umleitung kann anzeigen, ob der Benutzer angemeldet war oder nicht, je nachdem, wie die Seite funktioniert.

Alle drei Angriffe werden auf die gleiche Weise ausgeführt: Der Angreifer erstellt eine Seite, die den Angriff umsetzt, und überzeugt dann den Benutzer, die Seite zu besuchen, zum Beispiel indem er eine E-Mail sendet oder einen Beitrag teilt, der den Link enthält. Wenn der Benutzer die Seite besucht, wird der Angriff automatisch ausgeführt.

Im Rest dieses Abschnitts werden wir diese drei Angriffe etwas detaillierter beschreiben, um Ihnen ein konkretes Gefühl dafür zu geben, wie sie funktionieren. Obwohl die drei Angriffe ganz unterschiedliche Teile der Web-Plattform anvisieren, haben sie eine gemeinsame Ursache: das Ausmaß, in dem der Browser es Websites ermöglicht, sich gegenseitig durch Mechanismen wie das Einrahmen, das Laden von Unterressourcen oder das Öffnen neuer Fenster zu verbinden und zu interagieren.

> [!NOTE]
> Für ein umfassenderes Verzeichnis von Cross-Site Leaks, siehe das [XS-Leaks Wiki](https://xsleaks.dev/) und das [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Leaking page existence using error events

Bei diesem Angriff testet der Angreifer, ob bestimmte Seiten auf der Zielseite geladen werden können, indem überprüft wird, ob Versuche, sie als Ressourcen einzubinden, einen Fehler erzeugen. Wenn diese Seiten nur für angemeldete Benutzer verfügbar sind, könnte ein Angreifer feststellen, ob ein Benutzer angemeldet ist.

Der Angriff basiert auf der Fähigkeit einer Website, eine Ressource von einer anderen Seite zu laden, zum Beispiel durch Setzen des `src` Attributs eines {{htmlelement("script")}} Elements auf die URL der Ressource:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Dies führt zu einer HTTP-Anfrage an die `https://example.org/` Website. Wenn die Anfrage Cookies enthält, die die Seite zur Identifikation von Benutzern verwendet, und die angeforderte Seite nur für angemeldete Benutzer verfügbar ist, dann verrät der Erfolg oder das Scheitern der Anfrage, ob der Benutzer angemeldet ist.

Wenn die Anfrage fehlschlägt, zum Beispiel weil der Server einen HTTP {{httpstatus("404")}} Statuscode zurückgibt, erzeugt das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis. Wenn die Anfrage erfolgreich ist, erzeugt das Element ein [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis. Durch das Abhören dieser Ereignisse kann der Angreifer herausfinden, ob der Benutzer angemeldet ist.

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

Ein Angreifer könnte sogar in der Lage sein, die Benutzer-ID zu entdecken, indem er iterativ versucht, Seiten zu laden, um zu sehen, ob Seiten wie `https://example.org/users/my_username` existieren.

### Frame counting using window references

Bei einem Frame-Counting-Angriff findet der Angreifer die Anzahl der derzeit auf der Zielseite geladenen Frames heraus. Das wiederum gibt Aufschluss über den Zustand der Zielseite, wodurch der Angreifer beispielsweise erfahren kann, ob der Benutzer derzeit auf der Seite angemeldet ist.

Wenn eine Angreifer-Seite eine Referenz auf ein [`Window`](/de/docs/Web/API/Window) Objekt erhält, das die Zielseite enthält, kann der Angreifer die Anzahl der Frames auf der Zielseite ermitteln, indem er die [`window.length`](/de/docs/Web/API/Window/length) Eigenschaft liest.

Der Angreifer kann ein `Window` Objekt erhalten, indem er [`window.open()`](/de/docs/Web/API/Window/open) aufruft:

```js
const target = window.open("https://example.org");
const frames = target.length;
```

Alternativ kann der Angreifer die Zielseite in einem {{htmlelement("iframe")}} einbetten und die [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) Eigenschaft des Frames abrufen:

```html
<iframe src="https://example.org"></iframe>
```

```js
const target = document.querySelector("iframe").contentWindow;
const frames = target.length;
```

### Leaking redirects with a CSP

Auf einigen Websites leitet der Server eine Anfrage basierend darauf um, ob der Benutzer angemeldet ist (oder einen besonderen Status auf der Seite hat) oder nicht. Stellen Sie sich beispielsweise eine Seite vor, die Administratoren eine Seite unter `https://admin.example.org/` anzeigt. Wenn der Benutzer nicht angemeldet ist und diese Seite anfordert, könnte der Server ihn zu `https://login.example.org/` umleiten. Das bedeutet, dass, wenn ein Angreifer feststellen könnte, ob ein Versuch, `https://admin.example.org/` zu laden, zu einer Umleitung führt, er weiß, ob der Benutzer ein Administrator auf der Seite ist.

In dem hier beschriebenen Angriff nutzt der Angreifer die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), um zu erkennen, ob eine cross-site Anfrage umgeleitet wurde.

- Zuerst erstellen sie eine Seite, die einer CSP unterliegt, die nur {{htmlelement("iframe")}} Elemente erlaubt, Inhalte von `https://admin.example.org/` zu enthalten.

- Als Nächstes fügen sie auf der Seite einen Ereignis-Listener hinzu, der auf das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event) Ereignis hört.

- Schließlich erstellen sie ein {{htmlelement("iframe")}} Element und setzen dessen `src` Attribut auf `https://admin.example.org/`.

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

- Wenn der Benutzer als Administrator angemeldet ist, wird das `<iframe>` geladen und der Browser löst kein `securitypolicyviolation` aus.
- Wenn der Benutzer nicht als Administrator angemeldet ist, leitet der Server zu `https://login.example.org/` um. Da diese URL von der CSP des Angreifers nicht erlaubt ist, blockiert der Browser das `<iframe>` und löst das `securitypolicyviolation` Ereignis aus, worauf der Ereignishandler des Angreifers ausgeführt wird.

Beachten Sie, dass dieser Angriff auch funktioniert, wenn die Zielseite das Einbetten durch einen Mechanismus wie [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) verbietet.

## Abwehrmaßnahmen gegen Cross-Site Leaks

Cross-Site Leaks nutzen Mechanismen in der Web-Plattform aus, die es Websites ermöglichen, miteinander zu interagieren. Entsprechend bestehen die Abwehrmaßnahmen gegen Cross-Site Leaks normalerweise darin, die Ziel-Website von potenziellen Angreifern zu _isolieren_, indem diese Cross-Site Interaktionen deaktiviert oder kontrolliert werden.

Da Cross-Site Leaks auf viele verschiedene Arten funktionieren können, gibt es keine einzige Abwehrmaßnahme, die gegen alle wirkt. Es gibt jedoch mehrere Praktiken, die gegen viele von ihnen wirken, und wir werden sie hier zusammenfassen.

### Fetch Metadata

{{Glossary("Fetch_metadata_request_header", "Fetch Metadata")}} ist der Begriff für eine Sammlung von HTTP-Anforderungsheadern, die Informationen über den Kontext einer HTTP-Anfrage bereitstellen, einschließlich:

- {{httpheader("Sec-Fetch-Site")}}: Ob die Anfrage gleichherkunft, gleiche Seite oder übergreifend ist.
- {{httpheader("Sec-Fetch-Mode")}}: Der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage.
- {{httpheader("Sec-Fetch-User")}}: Ob die Anfrage eine vom Benutzer initiierte Navigation ist.
- {{httpheader("Sec-Fetch-Dest")}}: Das [`destination`](/de/docs/Web/API/Request/destination) der Anfrage.

Fetch Metadata Header sind kein eigenes Abwehrmechanismus, aber sie ermöglichen einem Server, eine Richtlinie zu implementieren, die Anfragen ablehnt, die in Cross-Site Leaks sowie anderen Angriffen wie [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) verwendet werden.

Zum Beispiel hängt der Angriff [Leaking page existence using error events](#leaking_page_existence_using_error_events) davon ab, dass der Angreifer übergreifende Anfragen stellen kann, um Seiten der Zielseite als Ressourcen zu laden:

```js
// Attempt to load a page in the target as a resource
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

Ein Server kann Fetch Metadata verwenden, um diese Anfragen abzulehnen, wie im folgenden [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code:

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

Da die Anfrage des Angreifers übergreifend und keine Navigation ist, gibt dieser Server immer einen Fehler zurück, unabhängig davon, ob der Benutzer angemeldet ist oder nicht.

Beachten Sie, dass wir auch den {{httpheader("Vary")}} Antwort-Header senden. Dies stellt sicher, dass, wenn die Antwort zwischengespeichert wird, die zwischengespeicherte Antwort nur Anfragen mit denselben Werten für die Fetch Metadata Header erhält, die wir verwenden.

Eine solche Richtlinie wird als _Resource Isolation Policy_ bezeichnet. Um mehr darüber zu erfahren, wie man Isolationsrichtlinien mit Fetch Metadata implementiert, siehe [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) und [Isolation Policies](https://xsleaks.dev/docs/defenses/isolation-policies/).

### SameSite Cookies

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookie-Attribut bestimmt, ob das Cookie in Anfragen gesendet wird, die von einer anderen Seite stammen.

Der Wert `Lax` von `SameSite` bedeutet, dass übergreifende Anfragen das Cookie nur dann enthalten, wenn die Anfrage eine Top-Level-Navigation ist (was im Wesentlichen bedeutet, dass sich der Wert in der Adressleiste des Browsers zur Zielseite ändert) und eine {{Glossary("Safe/HTTP", "sichere")}} Methode verwendet (insbesondere ausschließt dies {{httpmethod("POST")}} Anfragen).

Dies kann gegen einige Cross-Site Leaks schützen. Zum Beispiel hängt der Angriff [Leaking page existence using error events](#leaking_page_existence_using_error_events) davon ab, dass der Angreifer übergreifende Ressourcenanfragen stellt, die die Sitzungscookies des Benutzers enthalten. Wenn `SameSite` auf `Lax` im Sitzungscookie des Benutzers eingestellt wird, würde dieser Angriff verhindert, da das Cookie nicht in die Anfrage des Angreifers aufgenommen würde und keine Seiten, die eine Anmeldung erfordern, jemals zurückgegeben würden.

Im Allgemeinen sollte `SameSite` als Maßnahme der Verteidigung in der Tiefe behandelt und zusätzlich zu einer expliziteren Isolationsrichtlinie wie einer auf Fetch Metadata basierenden eingesetzt werden.

### Einbettungsschutz

Viele Cross-Site Leaks verlassen sich darauf, dass die angreifende Seite das Ziel als {{htmlelement("iframe")}} einbetten kann. Dies ist beispielsweise eine Methode, die ein Angreifer verwenden kann, um eine Referenz auf das [`window`](/de/docs/Web/API/Window) der Zielseite zu erhalten, um einen [Frame-Counting](#frame_counting_using_window_references) Angriff zu ermöglichen.

Das bedeutet, dass es eine gute Praxis ist, zu verhindern, dass eine Seite eingebettet werden kann, es sei denn, Sie müssen das Einbetten ausdrücklich ermöglichen. Und wenn das Einbetten erlaubt sein muss, schränken Sie es so weit wie möglich ein.

Hier gibt es zwei relevante Werkzeuge:

- Die [`frame-ancestors` Direktive](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) in einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).
- Der {{httpheader("X-Frame-Options")}} Antwort-Header.

Die `frame-ancestors` Direktive ist ein Ersatz für `X-Frame-Options`. Obwohl [Browserunterstützung für `frame-ancestors` sehr gut ist](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), unterstützen einige sehr alte Browser, insbesondere Internet Explorer, `frame-ancestors` nicht.

Wenn `frame-ancestors` und `X-Frame-Options` beide gesetzt sind, ignorieren Browser, die `frame-ancestors` unterstützen, `X-Frame-Options`. Das bedeutet, dass es keinen Grund gibt, `X-Frame-Options` nicht zusätzlich zu `frame-ancestors` zu setzen und so das Einbetten auch in Browsern zu verhindern, die `frame-ancestors` nicht unterstützen.

### Cross-Origin Opener Policy (COOP)

Wie wir beim [Frame-Counting](#frame_counting_using_window_references) Angriff gesehen haben, gibt es eine weitere Methode, um eine Referenz auf das [`window`](/de/docs/Web/API/Window) der Zielseite zu erhalten, nämlich als Rückgabewert eines Aufrufs von [`window.open()`](/de/docs/Web/API/Window/open):

```js
const target = window.open("https://example.com");
```

Der {{httpheader("Cross-Origin-Opener-Policy")}} Antwort-Header bestimmt, ob ein Dokument in derselben {{Glossary("Browsing_context", "Browsing-Context-Gruppe")}} wie das Dokument geladen wird, das es geöffnet hat.

Wenn Ihr Server diesen Header sendet und auf einen anderen Wert als den Standard `"unsafe-none"` setzt, dann wird, wenn ein Dokument von einem anderen Ursprung versucht, Ihre Seite mit `window.open()` zu öffnen, Ihre Seite in einer anderen Browsing-Context-Gruppe geladen. Unter anderem bedeutet dies, dass der Opener keine Referenz auf das `window` Objekt Ihrer Seite erhält und daher nicht in der Lage sein wird, es in einem Frame-Counting-Angriff zu verwenden.

### Zusammenfassende Checkliste der Abwehrmaßnahmen

Wie wir gesehen haben, umfassen Cross-Site Leaks eine Reihe von Angriffen, die sich auf unterschiedliche Teile der Web-Plattform konzentrieren: Eine einzige Abwehrmaßnahme funktioniert gegen keinen von ihnen. Tatsächlich haben einige Leaks, wie dasjenige, das CSP ausnutzt, um Umleitungen zu leaken, noch keine Abwehrmaßnahmen.

In diesem Leitfaden haben wir einige Abwehrmaßnahmen skizziert, die helfen, Ihre Seite von potenziellen Angreifern zu isolieren, und wir empfehlen, alle davon zu implementieren:

- Verwenden Sie Fetch Metadata, um eine Ressourcenisolationsrichtlinie umzusetzen.
- Setzen Sie das `SameSite` Attribut für Sitzungscookies auf `Strict`, wenn möglich, oder `Lax`, wenn nötig.
- Verwenden Sie die `frame-ancestors` CSP Direktive und den `X-Frame-Options` Antwort-Header, um zu verhindern, dass Ihre Seite eingebettet wird, oder um zu kontrollieren, welche Seiten Ihre Seite einbetten können.
- Senden Sie den `Cross-Origin-Opener-Policy` Antwort-Header, um zu verhindern, dass andere Seiten auf Ihr `window` globales Objekt zugreifen können.

## Siehe auch

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)
