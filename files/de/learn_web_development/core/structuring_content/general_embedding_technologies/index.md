---
title: Von object zu iframe — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen kleinen Schritt zur Seite und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. `<iframe>`s dienen zum Einbetten anderer Webseiten, während die anderen beiden es Ihnen ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >im Umgang mit Dateien</a
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Objekte wie PDF-Dokumente und andere Webseiten mithilfe von
        {{htmlelement("object")}}, {{htmlelement("embed")}} und {{htmlelement("iframe")}} in Webseiten einbettet.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit im Web war es populär, **Frames** zur Erstellung von Webseiten zu verwenden — kleine Teile einer Webseite, die in einzelnen HTML-Seiten gespeichert sind. Diese wurden in ein Hauptdokument eingebettet, das als **Frameset** bezeichnet wird, und das es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame einnimmt, ähnlich wie beim Größen der Spalten und Zeilen einer Tabelle. Diese galten in den mittleren bis späten 90er Jahren als Höhepunkt der Coolness, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Teile wie dieses besser für die Downloadgeschwindigkeit war — besonders bemerkbar bei den damals so langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die die positiven Aspekte bei weitem überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, sodass man sie heutzutage nicht mehr verwendet.

Etwas später (Ende der 90er, Anfang der 2000er Jahre) wurden Plug-in-Technologien wie {{Glossary("Java", "Java-Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr populär — diese ermöglichten es Webentwicklern, reichhaltige Inhalte in Webseiten einzubetten, wie Videos und Animationen, die allein durch HTML nicht verfügbar waren. Diese Technologien wurden durch Elemente wie {{htmlelement("object")}} und das weniger verwendete {{htmlelement("embed")}} eingebettet, und sie waren zu jener Zeit sehr nützlich. Seitdem sind sie aufgrund vieler Probleme aus der Mode gekommen, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr. Heutzutage haben große Browser die Unterstützung für Plug-ins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}} usw.) Dies bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, als ob es ein {{htmlelement("img")}} oder ein ähnliches Element wäre, und wird heute regelmäßig verwendet.

Nachdem wir den historischen Überblick hinter uns gelassen haben, wollen wir sehen, wie einige dieser Technologien verwendet werden können.

## Aktives Lernen: Klassische Einbetten-Anwendungen

In diesem Artikel springen wir direkt in einen aktiven Lernabschnitt, um Ihnen sofort eine reale Vorstellung davon zu geben, wozu Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr mit [YouTube](https://www.youtube.com/) vertraut, aber viele Menschen wissen nicht über einige der Sharing-Einrichtungen Bescheid, die es bietet. Schauen wir uns an, wie YouTube uns ermöglicht, ein Video auf jeder beliebigen Seite einzubetten, die wir mögen, indem wir ein {{htmlelement("iframe")}} verwenden.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Share_-Button — wählen Sie diesen aus, um die Sharing-Optionen anzuzeigen.
3. Wählen Sie die _Einbetten_-Schaltfläche aus, und Sie erhalten ein `<iframe>`-Code — kopieren Sie diesen.
4. Fügen Sie es in das _Eingabefeld_ unten ein und sehen Sie, was das Ergebnis im _Ausgabefeld_ ist.

Für Bonuspunkte könnten Sie auch versuchen, eine [Google-Karte](https://www.google.com/maps/) im Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Option Karte einbetten, die Ihnen ein `<iframe>`-Code gibt — kopieren Sie diesen.
5. Fügen Sie es in das _Eingabefeld_ unten ein und sehen Sie, was das Ergebnis im _Ausgabefeld_ ist.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen.

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

Das war einfach und hat Spaß gemacht, oder? {{htmlelement("iframe")}}-Elemente sind dazu gedacht, andere Webdokumente in das aktuelle Dokument einzubetten. Dies ist großartig, um Inhalte von Drittanbietern in Ihre Webseite zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartendiensten, Werbebanner usw. Selbst die live-editierbaren Beispiele, die Sie in diesem Kurs verwendet haben, werden mit `<iframe>`s implementiert.

Bevor Sie in die Verwendung von `<iframe>`-Elementen eintauchen, gibt es einige Sicherheitsbedenken, die zu beachten sind. Angenommen, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten mithilfe des {{htmlelement("iframe")}}-Elements einfügen, dann könnten Sie etwas wie das folgende Codebeispiel versuchen. Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen würden, könnten Sie überrascht sein, anstelle der Glossarseite eine Fehlermeldung zu sehen:

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

Wenn Sie sich die Konsole Ihres Browsers ansehen, werden Sie eine Fehlermeldung wie die folgende sehen:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheit](#sicherheitsbedenken) unten geht detaillierter darauf ein, warum Sie diese Fehlermeldung sehen, aber zuerst werfen wir einen Blick darauf, was unser Code tut.

Das Beispiel enthält die grundlegenden Erfordernisse, um ein `<iframe>` zu verwenden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne einen umgebenden Rahmen angezeigt. Andernfalls zeigen Browser standardmäßig das `<iframe>` mit einem umgebenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` mit der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) im Vollbildmodus platziert werden (etwas über den Rahmen dieses Artikels hinausgehend).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments verweist.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute spezifizieren die Breite und Höhe, die Sie für das `<iframe>` wünschen.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als der Rest der `<iframe>`-Funktionen funktioniert (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr dazu sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es ratsam, das `src`-Attribut des `<iframe>` mit JavaScript zu setzen, nachdem der Hauptinhalt geladen wurde. Dies macht Ihre Seite schneller nutzbar und reduziert Ihre offizielle Ladezeit der Seite (ein wichtiges {{Glossary("SEO", "SEO")}}-Merkmal).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns nun etwas genauer darauf eingehen. Wir erwarten nicht, dass Sie all diesen Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie lediglich auf dieses Problem aufmerksam machen und eine Referenz bereitstellen, zu der Sie zurückkehren können, wenn Sie erfahrener werden und anfangen, `<iframe>`s in Ihren Experimenten und Arbeiten zu verwenden. Auch gibt es keinen Grund davor zurückschrecken, `<iframe>`s zu verwenden — Sie sollten einfach vorsichtig sein. Lesen Sie weiter…

Browserhersteller und Webentwickler haben auf schwierige Weise gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für böse Menschen im Web sind (häufig als **Hacker**, oder genauer als **Cracker** bezeichnet), um anzugreifen, wenn sie versuchen, Ihre Webseite böswillig zu verändern oder Menschen dazu zu bringen, etwas zu tun, das sie nicht wollen, wie z.B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aufgrund dessen haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Praktiken zu beachten — wir werden einige dieser unten behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von häufigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene böswillige Webseite einbetten) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine übliche Methode, um Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das oben gezeigte Beispiel in Ihren Browser zu laden — Sie können [es live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich auch den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)). Anstelle der Seite, die Sie erwartet haben, sehen Sie wahrscheinlich eine Art Nachricht im Sinne von "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, sehen Sie eine Nachricht, die Ihnen sagt warum. In Firefox sehen Sie wahrscheinlich so etwas wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch "X-Frame-Options"-Richtlinie, die auf "DENY" gesetzt ist, verweigert_. Das ist, weil die Entwickler, die MDN erstellt haben, auf dem Server, der die Webseiten bereitstellt, eine Einstellung eingerichtet haben, um zu verhindern, dass sie in `<iframe>`s eingebettet werden (siehe [Konfigurieren von CSP-Direktiven](#konfigurieren_von_csp-direktiven), unten). Das macht Sinn — eine gesamte MDN-Seite einzubetten macht wirklich wenig Sinn, es sei denn, Sie möchten so etwas wie sie auf Ihrer Seite einbetten und als Ihre eigene beanspruchen — oder versuchen, Daten über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind, die man tun kann. Außerdem, wenn das jeder tun würde, würde das zusätzliche Bandbreite kosten, was Mozilla viel Geld kosten könnte.

#### Nur einbetten, wenn nötig

Manchmal kann es sinnvoll sein, Inhalte von Drittanbietern einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viel Ärger ersparen, wenn Sie Inhalte von Drittanbietern nur dann einbetten, wenn es wirklich notwendig ist. Ein gutes Sicherheitsprinzip im Web lautet: _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es trotzdem noch einmal. Wenn jemand anderes es gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Fragen des geistigen Eigentums bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, sogar Inhalte, die Sie vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie nie Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind hart. Auch hier kann man nie zu vorsichtig sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß angeben müssen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, auch wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass entfernte Inhalte während des Transports manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen, und umgekehrt.

Für die HTTPS-Absicherung Ihrer Website ist ein spezielles Sicherheitszertifikat erforderlich. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat einrichten müssen. Wenn Sie jedoch HTTPS-Unterstützung für Ihre Website selbst einrichten müssen, stellt [Let's Encrypt](https://letsencrypt.org/) Werkzeuge und Anleitungen zur Verfügung, die Sie für die automatische Erstellung und Installation des erforderlichen Zertifikats verwenden können — mit eingebauter Unterstützung für die am weitesten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und andere. Die Tools von Let's Encrypt sind so konzipiert, dass der Prozess so einfach wie möglich ist, sodass es wirklich keinen guten Grund gibt, sie oder andere zur Verfügung stehenden Mittel nicht zu nutzen, um Ihre Seite HTTPS-fähig zu machen.

> **Hinweis:** [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben es Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung sie für die Bereitstellung von Inhalten mit HTTPS bieten.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie wollen Angreifern so wenig Macht wie möglich geben, um schädliche Aktionen auf Ihrer Webseite auszuführen, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die für die Ausführung ihrer Aufgabe erforderlich sind_. Natürlich gilt das auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder zum Testen — aber dem Rest des Codes keinen Schaden zufügen kann (entweder unbeabsichtigt oder bösartig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht in einer Sandbox ausgeführt werden, können möglicherweise JavaScript ausführen, Formulare übermitteln, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Beschränkungen mit dem `sandbox`-Attribut ohne Parameter durchsetzen, wie in unserem vorhergehenden Beispiel gezeigt.

Wenn es absolut erforderlich ist, können Sie Berechtigungen einzeln zurückgeben (innerhalb des Wertes des Attributs `sandbox=""`) — siehe die Referenzeintrag für das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-origin policy")}} umgehen, die verhindert, dass Skripte ausgeführt werden, und JavaScript verwenden, um die Sandboxung vollständig zu deaktivieren.

> [!NOTE]
> Eine Sandbox bietet keinen Schutz, wenn Angreifer Menschen dazu verleiten können, direkt auf böswillige Inhalte zuzugreifen (außerhalb eines `iframe`). Wenn es eine Chance gibt, dass bestimmte Inhalte böswillig sein könnten (z.B. nutzergenerierte Inhalte), sollten Sie diese bitte von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptseite bereitstellen.

#### Konfigurieren von CSP-Direktiven

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn diese von einem Webserver bereitgestellt werden), die die Sicherheit Ihres HTML-Dokuments verbessern sollen. Wenn es darum geht, `<iframe>`s abzusichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Reihe anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir zuvor gesehen haben.

> [!NOTE]
> Sie können Frederiks Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) lesen, um weitere Hintergrundinformationen zu diesem Thema zu erhalten. Natürlich ist eine vollständige Erklärung in diesem Artikel etwas außerhalb des Themas.

## Die \<embed> und `<object>`-Elemente

Die Elemente {{htmlelement("embed")}} und {{htmlelement("object")}} haben eine andere Funktion als das {{htmlelement("iframe")}} — diese Elemente sind universelle Einbettungswerkzeuge zum Einbetten externer Inhalte, wie beispielsweise PDFs.

Sie werden diese Elemente jedoch wahrscheinlich nicht sehr oft verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-{{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet wurden, aber diese Technologie ist jetzt veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie feststellen, dass Sie Plugin-Inhalte einbetten müssen, sind dies die grundlegenden Informationen, die Sie mindestens benötigen:

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
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Genauer </em>{{Glossary("MIME_type", "Medientyp")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin gesteuerten Rahmens
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Unabhängiger HTML-Inhalt als Fallback für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist obsolet)</td>
      <td>
        Enthalten innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code>-Tags
      </td>
    </tr>
  </tbody>
</table>

Schauen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, aber sie stellen viele [Zugänglichkeitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können schwer lesbar auf kleinen Bildschirmen sein. Sie sind immer noch in einigen Kreisen populär, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema der Einbettung anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während es dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hinweist. Zu Beginn werden Sie wahrscheinlich nicht viel mehr als Inhalte von Drittanbietern wie Karten und Videos in Ihre Seiten einbetten. Wenn Sie mehr Erfahrung sammeln, werden Sie wahrscheinlich weitere Verwendungen für sie finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, neben den hier besprochenen. Wir haben einige davon in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken.
