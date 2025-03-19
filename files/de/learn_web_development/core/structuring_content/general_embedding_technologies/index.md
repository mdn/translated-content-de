---
title: Von Objekt zu Iframe — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

Entwickler denken häufig an das Einbetten von Medien wie Bildern, Videos und Audio in Webseiten. In diesem Artikel machen wir einen kleinen Umweg und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, während die anderen beiden es Ihnen ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie man Elemente wie PDF-Dokumente und andere Webseiten mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} in Webseiten einbettet.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit im Web war es beliebt, **Frames** zu verwenden, um Websites zu erstellen – kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert sind. Diese wurden in ein Hauptdokument eingebettet, das als **Frameset** bezeichnet wurde, und es ermöglichte Ihnen, den Bereich auf dem Bildschirm anzugeben, den jeder Frame füllte, ähnlich wie beim Anpassen der Spalten und Reihen einer Tabelle. Diese galten Mitte bis Ende der 90er Jahre als der Gipfel der Coolness, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Abschnitte wie dieser besser für Download-Geschwindigkeiten war – besonders bemerkbar bei den damals langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die jegliche Vorteile überwogen, sobald die Netzwerkgeschwindigkeiten schneller wurden, sodass sie heute nicht mehr verwendet werden.

Einige Zeit später (Ende der 90er, Anfang der 2000er Jahre) wurden Plug-in-Technologien sehr populär, wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} – diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die nur mit HTML nicht verfügbar waren. Diese Technologien wurden durch Elemente wie {{htmlelement("object")}} eingebettet und die seltener verwendete {{htmlelement("embed")}}, und sie waren zu der Zeit sehr nützlich. Sie sind inzwischen aus der Mode gekommen aufgrund vieler Probleme, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr. Heute haben große Browser die Unterstützung von Plug-ins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}} Element (zusammen mit anderen Möglichkeiten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Dieses bietet eine Möglichkeit, ein gesamtes Webdokument in ein anderes einzubetten, als ob es ein {{htmlelement("img")}} oder ein anderes solches Element wäre, und wird regelmäßig heute verwendet.

Mit dieser Geschichtsstunde hinter uns, gehen wir nun weiter und sehen, wie wir einige dieser Dinge nutzen können.

## Aktives Lernen: Klassische Einbettungsanwendungen

In diesem Artikel steigen wir direkt in einen aktiven Lernabschnitt ein, um Ihnen sofort eine reale Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen kennen einige der verfügbaren Freigabeeinrichtungen nicht. Sehen wir uns an, wie YouTube es uns ermöglicht, ein Video in jede beliebige Seite mithilfe eines {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie eine _Teilen_-Schaltfläche – wählen Sie diese aus, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie die _Einbetten_-Schaltfläche aus und Sie erhalten einige `<iframe>`-Codes – kopieren Sie diese.
4. Fügen Sie es in das _Eingabefeld_ unten ein und sehen Sie sich das Ergebnis im _Ausgabefeld_ an.

Für extra Punkte könnten Sie auch versuchen, ein [Google Map](https://www.google.com/maps/) im Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie im oberen linken Bereich der Benutzeroberfläche auf das "Hamburger-Menü" (drei horizontale Linien).
3. Wählen Sie die Option _Teilen oder Karte einbetten_ aus.
4. Wählen Sie die Option Karte einbetten, wodurch Sie einige `<iframe>`-Codes erhalten – kopieren Sie diese.
5. Fügen Sie es in das _Eingabefeld_ unten ein und sehen Sie sich das Ergebnis im _Ausgabefeld_ an.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 250px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea
  id="code"
  class="input"
  style="width: 95%;min-height: 100px;"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const htmlSolution =
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_classic_embedding_uses', 700, 600) }}

## iframes im Detail

Das war also einfach und macht Spaß, oder? {{htmlelement("iframe")}}-Elemente sind dafür ausgelegt, andere Webdokumente in das aktuelle Dokument einzubetten. Das ist großartig, um Drittanbieter-Inhalte in Ihre Website zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten – wie Videos von Online-Videodiensten, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartanbietern, Werbebanner, etc. Selbst die bearbeitbaren Live-Beispiele, die Sie in diesem Kurs verwendet haben, wurden mit `<iframe>`s implementiert.

Bevor Sie sich mit der Verwendung von `<iframe>`-Elementen auseinandersetzen, gibt es einige Sicherheitsbedenken, die Sie beachten sollten.
Angenommen, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einfügen, Sie könnten etwas wie das folgende Codebeispiel versuchen.
Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, eine Fehlermeldung statt der Glossarseite zu sehen:

```html
<head>
  <style>
    iframe {
      border: none;
    }
  </style>
</head>
<body>
  <iframe
    src="https://developer.mozilla.org/en-US/docs/Glossary"
    width="100%"
    height="500"
    allowfullscreen
    sandbox>
    <p>
      <a href="/en-US/docs/Glossary">
        Fallback link for browsers that don't support iframes
      </a>
    </p>
  </iframe>
</body>
```

Wenn Sie in die Konsole Ihres Browsers schauen, sehen Sie eine Fehlermeldung wie die folgende:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheit] (#sicherheitsbedenken) unten geht näher darauf ein, warum Sie diesen Fehler sehen, aber zuerst werfen wir einen Blick darauf, was unser Code tut.

Das Beispiel enthält die wesentlichen Grundlagen, die zur Verwendung eines `<iframe>` erforderlich sind:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser standardmäßig das `<iframe>` mit einem umgebenden Rahmen an (was generell unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus mit der [Vollbild-API](/de/docs/Web/API/Fullscreen_API) (ein wenig über den Rahmen dieses Artikels hinausgehend) platziert werden.
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments verweist.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die das Iframe haben soll.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas modernere Browser als die übrigen `<iframe>`-Funktionen (z. B. IE 10 und höher) funktioniert, fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr dazu sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dadurch wird Ihre Seite schneller benutzbar und die offizielle Ladezeit Ihrer Seite (eine wichtige {{Glossary("SEO", "SEO")}}-Metrik) verringert.

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt – werfen wir jetzt einen genaueren Blick darauf. Wir erwarten nicht, dass Sie all diese Inhalte beim ersten Mal perfekt verstehen; wir möchten Sie nur auf diese Bedenken aufmerksam machen und eine Referenz bieten, zu der Sie zurückkehren können, wenn Sie erfahrener werden und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Außerdem brauchen Sie keine Angst zu haben, `<iframe>`s nicht zu verwenden – Sie müssen nur vorsichtig sein. Lesen Sie weiter …

Browser-Hersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für bösartige Personen im Web (oft als **Hacker** oder genauer **Cracker** bezeichnet) sind, die versuchen, Ihre Webseite böswillig zu ändern oder Leute dazu zu bringen, etwas zu tun, was sie nicht möchten, wie sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Verfahren, die beachtet werden sollten – wir werden einige davon unten behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art häufiger iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Website einbetten) und es nutzen, um die Interaktionen der Benutzer zu erfassen. Dies ist eine gängige Methode, um Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein kurzes Beispiel zuerst – versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden – Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ebenfalls). Anstelle der erwarteten Seite sehen Sie wahrscheinlich eine Art Nachricht in dem Sinne, "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, erhalten Sie eine Nachricht, die Ihnen mitteilt, warum. In Firefox werden Sie etwas in der Art sehen wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options"-Direktive, die auf "DENY" gesetzt ist, verweigert_. Das liegt daran, dass die Entwickler, die MDN aufgebaut haben, eine Einstellung auf dem Server eingefügt haben, der die Webseiten bereitstellt, um zu verhindern, dass sie in `<iframe>`s eingebettet werden können (siehe [CSP-Direktiven konfigurieren](#konfigurieren_sie_csp-direktiven), unten). Das macht Sinn – eine gesamte MDN-Seite macht es wirklich keinen Sinn, in anderen Seiten eingebettet zu werden, es sei denn, Sie möchten sie auf Ihrer Seite einbetten und als Ihre eigenen ausgeben – oder versuchen, Daten durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem würden die zusätzlichen Bandbreitenkosten, wenn jeder damit anfangen würde, Mozilla viel Geld kosten.

#### Nur einbetten, wenn nötig

Manchmal macht es Sinn, Inhalte von Drittanbietern einzubetten – wie YouTube-Videos und Karten – aber Sie können sich eine Menge Kopfschmerzen ersparen, wenn Sie Inhalte von Drittanbietern nur dann einbetten, wenn es wirklich nötig ist. Eine gute Regel für die Websicherheit lautet: _"Man kann nie zu vorsichtig sein. Wenn Sie es erstellt haben, überprüfen Sie es dennoch doppelt. Wenn es jemand anderes erstellt hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Fragen des geistigen Eigentums bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, auch Inhalte, die Sie nicht erwarten könnten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Erlaubnis erteilt. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier gilt: Sie können niemals zu vorsichtig sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß zitieren](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Nutzen Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Websites wann immer möglich über HTTPS bereitstellen:

1. HTTPS reduziert die Chance, dass entfernte Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen und umgekehrt.

Um Ihre Seite HTTPS-fähig zu machen, muss ein spezielles Sicherheitszertifikat installiert werden. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat einrichten müssen. Aber wenn Sie _dies_ für Ihre Seite selbst HTTPS-Unterstützung einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen, die Sie verwenden können, um das erforderliche Zertifikat automatisch zu erstellen und zu installieren — mit eingebauter Unterstützung für die am weitesten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Das Let's Encrypt-Toolset ist darauf ausgelegt, den Prozess so einfach wie möglich zu gestalten, daher gibt es wirklich keinen guten Grund, es nicht zu verwenden oder andere verfügbare Mittel zu nutzen, um Ihre Seite HTTPS-fähig zu machen.

> **Hinweis:** [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben standardmäßig, dass Inhalte über HTTPS bereitgestellt werden.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung sie für die Bereitstellung von Inhalten mit HTTPS bieten.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um auf Ihrer Website Schaden anzurichten, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die für ihre Aufgabe erforderlich sind_. Natürlich gilt das auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen genutzt werden kann – oder zum Testen – aber keinen Schaden am restlichen Codebestand anrichten kann (weder versehentlich noch böswillig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht in einer Sandbox enthalten sind, können eventuell JavaScript ausführen, Formulare einreichen, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen auferlegen, indem Sie das `sandbox`-Attribut ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Wenn absolut erforderlich, können Sie Berechtigungen einzeln zurückgeben (innerhalb des Werts des `sandbox=""`-Attributs) — siehe den [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Referenzeintrag für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten – in diesem Fall könnten die eingebetteten Inhalte die {{Glossary("Same-origin_policy", "Same-origin-Policy")}} umgehen, die Seiten daran hindert, Skripte auszuführen, und JavaScript verwenden, um das Sandboxing insgesamt zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen dazu verleiten können, bösartige Inhalte direkt (außerhalb eines `iframe`) aufzurufen. Wenn es die Möglichkeit gibt, dass bestimmte Inhalte bösartig sein könnten (z. B. nutzergenerierte Inhalte), sollten Sie sie von einer anderen {{Glossary("domain", "Domain")}} als Ihre Haupt-Website bereitstellen.

#### Konfigurieren Sie CSP-Direktiven

{{Glossary("CSP", "CSP")}} steht für **[Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die dazu ausgelegt sind, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es darum geht, `<iframe>`s zu sichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihre Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Reihe weiterer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir zuvor gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Offensichtlich ist es recht außerhalb des Umfangs für eine vollständige Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente haben eine andere Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungswerkzeuge zum Einbetten externer Inhalte, wie PDFs.

Sie werden diese Elemente jedoch wahrscheinlich nicht sehr häufig verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins wie {{Glossary("Adobe_Flash", "Adobe Flash")}} behandelt wurden, aber diese Technologie ist jetzt veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie feststellen, dass Sie Plugin-Inhalte einbetten müssen, ist dies die Art von Informationen, die Sie mindestens benötigen:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">{{htmlelement("embed")}}</th>
      <th scope="col">{{htmlelement("object")}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Glossary("URL", "URL")}} des eingebetteten Inhalts</td>
      <td><a href="/de/docs/Web/HTML/Element/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Genauer </em>{{Glossary("MIME_type", "Medientyp")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin verwalteten Kastens
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Element/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Element/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Element/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Element/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Unabhängiger HTML-Inhalt als Fallback für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>
        Innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code> Tags enthalten
      </td>
    </tr>
  </tbody>
</table>

Schauen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (sehen Sie sich das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) an):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, stellen jedoch viele [Barrierefreiheitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer lesbar sein. Sie sind in einigen Kreisen immer noch beliebt, es ist jedoch viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in einer Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir dennoch auf einige der fortschrittlicheren Funktionen der beteiligten Technologien hinweisen. Zunächst werden Sie Einbettungen wahrscheinlich nicht viel über die Einbeziehung von Inhalten von Drittanbietern wie Karten und Videos auf Ihren Seiten hinaus verwenden. Wenn Sie jedoch erfahrener werden, werden Sie wahrscheinlich mehr Verwendungsmöglichkeiten für sie finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, abgesehen von denen, die wir hier besprochen haben. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch weitere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken, und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken.
