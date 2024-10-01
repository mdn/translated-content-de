---
title: Von object zu iframe — andere Einbettungstechnologien
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
l10n:
  sourceCommit: 7e02781de097b5835573cfb0f97f61bc5cba3646
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Inzwischen sollten Sie sich wirklich darauf verstehen, Elemente in Ihre Webseiten einzubetten, einschließlich Bildern, Videos und Audio. An diesem Punkt möchten wir einen etwas seitlichen Schritt machen und uns einige Elemente ansehen, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, und die anderen beiden ermöglichen das Einbetten externer Ressourcen wie PDF-Dateien.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den Grundlagen von HTML (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >) und den vorherigen Artikeln in diesem Modul.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Objekte mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} in Webseiten einbetten kann, wie PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit im Web war es beliebt, **Frames** zur Erstellung von Webseiten zu verwenden — kleine Teile einer Webseite, die in einzelnen HTML-Seiten gespeichert waren. Diese wurden in ein Hauptdokument eingebettet, das als **Frameset** bezeichnet wurde und es Ihnen ermöglichte, den Bereich auf dem Bildschirm festzulegen, den jeder Frame füllte, ähnlich wie das Größen von Spalten und Zeilen einer Tabelle. Diese galten in der Mitte bis Ende der 90er als das Nonplusultra und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Stücke wie diese besser für die Downloadgeschwindigkeit war — insbesondere bemerkbar bei den damals so langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die alle Vorteile bei steigenden Netzwerkgeschwindigkeiten überwogen, weshalb sie heute nicht mehr verwendet werden.

Ein wenig später (Ende der 90er, Anfang der 2000er) wurden Plug-in-Technologien sehr populär, wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} — diese erlaubten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die allein durch HTML nicht verfügbar waren. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger oft verwendete {{htmlelement("embed")}} erreicht, die zu der Zeit sehr nützlich waren. Mittlerweile sind sie aufgrund vieler Probleme, einschließlich der Barrierefreiheit, Sicherheit, Dateigröße und mehr, außer Mode geraten. Heutzutage haben große Browser aufgehört, Plug-ins wie Flash zu unterstützen.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten der Inhaltseinbettung, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.) Dies bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, und wird heute regelmäßig verwendet.

Mit der Geschichtslektion aus dem Weg, lassen Sie uns sehen, wie man einige dieser Techniken nutzt.

## Aktives Lernen: Klassische Einbettungsverwendungen

In diesem Artikel wollen wir direkt in einen Abschnitt zum aktiven Lernen eintauchen, um Ihnen sofort einen realen Eindruck zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen wissen nicht über einige der Freigabefunktionen, die es hat. Lassen Sie uns sehen, wie YouTube es uns ermöglicht, ein Video in jede beliebige Seite einzubetten, die uns gefällt, indem wir ein {{htmlelement("iframe")}}-Element verwenden.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_-Button — wählen Sie diesen aus, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie die _Einbetten_-Option und Ihnen wird etwas `<iframe>`-Code angezeigt — kopieren Sie diesen.
4. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie sich das Ergebnis im _Output_ an.

Für Bonuspunkte könnten Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) im Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Karte einbetten-Option, die Ihnen etwas `<iframe>`-Code gibt — kopieren Sie diesen.
5. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie sich das Ergebnis im _Output_ an.

Wenn Sie einen Fehler machen, können Sie es immer mit dem _Reset_-Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen.

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

Das war einfach und macht Spaß, richtig? {{htmlelement("iframe")}}-Elemente sind dafür ausgelegt, andere Webdokumente in das aktuelle Dokument einzubetten. Dies ist großartig, um Drittanbieter-Inhalte in Ihre Website zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner, etc. Sogar die live bearbeitbaren Beispiele, die Sie durch diesen Kurs verwendet haben, wurden mit `<iframe>`s implementiert.

Bevor Sie sich in die Nutzung von `<iframe>`-Elementen vertiefen, sollten Sie sich einige Sicherheitsbedenken bewusst machen.
Angenommen, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einbinden, könnten Sie etwas wie das nächste Codebeispiel versuchen.
Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen würden, wären Sie möglicherweise überrascht, eine Fehlermeldung statt der Glossarseite zu sehen:

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

Wenn Sie sich die Konsole Ihres Browsers ansehen, wird eine Fehlermeldung wie die folgende angezeigt:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheit](#sicherheitsbedenken) unten geht detaillierter darauf ein, warum Sie diese Fehlermeldung sehen, aber zuerst schauen wir uns an, was unser Code tut.

Das Beispiel enthält die wesentlichen Grundlagen, die zur Verwendung eines `<iframe>` benötigt werden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rand angezeigt. Andernfalls zeigen Browser standardmäßig das `<iframe>` mit einem umgebenden Rand an (was in der Regel unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) im Vollbildmodus angezeigt werden (etwas außerhalb des Fokus dieses Artikels).
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut enthält einen Pfad, der zur URL des einzubettenden Dokuments führt, ähnlich wie bei {{htmlelement("video")}}/{{htmlelement("img")}}.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die Sie für das iframe wünschen.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als der Rest der `<iframe>`-Funktionen funktioniert (z. B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr darüber sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript nach dem Laden des Hauptinhalts zu setzen. Dadurch wird Ihre Seite schneller nutzbar und die offizielle Ladezeit Ihrer Seite (ein wichtiges {{Glossary("SEO", "SEO")}}-Kriterium) verkürzt.

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt – lassen Sie uns nun etwas genauer darauf eingehen. Wir erwarten nicht, dass Sie all diese Inhalte beim ersten Mal perfekt verstehen; wir möchten Sie nur auf diesen Aspekt hinweisen und Ihnen eine Referenz bieten, zu der Sie zurückkehren können, wenn Sie erfahrener werden und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten zu verwenden. Außerdem besteht kein Grund, sich zu fürchten und `<iframe>`s nicht zu nutzen — Sie müssen nur vorsichtig sein. Lesen Sie weiter…

Browser-Hersteller und Web-Entwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für schlechte Menschen im Internet sind (häufig als **Hacker** oder genauer gesagt als **Cracker** bezeichnet), um anzugreifen, wenn sie versuchen, Ihre Webseite böswillig zu verändern oder Benutzer zu tricksen, etwas zu tun, das sie nicht wollen, wie zum Beispiel sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aufgrund dessen haben Spec-Ingenieure und Browser-Entwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Verfahren zu beachten — auf einige davon werden wir weiter unten eingehen.

> **Hinweis:** {{Glossary("Clickjacking", "Clickjacking")}} ist eine Art von häufigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Webseite einbetten) und es verwenden, um Benutzereingaben abzufangen. Dies ist eine gängige Methode, um Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das vorher gezeigte Beispiel in Ihrem Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) an.) Anstatt der erwarteten Seite werden Sie wahrscheinlich eine Art von Nachricht sehen, die in etwa sagt: "Ich kann diese Seite nicht öffnen", und wenn Sie in die _Konsole_ der [Browser-Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) schauen, sehen Sie eine Nachricht, die Ihnen sagt warum. In Firefox wird Ihnen etwas wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Rahmen wird durch die "X-Frame-Options"-Direktive auf "DENY" verweigert_ gesagt. Das liegt daran, dass die Entwickler, die MDN erstellt haben, eine Einstellung auf dem Server implementiert haben, der die Webseiten bereitstellt, die es verbietet, sie innerhalb von `<iframe>`s einzubetten (siehe [CSP-Direktiven konfigurieren](#csp-direktiven_konfigurieren), unten.) Dies macht Sinn — eine vollständige MDN-Seite macht wenig Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten so etwas wie die Einbettung auf Ihrer Seite verwenden und diese als Ihre eigenen ausgeben — oder versuchen, Daten durch {{Glossary("Clickjacking", "Clickjacking")}} zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem, wenn jeder damit beginnen würde, würden all die zusätzlichen Bandbreitenkosten beginnen, Mozilla viel Geld zu kosten.

#### Nur bei Bedarf einbetten

Manchmal macht es Sinn, Drittanbieter-Inhalte einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viel Ärger ersparen, wenn Sie Drittanbieter-Inhalte nur dann einbetten, wenn es wirklich notwendig ist. Eine gute Regel für die Web-Sicherheit lautet: _"Man kann nie zu vorsichtig sein. Wenn Sie es erstellt haben, überprüfen Sie es doppelt. Wenn es jemand anderes erstellt hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Zusätzlich zur Sicherheit sollten Sie sich auch der Fragen des geistigen Eigentums bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, selbst Inhalte, die Sie möglicherweise nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Erlaubnis erteilt. Strafen für Urheberrechtsverletzungen sind schwerwiegend. Wieder einmal: Vorsicht ist besser als Nachsicht.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen befolgen. Zum Beispiel sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß erwähnen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unsere Inhalte zitieren, auch wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten möglichst über HTTPS bereitstellen:

1. HTTPS reduziert die Chance, dass entfernte Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen, und umgekehrt.

HTTPS für Ihre Seite zu aktivieren erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst eine Einrichtung eines Zertifikats durchführen müssen. Aber wenn Sie _do_ HTTPS-Unterstützung für Ihre Seite selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Werkzeuge und Anleitungen, die Sie verwenden können, um das notwendige Zertifikat automatisch zu erstellen und zu installieren — mit Unterstützung für die am häufigsten verwendeten Webserver, einschließlich des Apache-Webservers, Nginx und andere. Die Let's Encrypt-Tools sind darauf ausgelegt, den Prozess so einfach wie möglich zu gestalten, sodass es wirklich keinen guten Grund gibt, dieses Angebot oder andere verfügbare Mittel zur HTTPS-Aktivierung Ihrer Seite zu vermeiden.

> **Hinweis:** [GitHub pages](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) erlauben das Bereitstellen von Inhalten per HTTPS standardmäßig.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie überprüfen, welche Unterstützung sie für das Bereitstellen von Inhalten mit HTTPS bieten.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie wollen Angreifern so wenig Macht wie möglich geben, um Böses auf Ihrer Webseite zu tun. Daher sollten Sie eingebetteten Inhalten nur die Berechtigungen geben, die sie benötigen, um ihre Aufgabe zu erfüllen. Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder zu Testzwecken — ohne der restlichen Codebasis Schaden zufügen zu können (entweder versehentlich oder böswillig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht in einer Sandbox sind, können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen, etc. Im Allgemeinen sollten Sie alle verfügbaren Einschränkungen auferlegen, indem Sie das `sandbox`-Attribut ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Wenn es absolut notwendig ist, können Sie Berechtigungen eine nach der anderen hinzufügen (innerhalb des `sandbox=""` Attributwerts) — siehe den [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` in Ihr `sandbox`-Attribut aufnehmen sollten — in diesem Fall könnten die eingebetteten Inhalte die {{Glossary("Same-origin_policy", "Same-origin Richtlinie")}} umgehen, die verhindert, dass Seiten Skripts ausführen, und JavaScript verwenden, um das Sandboxing vollständig zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen dazu verleiten können, bösartige Inhalte direkt (außerhalb eines `iframe`) zu besuchen. Wenn die Möglichkeit besteht, dass bestimmte Inhalte schädlich sein könnten (z. B. von Benutzern erstellte Inhalte), dann stellen Sie sie bitte über eine andere {{Glossary("domain", "Domain")}} als Ihre Hauptseite bereit.

#### CSP-Direktiven konfigurieren

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/CSP)** und stellt [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten beim Bereitstellen von einem Webserver gesendet werden) bereit, die die Sicherheit Ihres HTML-Dokuments verbessern sollen. Um `<iframe>`s zu sichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options` Header sendet.](/de/docs/Web/HTTP/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihre Seiten einbetten (was {{Glossary("Clickjacking", "Clickjacking")}} und eine Vielzahl anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir es früher gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Natürlich fällt eine vollständige Erklärung in diesem Artikel eher aus dem Rahmen.

## Die \<embed> und \<object> Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente haben eine andere Funktion als das {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungstools zum Einbetten externer Inhalte, wie PDFs.

Sie werden diese Elemente jedoch wahrscheinlich nicht sehr oft benutzen. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, auf sie zu verlinken, anstatt sie in der Seite einzubetten.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet wurden, aber diese Technologie ist jetzt obsolet und wird von modernen Browsern nicht unterstützt.

Sollten Sie dennoch dergleichen benötigen, ist dies die Art von Informationen, die Sie mindestens benötigen:

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
      <td>{{Glossary("URL", "URL")}} der eingebetteten Inhalte</td>
      <td><a href="/de/docs/Web/HTML/Element/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Genaue</em> {{Glossary("MIME_type", "Medientypen")}} der eingebetteten Inhalte
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin gesteuerten Kastens
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
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist obsolet)</td>
      <td>
        Enthalten innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code>-Tags
      </td>
    </tr>
  </tbody>
</table>

Sehen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (sehen Sie sich das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) an):

```html
<object data="mypdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="mypdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, sie stellen jedoch viele [Barrierefreiheitsprobleme](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in einigen Kreisen nach wie vor beliebt, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Das Thema der Einbettung von Inhalten in Webdokumente kann schnell sehr komplex werden. In diesem Artikel haben wir versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hinweisen. Am Anfang werden Sie wahrscheinlich nicht viel mehr Einbettungen verwenden als Drittanbieter-Inhalte wie Karten und Videos auf Ihren Seiten einzufügen. Wenn Sie jedoch erfahrener werden, werden Sie wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, neben den hier diskutierten. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch mehr zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken, und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken. Wir werden im nächsten Artikel des Moduls auf [SVG](/de/docs/Web/SVG) eingehen.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
