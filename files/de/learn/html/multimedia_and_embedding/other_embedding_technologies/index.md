---
title: Von Objekt zu iframe — andere Einbettungstechnologien
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
l10n:
  sourceCommit: 7e02781de097b5835573cfb0f97f61bc5cba3646
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Mittlerweile sollten Sie wirklich den Dreh raushaben, Dinge in Ihre Webseiten einzubetten, einschließlich Bildern, Videos und Audio. An diesem Punkt möchten wir einen etwas seitlichen Schritt machen und uns einige Elemente ansehen, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, und die anderen beiden ermöglichen es Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im Umgang mit
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Dateien</a
        >, Vertrautheit mit den HTML-Grundlagen (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >) und die vorherigen Artikel in diesem Modul.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Objekte wie PDF-Dokumente und andere Webseiten in eine Webseite einbettet, indem man
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit im Web war es beliebt, **Frames** zu verwenden, um Websites zu erstellen — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert sind. Diese wurden in einem Master-Dokument namens **Frameset** eingebettet, mit dem Sie den Bereich auf dem Bildschirm festlegen konnten, den jeder Frame ausfüllte, ähnlich wie beim Größen der Spalten und Zeilen einer Tabelle. Diese galten Mitte bis Ende der 90er Jahre als der Inbegriff der Coolness, und es gab Beweise dafür, dass das Aufteilen einer Webseite in kleinere Stücke die Download-Geschwindigkeit verbesserte — besonders bemerkbar, da damalige Netzwerkverbindungen sehr langsam waren. Sie hatten jedoch viele Probleme, die jegliche Vorteile überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, sodass Sie sie heute nicht mehr verwendet sehen.

Etwas später (späte 90er, frühe 2000er) wurden Plugin-Technologien sehr populär, wie [Java Applets](/de/docs/Glossary/Java) und [Flash](/de/docs/Glossary/Adobe_Flash) — diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die nur mit HTML nicht verfügbar waren. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger verwendete {{htmlelement("embed")}} erreicht, und sie waren damals sehr nützlich. Sie sind jedoch wegen vieler Probleme, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr, aus der Mode gekommen. Heutzutage haben die wichtigsten Browser aufgehört, Plugins wie Flash zu unterstützen.

Schließlich erschien das {{htmlelement("iframe")}} Element (zusammen mit anderen Möglichkeiten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, usw.) Es bietet eine Möglichkeit, ein komplettes Webdokument in ein anderes einzubetten, als ob es sich um ein {{htmlelement("img")}} oder ein ähnliches Element handelte, und wird heute regelmäßig verwendet.

Mit der Geschichtsstunde aus dem Weg, lassen Sie uns fortfahren und sehen, wie einige dieser Technologien verwendet werden.

## Aktives Lernen: klassische Einbettungsverwendungen

In diesem Artikel werden wir direkt in einen aktiven Lernabschnitt springen, um Ihnen sofort eine echte Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist mit [YouTube](https://www.youtube.com/) sehr vertraut, aber viele Menschen kennen nicht einige der verfügbaren Freigabefunktionen. Sehen wir uns an, wie YouTube es uns ermöglicht, ein Video auf einer beliebigen Seite, die wir mögen, mit einem {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_ Button — wählen Sie diesen, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie die _Einbetten_ Option und Sie erhalten etwas `<iframe>` Code — kopieren Sie diesen.
4. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie, wie das Ergebnis im _Ausgabefeld_ aussieht.

Für Bonuspunkte könnten Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) im Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die _Teilen oder Karte einbetten_ Option.
4. Wählen Sie die Karte einbetten Option, die Ihnen etwas `<iframe>` Code gibt — kopieren Sie diesen.
5. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie, wie das Ergebnis im _Ausgabefeld_ aussieht.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_ Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_ Button, um eine Antwort zu sehen.

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

Das war einfach und hat Spaß gemacht, oder? {{htmlelement("iframe")}} Elemente sind so konzipiert, dass Sie andere Webdokumente in das aktuelle Dokument einbetten können. Das ist großartig, um Inhalte von Dritten in Ihre Website zu integrieren, über die Sie keine direkte Kontrolle haben und für die Sie keine eigene Version implementieren wollen — zum Beispiel Video von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Sogar die live bearbeitbaren Beispiele, die Sie in diesem Kurs verwendet haben, sind mit `<iframe>`s implementiert.

Bevor wir uns mit der Verwendung von `<iframe>` Elementen beschäftigen, gibt es einige Sicherheitsbedenken, derer Sie sich bewusst sein sollten.
Angenommen, Sie möchten das MDN Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}} Element einfügen, dann könnten Sie versuchen, etwas wie das folgende Code-Beispiel zu erstellen.
Wenn Sie den Code unten in eine Ihrer Seiten einfügen würden, könnten Sie überrascht sein, statt der Glossarseite eine Fehlermeldung zu sehen:

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

Im [Sicherheitsabschnitt](#sicherheitsbedenken) unten finden Sie weitere Details, warum Sie diesen Fehler sehen, aber schauen wir uns zuerst an, was unser Code macht.

Das Beispiel enthält die grundlegenden Anforderungen, die zur Verwendung eines `<iframe>` benötigt werden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wird er verwendet, wird das `<iframe>` ohne Umrandung angezeigt. Andernfalls zeigen Browser das `<iframe>` standardmäßig mit einer Umrandung an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wird er gesetzt, kann das `<iframe>` im Vollbildmodus mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) angezeigt werden (etwas außerhalb des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die Sie für das iframe möchten.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern funktioniert als der Rest der `<iframe>`-Funktionen (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; dazu später mehr im nächsten Abschnitt.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src` Attribut des iframes nach dem Laden des Hauptinhalts mit JavaScript zu setzen. Dies macht Ihre Seite schneller benutzbar und verringert Ihre offizielle Ladezeit der Seite (ein wichtiger [SEO](/de/docs/Glossary/SEO) Metrik.)

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — gehen wir jetzt etwas detaillierter darauf ein. Wir erwarten nicht, dass Sie all dieses Wissen beim ersten Mal perfekt verstehen; wir möchten Sie nur auf dieses Anliegen aufmerksam machen und eine Referenz bieten, auf die Sie zurückkommen können, wenn Sie erfahrener werden und in Erwägung ziehen, `<iframe>`s in Ihren Experimenten und Arbeiten zu verwenden. Zudem gibt es keinen Grund, Angst zu haben und `<iframe>`s nicht zu verwenden — Sie müssen nur vorsichtig sein. Lesen Sie weiter...

Browser-Entwickler und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für böswillige Personen im Internet sind (oft als **Hacker** bezeichnet, oder genauer gesagt, **Cracker**), wenn sie versuchen, Ihre Webseite böswillig zu verändern oder Leute dazu zu verleiten, etwas zu tun, das sie nicht wollen, wie etwa sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browser-Entwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch Best Practices, die zu beachten sind — einige davon werden wir unten behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Glossary/Clickjacking) ist eine der häufigsten iframe-Attacken, bei denen Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument auf ihrer eigenen bösartigen Webseite einbetten) und es verwenden, um die Interaktionen der Benutzer einzufangen. Dies ist eine übliche Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können [es live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ebenfalls an.) Anstelle der erwarteten Seite werden Sie wahrscheinlich eine Art Meldung wie "Ich kann diese Seite nicht öffnen" sehen, und wenn Sie die _Konsole_ in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ansehen, werden Sie eine Meldung sehen, die Ihnen den Grund erklärt. In Firefox sehen Sie etwas in der Art wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options" Direktive auf "DENY" gesetzt verhindert_. Dies liegt daran, dass die Entwickler, die MDN erstellt haben, eine Einstellung auf dem Server, der die Webseiten liefert, hinzugefügt haben, um zu verhindern, dass sie innerhalb von `<iframe>`s eingebettet werden (siehe [Konfigurieren von CSP-Direktiven](#konfigurieren_von_csp-direktiven), unten.) Dies ist sinnvoll — eine komplette MDN-Seite ergibt nicht wirklich Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten etwas wie sie auf Ihrer Website einbetten und sie als Ihre eigenen ausgeben — oder versuchen, Daten durch [Clickjacking](/de/docs/Glossary/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem, wenn alle damit anfangen würden, würde all die zusätzliche Bandbreite Mozilla viel Geld kosten.

#### Nur einbetten, wenn notwendig

Manchmal ergibt es Sinn, Drittanbieter-Inhalte einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viel Ärger ersparen, wenn Sie Drittanbieter-Inhalte nur dann einbetten, wenn es absolut notwendig ist. Eine gute Regel für die Websicherheit ist: _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es doppelt. Wenn jemand anderes es gemacht hat, nehmen Sie an, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Urheberrechtsprobleme bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, selbst Inhalte, die Sie vielleicht nicht erwarten würden (zum Beispiel sind die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) urheberrechtlich geschützt). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Besitzer haben Ihnen schriftlich eindeutige Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind streng. Auch hier gilt: Man kann nie zu vorsichtig sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns korrekt zitieren](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Verwendung von HTTPS

[HTTPS](/de/docs/Glossary/HTTPS) ist die verschlüsselte Version von [HTTP](/de/docs/Glossary/HTTP). Sie sollten Ihre Websites wann immer möglich über HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass der Remote-Inhalt während des Transports manipuliert wurde.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen können und umgekehrt.

Um Ihre Seite HTTPS-fähig zu machen, ist ein spezielles Sicherheitszertifikat erforderlich. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst irgendein Setup durchführen müssen, um ein Zertifikat zu installieren. Wenn Sie _doch_ die HTTPS-Unterstützung für Ihre Seite selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen, mit denen Sie das erforderliche Zertifikat automatisch erstellen und installieren können — mit integrierter Unterstützung für die am weitesten verbreiteten Web-Server, einschließlich des Apache-Web-Servers, Nginx und anderer. Die Let's Encrypt-Tools sind so konzipiert, dass der Prozess so einfach wie möglich ist, sodass es wirklich keinen guten Grund gibt, die Nutzung zu vermeiden oder andere verfügbare Mittel zur Aktivierung von HTTPS für Ihre Seite zu verwenden.

> **Hinweis:** [GitHub Pages](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) erlauben es, Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung er für das Servieren von Inhalten über HTTPS bietet.

#### Immer das `sandbox` Attribut verwenden

Sie wollen Angreifern so wenig Macht wie möglich geben, um auf Ihrer Webseite Schaden anzurichten, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen erteilen, die für ihre Arbeit benötigt werden._ Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder für Tests — der jedoch keinen Schaden im restlichen Code verursachen kann (weder versehentlich noch böswillig), wird als [Sandbox](<https://de.wikipedia.org/wiki/Sandbox_(Computersicherheit)>) bezeichnet.

Nicht sandboxed-Inhalte können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen mithilfe des `sandbox` Attributs ohne Parameter durchsetzen, wie in unserem vorherigen Beispiel gezeigt.

Falls absolut erforderlich, können Sie Berechtigungen einzeln zurückgeben (im Attributwert `sandbox=""`) — siehe den [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` in Ihrem `sandbox` Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die [Same-Origin-Richtlinie](/de/docs/Glossary/Same-origin_policy) umgehen, die das Ausführen von Skripten auf Websites verhindert, und JavaScript verwenden, um das Sandboxing vollständig zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Benutzer dazu verleiten können, bösartigen Inhalte direkt (außerhalb eines `iframe`) zu besuchen. Wenn die Möglichkeit besteht, dass bestimmte Inhalte bösartig sein könnten (z.B. von Benutzern generierte Inhalte), sollen Sie sie von einer anderen [Domain](/de/docs/Glossary/domain) als Ihre Hauptseite bereitstellen.

#### Konfigurieren von CSP-Direktiven

[CSP](/de/docs/Glossary/CSP) steht für **[Content Security Policy](/de/docs/Web/HTTP/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die die Sicherheit Ihres HTML-Dokuments verbessern sollen. Beim Thema der Sicherung von `<iframe>`s, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options` Header sendet.](/de/docs/Web/HTTP/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihre Webseiten einbetten (was [Clickjacking](/de/docs/Glossary/Clickjacking) und eine Reihe anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir es zuvor gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Natürlich ist es ziemlich außerhalb des Umfangs für eine vollständige Erklärung in diesem Artikel.

## Die \<embed> und \<object> Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente dienen einem anderen Zweck als {{htmlelement("iframe")}} — diese Elemente sind vielseitige Einbettungstools zum Einbetten externer Inhalte, wie z.B. PDFs.

Es ist jedoch unwahrscheinlich, dass Sie diese Elemente häufig verwenden werden. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins](/de/docs/Glossary/Plugin) wie [Adobe Flash](/de/docs/Glossary/Adobe_Flash) gehandhabt wurden, aber diese Technologie ist mittlerweile veraltet und wird von modernen Browsern nicht unterstützt.

Wenn Sie feststellen, dass Sie Plugin-Inhalte einbetten müssen, sind dies die Informationen, die Sie mindestens benötigen:

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
      <td>[URL](/de/docs/Glossary/URL) des eingebetteten Inhalts</td>
      <td><a href="/de/docs/Web/HTML/Element/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Genauer </em>[Medientyp](/de/docs/Glossary/MIME_type)
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin gesteuerten Rahmens
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
        Enthalten innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code> Tags
      </td>
    </tr>
  </tbody>
</table>

Sehen wir uns ein `<object>` Beispiel an, das ein PDF in eine Seite einbettet (siehe das [live Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="mypdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="mypdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, aber sie bringen viele [Herausforderungen in der Barrierefreiheit](https://webaim.org/techniques/acrobat/acrobat) mit sich und können auf kleinen Bildschirmen schwer zu lesen sein. In einigen Kreisen sind sie nach wie vor beliebt, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf eine einfache, vertraute Weise vorzustellen, die sofort relevant erscheint, während wir dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hinweisen. Zu Beginn werden Sie das Einbetten wahrscheinlich nicht für viel mehr als das Einbinden von Drittanbieter-Inhalten wie Karten und Videos auf Ihren Seiten verwenden. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, neben denen, die wir hier besprochen haben. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-erzeugte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken. Wir werden [SVG](/de/docs/Web/SVG) im nächsten Artikel des Moduls betrachten.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
