---
title: Von Objekt bis Iframe — Allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel machen wir einen kleinen Seitenblick und sehen uns einige Elemente an, die Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. `<iframe>`s dienen dazu, andere Webseiten einzubetten, während die anderen beiden es Ihnen ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse über
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie Sie Objekte in Webseiten einbetten, z. B. PDF-Dokumente und andere Webseiten, mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und {{htmlelement("iframe")}}.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit im Web war es beliebt, **Frames** zu verwenden, um Websites zu erstellen — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert waren. Diese wurden in ein Hauptdokument namens **Frameset** eingebettet, das es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu bestimmen, den jeder Frame füllte, ähnlich wie bei der Größereinstellung von Spalten und Zeilen einer Tabelle. Diese galten Mitte bis Ende der 90er Jahre als extrem cool, und es gab Hinweise darauf, dass eine Aufteilung einer Webseite in kleinere Blöcke wie diese zu kürzeren Download-Zeiten führte — besonders bemerkbar bei den damals langsamen Netzwerkverbindungen. Sie hatten allerdings viele Probleme, die mit schnelleren Netzwerkgeschwindigkeiten die Vorteile überwogen, sodass Sie diese heute nicht mehr verwenden.

Ein wenig später (Ende der 90er, Anfang der 2000er Jahre) wurden Plugin-Technologien wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr beliebt. Diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die mit HTML allein nicht verfügbar waren. Diese Technologien wurden über Elemente wie {{htmlelement("object")}} und das weniger gebräuchliche {{htmlelement("embed")}} eingebettet und waren damals sehr nützlich. Sie sind jedoch aus der Mode gekommen, da viele Probleme wie Zugänglichkeit, Sicherheit, Dateigröße und mehr auftraten. Heutzutage haben große Browser die Unterstützung für Plugins wie Flash eingestellt.

Schließlich trat das {{htmlelement("iframe")}}-Element auf den Plan (neben anderen Möglichkeiten zur Inhalts-Einbettung, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Diese Möglichkeit, ein vollständiges Web-Dokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, wird heute regelmäßig genutzt.

Nachdem wir den Geschichtsunterricht hinter uns haben, wollen wir weitergehen und sehen, wie einige dieser Elemente verwendet werden können.

## Aktives Lernen: Klassische Einbettungsanwendungen

In diesem Artikel springen wir direkt in einen aktiven Lernabschnitt, um Ihnen sofort eine realistische Vorstellung davon zu geben, wozu Einbettungstechnologien nützlich sind. Die Online-Welt ist mit [YouTube](https://www.youtube.com/) sehr vertraut, aber viele Menschen wissen nicht über einige der verfügbaren Freigabemöglichkeiten Bescheid. Sehen wir uns an, wie YouTube es ermöglicht, ein Video auf einer beliebigen Seite einzubetten, die uns gefällt, mit Hilfe eines {{htmlelement("iframe")}}.

1. Gehen Sie zuerst zu YouTube und suchen Sie sich ein Video aus, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_-Button — wählen Sie diesen aus, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie den _Einbetten_-Button und Sie erhalten einige `<iframe>`-Code — kopieren Sie diesen.
4. Fügen Sie ihn in das _Eingabe_-Feld unten ein und sehen Sie sich das Ergebnis im _Ausgabe_-Bereich an.

Für zusätzliche Punkte können Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) in das Beispiel einzubetten:

1. Gehen Sie zu Google Maps und suchen Sie sich eine Karte aus, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Option Karte einbetten, die Ihnen etwas `<iframe>`-Code gibt — kopieren Sie diesen.
5. Fügen Sie ihn in das _Eingabe_-Feld unten ein und sehen Sie sich das Ergebnis im _Ausgabe_-Bereich an.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_-Button zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen.

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

## Iframes im Detail

Das war doch einfach und macht Spaß, nicht wahr? {{htmlelement("iframe")}}-Elemente sind dazu gedacht, andere Web-Dokumente in das aktuelle Dokument einzubetten. Dies ist großartig, um Inhalte von Drittanbietern auf Ihrer Website einzubeziehen, die Sie möglicherweise nicht direkt kontrollieren und nicht selbst implementieren möchten — wie z. B. Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Selbst die interaktiven Beispiele, die Sie in diesem Kurs verwenden, werden mit `<iframe>`s implementiert.

Bevor Sie mit der Verwendung von `<iframe>`-Elementen beginnen, sollten Ihnen einige Sicherheitsbedenken bewusst sein. Wenn Sie beispielsweise das MDN-Glossar auf einer Ihrer Webseiten einbinden möchten, könnten Sie versuchen, so etwas wie das nächste Code-Beispiel zu verwenden. Wenn Sie den unten stehenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, anstelle der Glossarseite eine Fehlermeldung zu sehen:

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

Der Abschnitt [Sicherheit](#sicherheitsbedenken) unten geht genauer darauf ein, warum Sie diesen Fehler sehen, aber zuerst wollen wir uns ansehen, was unser Code tut.

Das Beispiel enthält die wesentlichen Grundlagen für die Verwendung eines `<iframe>`:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne einen umgebenden Rahmen angezeigt. Andernfalls wird das `<iframe>` standardmäßig von den Browsern mit einem umgebenden Rahmen angezeigt (was in der Regel nicht erwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) angezeigt werden (etwas jenseits des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält einen Pfad, der auf die URL des einzubettenden Dokuments zeigt, ähnlich wie bei {{htmlelement("video")}}/{{htmlelement("img")}}.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die Sie für das Iframe wünschen.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern funktioniert als der Rest der `<iframe>`-Funktionen (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden dazu im nächsten Abschnitt mehr sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des Iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen wurde. Dadurch wird Ihre Seite schneller nutzbar und Ihre offizielle Ladezeit verringert (ein wichtiges {{Glossary("SEO", "SEO")}}-Metrik).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns jetzt etwas detaillierter darauf eingehen. Wir erwarten nicht, dass Sie den gesamten Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie einfach auf dieses Problem aufmerksam machen und Ihnen eine Referenz zur Verfügung stellen, auf die Sie zurückgreifen können, wenn Sie erfahrener werden und beginnen, die Verwendung von `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Außerdem besteht kein Grund, Angst vor der Verwendung von `<iframe>`s zu haben — Sie müssen nur vorsichtig sein. Lesen Sie weiter …

Browser-Hersteller und Webentwickler haben auf die harte Tour gelernt, dass Iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für böswillige Personen im Web (oft als **Hacker** bezeichnet, oder genauer gesagt **Cracker**) sind, um sie anzugreifen, wenn sie versuchen, Ihre Webseite bösartig zu ändern oder Menschen dazu zu bringen, etwas zu tun, was sie nicht tun wollen, wie z.B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aufgrund dessen haben Spezifikations- und Browser-Entwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen. Es gibt auch Best Practices, die zu beachten sind — wir werden einige davon unten besprechen.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine häufige Art von iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene böswillige Website einbetten) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine häufige Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein kurzes Beispiel zu Beginn — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihren Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ebenfalls.) Anstelle der Seite, die Sie erwartet haben, werden Sie wahrscheinlich eine Art Nachricht im Sinne von "Ich kann diese Seite nicht öffnen" sehen, und wenn Sie sich die _Konsole_ in den [Browser-Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, erhalten Sie eine Nachricht, die Ihnen sagt, warum. In Firefox wird Ihnen etwa mitgeteilt, dass das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame durch die "X-Frame-Options"-Direktive mit dem Wert "DENY" verhindert wird. Dies liegt daran, dass die Entwickler, die das MDN entwickelt haben, eine Einstellung auf dem Server eingefügt haben, der die Webseiten bereitstellt, um sie daran zu hindern, in `<iframe>`s eingebettet zu werden (siehe [Konfigurieren Sie CSP-Direktiven](#konfigurieren_sie_csp-direktiven), unten.) Dies macht Sinn — eine gesamte MDN-Seite macht wirklich keinen Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten sie auf Ihrer Seite einbetten und als Ihre eigenen ausgeben — oder versuchen, Daten durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind, die Sie tun können. Außerdem würden die zusätzlichen Bandbreitenkosten, wenn jeder damit anfangen würde, Mozilla eine Menge Geld kosten.

#### Nur einbetten, wenn notwendig

Manchmal macht es Sinn, Inhalte von Drittanbietern einzubetten — wie Youtube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Inhalte von Drittanbietern nur dann einbetten, wenn es unbedingt notwendig ist. Eine gute Regel für Web-Sicherheit lautet: _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es trotzdem noch einmal. Wenn jemand anderes es gemacht hat, nehmen Sie an, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Fragen des geistigen Eigentums bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, selbst Inhalte, die Sie vielleicht nicht erwarten würden (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Inhaber haben Ihnen ausdrücklich schriftliche Erlaubnis erteilt. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier gilt: Man kann nie zu vorsichtig sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen befolgen. Zum Beispiel sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß zitieren müssen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, auch wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Websites wann immer möglich über HTTPS bereitstellen:

1. HTTPS verringert die Wahrscheinlichkeit, dass entfernte Inhalte auf dem Weg manipuliert werden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen und umgekehrt.

Das Aktivieren von HTTPS für Ihre Website erfordert die Installation eines speziellen Sicherheitszertifikats. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie etwas einrichten müssen, um ein Zertifikat selbst zu installieren. Wenn Sie jedoch HTTPS-Unterstützung für Ihre Website selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen für die automatische Erstellung und Installation des notwendigen Zertifikats — mit integrierter Unterstützung für die am weitesten verbreiteten Web-Server, einschließlich des Apache-Web-Servers, Nginx und anderer. Die Tools von Let's Encrypt sind darauf ausgelegt, den Prozess so einfach wie möglich zu machen, sodass es wirklich keinen guten Grund gibt, sie oder andere verfügbare Mittel nicht zu nutzen, um Ihre Website HTTPS-fähig zu machen.

> **Hinweis:** [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben das Bereitstellen von Inhalten standardmäßig über HTTPS.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie überprüfen, welche Unterstützung sie für die Bereitstellung von Inhalten mit HTTPS bieten.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um schlechten Code auf Ihrer Website auszuführen. Daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die sie für ihre Aufgabe benötigen._ Natürlich gilt das auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder zum Testen — aber keinen Schaden am restlichen Code verursachen kann (weder zufällig noch bösartig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht sandboxed sind, können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Beschränkungen auferlegen, indem Sie das `sandbox`-Attribut nicht mit Parametern verwenden, wie in unserem vorherigen Beispiel gezeigt.

Wenn es unbedingt erforderlich ist, können Sie Berechtigungen einzeln zurückgeben (innerhalb des Wertes des `sandbox=""`-Attributs) — siehe die [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Referenzeintrag für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-origin-Policy")}} umgehen, die das Ausführen von Skripten auf Websites verhindert, und JavaScript verwenden, um die Sandbox komplett zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Leute dazu bringen können, böswillige Inhalte direkt zu besuchen (außerhalb eines `iframe`). Wenn es eine Möglichkeit gibt, dass bestimmte Inhalte bösartig sein könnten (z.B. benutzergenerierte Inhalte), sollte diese von einer anderen {{Glossary("domain", "Domain")}} als Ihre Hauptseite bereitgestellt werden.

#### Konfigurieren Sie CSP-Direktiven

CSP steht für **[Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [einen Satz von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die entwickelt wurden, um die Sicherheit Ihres HTML-Dokuments zu verbessern. Zum Thema Sicherheit von `<iframe>`s, können Sie _[Ihren Server konfigurieren, um einen `X-Frame-Options`-Header zu senden.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler gemacht haben, wie wir es bereits früher gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [Über den X-Frame-Options-Sicherheit-Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) lesen, um mehr Hintergrundinformationen zu diesem Thema zu erhalten. Offensichtlich ist es eher außerhalb des Umfangs einer vollständigen Erklärung in diesem Artikel.

## Die Elemente \<embed> und `<object>`

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente haben eine andere Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Werkzeuge zur Einbettung von externen Inhalten wie PDFs.

Sie würden diese Elemente jedoch eher selten verwenden. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, zu ihnen zu verlinken, anstatt sie in der Seite einzubetten.

Historisch gesehen wurden diese Elemente auch verwendet, um Inhalte einzubetten, die von Browser-Plugins wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet werden, aber diese Technologie ist mittlerweile veraltet und wird von modernen Browsern nicht mehr unterstützt.

Sollten Sie Inhalte von Plugins einbetten müssen, sind hier die Informationen, die Sie mindestens benötigen:

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
      <td><em>Genauer</em> {{Glossary("MIME_type", "Medientyp")}} des eingebetteten Inhalts</td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>Höhe und Breite (in CSS-Pixeln) des vom Plugin gesteuerten Bereichs</td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a></td>
    </tr>
    <tr>
      <td>Unabhängiger HTML-Inhalt als Fallback für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>Enthalten innerhalb der öffnenden und schließenden <code>&#x3C;object></code>-Tags</td>
    </tr>
  </tbody>
</table>

Sehen wir uns ein Beispiel für ein `<object>` an, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Schritt zwischen Papier und Digital, aber sie stellen viele [Barrierefreiheitschallenges](https://webaim.org/techniques/acrobat/acrobat) und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in einigen Kreisen immer noch beliebt, es ist jedoch viel besser, zu ihnen zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema, andere Inhalte in Web-Dokumente einzubetten, kann schnell sehr komplex werden. In diesem Artikel haben wir versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hinweisen. Zu Beginn werden Sie die Einbettung wahrscheinlich nicht für viel mehr als das Einbeziehen von Drittinhalten wie Karten und Videos auf Ihren Seiten verwenden. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten von externen Inhalten beinhalten, außer denen, die wir hier besprochen haben. Einige haben wir bereits in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken.
