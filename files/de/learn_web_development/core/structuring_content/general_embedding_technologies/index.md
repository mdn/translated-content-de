---
title: Von Objekt zu iframe — allgemeine Einbettungstechnologien
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

Entwickler denken üblicherweise daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen etwas seitlichen Schritt und schauen uns einige Elemente an, die es ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, während die anderen beiden das Einbetten externer Ressourcen wie PDF-Dateien ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >Grundlagen von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Elemente wie PDF-Dokumente und andere Webseiten mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und {{htmlelement("iframe")}} in Webseiten einbettet.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit war es im Web populär, **Frames** zur Erstellung von Webseiten zu verwenden – kleine Teile einer Webseite, die in individuellen HTML-Seiten gespeichert wurden. Diese waren in einem Hauptdokument namens **frameset** eingebettet, das es ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame ausfüllte, ähnlich wie die Größenanpassung von Spalten und Zeilen einer Tabelle. Diese galten in der Mitte bis Ende der 90er Jahre als das Nonplusultra, und es gab Hinweise darauf, dass eine Webseite, die in kleinere Stücke aufgeteilt war, besser für die Download-Geschwindigkeit war – vor allem, da die Netzwerkverbindungen damals sehr langsam waren. Sie hatten jedoch viele Probleme, die die Vorteile bei weitem überwogen, als die Netzgeschwindigkeiten schneller wurden, daher sieht man sie heute kaum noch im Gebrauch.

Ein wenig später (Ende der 90er, Anfang der 2000er Jahre) wurden Plugin-Technologien sehr populär, wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} – diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die allein durch HTML nicht verfügbar waren. Das Einbetten dieser Technologien wurde mit Elementen wie {{htmlelement("object")}} und dem weniger verwendeten {{htmlelement("embed")}} erreicht, die zu dieser Zeit sehr nützlich waren. Sie sind seitdem aus der Mode gekommen wegen vieler Probleme, einschließlich Barrierefreiheit, Sicherheit, Dateigröße und mehr. Heute unterstützen die großen Browser keine Plugins wie Flash mehr.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Arten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Es bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein anderes solches Element, und wird heute regelmäßig verwendet.

Nachdem wir nun die Geschichtsstunde hinter uns gebracht haben, sehen wir uns an, wie man einige dieser Techniken verwendet.

## Aktives Lernen: Klassische Verwendung von Einbettungen

In diesem Artikel gehen wir direkt in einen aktiven Lernabschnitt über, um Ihnen sofort eine reale Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele wissen nicht über einige der verfügbaren Sharing-Funktionen Bescheid. Sehen wir uns an, wie YouTube es uns ermöglicht, ein Video auf jeder gewünschten Seite mithilfe eines {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie eine _Teilen_-Schaltfläche – wählen Sie diese, um die Optionen zum Teilen anzuzeigen.
3. Wählen Sie die _Einbetten_-Schaltfläche und Sie erhalten einen `<iframe>`-Code — kopieren Sie diesen.
4. Fügen Sie ihn in das _Eingabe_-Feld unten ein und sehen Sie das Ergebnis im _Ausgabe_-Feld.

Für zusätzliche Punkte könnten Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) in das Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Option Karte einbetten, die Ihnen einige `<iframe>`-Codes geben wird — kopieren Sie diesen.
5. Fügen Sie ihn in das _Eingabe_-Feld unten ein und sehen Sie das Ergebnis im _Ausgabe_-Feld.

Wenn Sie einen Fehler machen, können Sie alles mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen.

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

Das war einfach und hat Spaß gemacht, oder? {{htmlelement("iframe")}}-Elemente sind dafür ausgelegt, andere Webdokumente in das aktuelle Dokument einzubetten. Dies ist großartig, um Drittanbieter-Inhalte in Ihre Website zu integrieren, auf die Sie möglicherweise keinen direkten Einfluss haben und die Sie nicht selbst implementieren möchten – wie Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Selbst die interaktiven Beispiele, die Sie im Laufe dieses Kurses verwenden, sind mit `<iframe>`s umgesetzt.

Bevor Sie `<iframe>`-Elemente verwenden, sollten Sie sich einiger Sicherheitsbedenken bewusst sein.
Angenommen, Sie wollten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einbinden, dann könnten Sie versuchen, etwas wie das nächste Codebeispiel zu verwenden. Wenn Sie den Code unten in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, anstelle der Glossarseite eine Fehlermeldung zu sehen:

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

Wenn Sie sich die Konsole Ihres Browsers ansehen, sehen Sie eine Fehlermeldung, die in etwa folgendermaßen aussieht:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheitsbedenken](#sicherheitsbedenken) weiter unten geht genauer darauf ein, warum Sie diesen Fehler sehen, aber zuerst werfen wir einen Blick darauf, was unser Code tut.

Das Beispiel enthält die absolut notwendigen Elemente, um ein `<iframe>` zu verwenden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser das `<iframe>` standardmäßig mit einem umgebenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) platziert werden (etwas außerhalb des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, enthält einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die das iframe haben soll.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut fordert in etwas moderneren Browsern als der Rest der `<iframe>`-Funktionen (z.B. IE 10 und höher) verschärfte Sicherheitseinstellungen; wir werden im nächsten Abschnitt mehr dazu sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dadurch wird Ihre Seite schneller nutzbar und die offizielle Ladezeit der Seite verringert (eine wichtige {{Glossary("SEO", "SEO")}}-Metrik).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — gehen wir nun etwas näher darauf ein. Wir erwarten nicht, dass Sie alle Inhalte perfekt beim ersten Mal verstehen; wir möchten Sie nur auf diesen Aspekt hinweisen und eine Referenz bieten, zu der Sie zurückkehren können, wenn Sie erfahrener werden und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten zu berücksichtigen. Außerdem gibt es keinen Grund zur Panik, `<iframe>`s nicht zu nutzen — Sie müssen einfach nur vorsichtig sein. Lesen Sie weiter…

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für böswillige Personen im Web (oft als **Hacker**, genauer gesagt **Cracker** bezeichnet) sind, die versuchen, Ihre Webseite böswillig zu modifizieren oder Leute zu etwas zu bewegen, was sie nicht tun wollen, wie etwa sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Praktiken, die zu beachten sind — einige dieser werden wir im Folgenden behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von gängigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Webseite einbetten) und es zur Erfassung von Benutzerinteraktionen verwenden. Dies ist eine gängige Methode, um Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst: Versuchen Sie, das obige Beispiel in Ihrem Browser zu laden — Sie können [es live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) an.). Statt der erwarteten Seite sehen Sie wahrscheinlich eine Art von Nachricht im Sinne von "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Entwickler-Tools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, sehen Sie eine Nachricht, die Ihnen sagt, warum. In Firefox sehen Sie beispielsweise die Nachricht _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options"-Direktive, die auf "DENY" gesetzt ist, verweigert._ Das liegt daran, dass die Entwickler, die MDN erstellt haben, auf dem Server eine Einstellung integriert haben, die das Einbetten ihrer Webseite in `<iframe>`s verbietet (siehe [CSP-Richtlinien konfigurieren](#csp-richtlinien_konfigurieren), weiter unten.) Das macht Sinn – eine komplette MDN-Seite ergibt wenig Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten sie auf Ihrer Seite einbetten und als Ihre eigene ausgeben – oder versuchen, Daten über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Zudem würde, wenn jeder damit anfinge, der zusätzliche Bandbreitenbedarf Mozilla viel Geld kosten.

#### Nur dann einbetten, wenn es nötig ist

Manchmal macht es Sinn, Inhalte von Drittanbietern einzubetten – wie YouTube-Videos und Karten –, aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie nur dann Drittanbieterdienste einbinden, wenn es absolut notwendig ist. Eine gute Regel für Websicherheit lautet: _"Sie können nie vorsichtig genug sein. Wenn Sie es erstellt haben, überprüfen Sie es doppelt. Wenn es jemand anderes erstellt hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch über Urheberrechtsfragen im Klaren sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline wie online, selbst die Inhalte, bei denen Sie es nicht erwarten würden (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie Inhalte niemals auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Inhaber haben Ihnen schriftlich und eindeutig die Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Noch einmal: Sie können nie vorsichtig genug sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Die Inhalte auf MDN sind beispielsweise [lizenziert unter CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie uns [ordentlich zukreditieren](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vorgenommen haben.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS verringert die Wahrscheinlichkeit, dass entfernte Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte Ihres übergeordneten Dokuments zugreifen können und umgekehrt.

Die Aktivierung von HTTPS auf Ihrer Seite erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat einrichten müssen. Aber wenn Sie _selbst_ die Unterstützung für HTTPS auf Ihrer Seite einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen, die Sie verwenden können, um das benötigte Zertifikat automatisch zu erstellen und zu installieren – mit integrierter Unterstützung für die am weitesten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Die Let's Encrypt-Tools sind auf eine möglichst einfache Nutzung ausgelegt, daher gibt es wirklich keinen Grund, es nicht zu verwenden oder andere verfügbare Mittel zu vermeiden, um Ihre Seite HTTPS-fähig zu machen.

> **Hinweis:** [GitHub-Seiten](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben es, Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie dessen Support für die Bereitstellung von Inhalten mit HTTPS überprüfen.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um böse Dinge auf Ihrer Webseite zu tun, daher sollten Sie eingebetteten Inhalten _nur die zum Ausführen seiner Aufgabe erforderlichen Berechtigungen_ erteilen. Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen – oder zum Testen – verwendet werden kann, aber keinen Schaden am Rest der Codebasis (entweder versehentlich oder böswillig) anrichten kann, wird als [sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht sandboxed sind, können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen etc. Standardmäßig sollten Sie alle verfügbaren Einschränkungen auferlegen, indem Sie das `sandbox`-Attribut ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Falls absolut erforderlich, können Sie Berechtigungen einzeln zurückgeben (innerhalb des Attributwerts `sandbox=""`) – siehe den [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Referenzeintrag für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten – in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-Origin-Policy")}} umgehen, die verhindert, dass Sites Skripte ausführen, und JavaScript verwenden, um die Sandboxing-Einschränkungen vollständig aufzuheben.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Leute dazu bringen können, bösartige Inhalte direkt (außerhalb eines `iframe`) zu besuchen. Wenn es eine Möglichkeit gibt, dass bestimmte Inhalte bösartig sein könnten (z.B. benutzergenerierte Inhalte), stellen Sie sie bitte unter einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptseite bereit.

#### CSP-Richtlinien konfigurieren

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die dazu entwickelt wurden, die Sicherheit Ihres HTML-Dokuments zu verbessern. Um `<iframe>`s abzusichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Webseiten Ihre Inhalte in ihre eigenen Seiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl anderer Angriffe ermöglichen würde), genau das haben die MDN-Entwickler getan, wie wir zuvor gesehen haben.

> [!NOTE]
> Sie können Fredrik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) lesen, um mehr Hintergrundinformationen zu diesem Thema zu erhalten. Natürlich sprengt dies den Rahmen für eine vollständige Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente haben eine andere Funktion als {{htmlelement("iframe")}} — diese Elemente sind universelle Einbettungswerkzeuge zum Einbetten externer Inhalte, wie z.B. PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht sehr häufig verwenden. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins verarbeitet werden, wie {{Glossary("Adobe_Flash", "Adobe Flash")}}, aber diese Technologie ist inzwischen veraltet und wird von modernen Browsern nicht mehr unterstützt.

Falls Sie Plugin-Inhalte einbetten müssen, sind dies die Informationen, die Sie mindestens benötigen:

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
        <em>Genaue</em> {{Glossary("MIME_type", "Medientyp")}} des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixel) des vom Plugin kontrollierten Feldes
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

PDFs waren ein notwendiger Schritt zwischen Papier und Digital, aber sie stellen viele [Barrierefreiheitsprobleme](https://webaim.org/techniques/acrobat/acrobat) dar und können schwer auf kleinen Bildschirmen zu lesen sein. Sie sind in einigen Kreisen immer noch sehr beliebt, aber es ist viel besser, auf sie zu verlinken, sodass sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden. In diesem Artikel haben wir versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir dennoch einige der fortgeschritteneren Funktionen der beteiligten Technologien andeuten. Zu Beginn werden Sie Einbettungen wahrscheinlich nicht für mehr als das Einfügen von Inhalten von Drittanbietern wie Karten und Videos auf Ihren Seiten verwenden. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich mehr Verwendungen dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte betreffen, neben denen, die wir hier besprochen haben. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt weitere zu entdecken, wie {{htmlelement("canvas")}} für in JavaScript erzeugte 2D- und 3D-Grafiken, und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken.
