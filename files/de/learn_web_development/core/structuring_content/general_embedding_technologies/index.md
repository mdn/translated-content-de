---
title: Von Objekt zu Iframe — Allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Entwickler denken oft daran, Medien wie Bilder, Videos und Audio in Webseiten einzubinden. In diesem Artikel machen wir einen kleinen Seitenschritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltsarten in Ihre Webseiten einzubetten: das {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. `<iframe>`s sind zum Einbetten anderer Webseiten gedacht, während die anderen beiden Ihnen erlauben, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im Umgang mit
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Dateien</a
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Elemente wie PDF-Dokumente und andere Webseiten in
        Webseiten einbettet, mithilfe von {{htmlelement("object")}}, {{htmlelement("embed")}} und {{htmlelement("iframe")}}.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit im Web war es populär, **Frames** zu verwenden, um Websites zu erstellen – kleine Teile einer Website, die in separaten HTML-Seiten gespeichert sind. Diese wurden in ein Hauptdokument namens **Frameset** eingebettet, mit dem Sie den Bereich auf dem Bildschirm angeben konnten, den jeder Frame einnahm, ähnlich wie beim Anordnen der Spalten und Zeilen einer Tabelle. Diese galten in den mittleren bis späten 90er Jahren als das Nonplusultra, und es gab Beweise dafür, dass das Aufteilen einer Webseite in kleinere Teile die Download-Geschwindigkeit verbessert – besonders bemerkbar, da die Netzwerkverbindungen damals so langsam waren. Sie hatten jedoch viele Probleme, die die wenigen Vorteile bei zunehmender Netzwerkgeschwindigkeit weit überwogen, weshalb man sie heute nicht mehr verwendet.

Etwas später (Ende der 90er, Anfang der 2000er) wurden Plug-in-Technologien wie {{Glossary("Java", "Java-Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr populär – diese erlaubten Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die durch HTML allein nicht verfügbar waren. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger bekannte {{htmlelement("embed")}} ermöglicht, die zu dieser Zeit sehr nützlich waren. Sie sind seitdem aufgrund vieler Probleme, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr, aus der Mode gekommen. Heutzutage haben führende Browser die Unterstützung für Plugins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten zum Einbetten von Inhalten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Dies bietet eine Möglichkeit, ein komplettes Webdokument in ein anderes einzubetten, als ob es sich um ein {{htmlelement("img")}} oder ein ähnliches Element handelt, und wird heute regelmäßig verwendet.

Mit der Geschichtsstunde abgeschlossen, gehen wir weiter und sehen, wie wir einige dieser Elemente verwenden können.

## Aktives Lernen: Klassische Einsatzmöglichkeiten des Einbettens

In diesem Artikel gehen wir direkt in einen aktiven Lernabschnitt über, um Ihnen sofort eine realistische Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt kennt [YouTube](https://www.youtube.com/) sehr gut, aber viele Menschen wissen nicht, welche Möglichkeiten zum Teilen es bietet. Sehen wir uns an, wie YouTube es uns ermöglicht, ein Video auf jeder beliebigen Seite mithilfe eines {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_-Button – wählen Sie diesen aus, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie den _Einbetten_-Button und Sie erhalten einen `<iframe>`-Code – kopieren Sie diesen.
4. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie sich das Ergebnis im _Output_ an.

Für Bonuspunkte können Sie versuchen, eine [Google Map](https://www.google.com/maps/) in das Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Teilen oder Karte einbetten_.
4. Wählen Sie die Option Karten einbetten, die Ihnen einen `<iframe>`-Code gibt – kopieren Sie diesen.
5. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie sich das Ergebnis im _Output_ an.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit dem _Zurücksetzen_-Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen.

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

Das war einfach und spaßig, nicht wahr? {{htmlelement("iframe")}}-Elemente sind dafür konzipiert, andere Webdokumente in das aktuelle Dokument einzubetten. Dies ist ideal, um Drittanbieterinhalte in Ihre Website zu integrieren, über die Sie keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten – wie beispielsweise Videos von Onlinevideodiensten, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Onlinekartendiensten, Werbebanner etc. Auch die live editierbaren Beispiele, die Sie in diesem Kurs verwendet haben, werden mithilfe von `<iframe>`s implementiert.

Bevor Sie in die Verwendung von `<iframe>`-Elementen eintauchen, sollten Sie sich über einige Sicherheitsprobleme im Klaren sein.
Angenommen, Sie wollten das MDN-Glossar auf einer Ihrer Webseiten mithilfe des {{htmlelement("iframe")}}-Elements einfügen, dann könnten Sie etwas Ähnliches wie im nächsten Codebeispiel versuchen.
Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen würden, könnten Sie überrascht sein, eine Fehlermeldung anstelle der Glossarseite zu sehen:

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

Wenn Sie einen Blick in die Konsole Ihres Browsers werfen, sehen Sie eine Fehlermeldung ähnlich der folgenden:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheitsbedenken](#sicherheitsbedenken) unten geht näher darauf ein, warum Sie diesen Fehler sehen, aber zunächst sehen wir uns an, was unser Code macht.

Das Beispiel enthält das Nötigste, um ein `<iframe>` zu verwenden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser das `<iframe>` standardmäßig mit einem umgebenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) in den Vollbildmodus geschaltet werden (etwas außerhalb des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut enthält wie {{htmlelement("video")}}/{{htmlelement("img")}} einen Pfad, der auf die URL des einzubettenden Dokuments verweist.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die Sie für das iframe wünschen.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als der Rest der `<iframe>`-Funktionen funktioniert (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr darüber sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es ratsam, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dies macht Ihre Seite schneller nutzbar und verringert die offizielle Ladezeit Ihrer Seite (ein wichtiger {{Glossary("SEO", "SEO")}} Metrik).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt – schauen wir uns das jetzt genauer an. Wir erwarten nicht, dass Sie all diesen Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie nur auf dieses Anliegen aufmerksam machen und eine Referenz bieten, auf die Sie zurückkommen können, wenn Sie erfahrener werden und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Außerdem gibt es keinen Grund, Angst zu haben und `<iframe>`s nicht zu verwenden – Sie müssen nur vorsichtig sein. Lesen Sie weiter…

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für schlechte Menschen im Web sind (oft als **Hacker**, oder genauer gesagt, **Cracker** bezeichnet), um anzugreifen, wenn sie versuchen, böswillig Ihre Webseite zu verändern oder Menschen dazu zu bringen, etwas zu tun, das sie nicht tun möchten, wie beispielsweise sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Praktiken, die zu beachten sind – einige davon werden wir im Folgenden behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art häufiger iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene böswillige Website einbetten) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine gängige Methode, um Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst – versuchen Sie, das vorher gezeigte Beispiel in Ihrem Browser zu laden – Sie können [es live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich auch den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)). Anstelle der erwarteten Seite sehen Sie wahrscheinlich eine Nachricht, die in etwa bedeutet "Ich kann diese Seite nicht öffnen", und wenn Sie die _Konsole_ in den [Entwicklungstools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) betrachten, sehen Sie eine Nachricht, die Ihnen den Grund erläutert. In Firefox erhalten Sie eine Meldung wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options" -Richtlinie auf "DENY" verweigert_. Dies liegt daran, dass die Entwickler, die MDN erstellt haben, eine Einstellung auf dem Server eingefügt haben, der die Webseiten bereitstellt, um zu verhindern, dass sie in `<iframe>`s eingebettet werden (siehe [Konfigurieren der CSP-Richtlinien](#konfigurieren_von_csp-richtlinien), unten). Das macht Sinn – eine gesamte MDN-Seite macht wirklich keinen Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten etwas tun wie sie auf Ihrer Website einzubetten und als Ihre eigenen zu beanspruchen – oder versuchen, Daten über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem, wenn jeder anfangen würde, dies zu tun, würden alle zusätzlichen Bandbreitenkosten Mozilla viel Geld kosten.

#### Nur einbetten, wenn nötig

Manchmal macht es Sinn, Drittinhalte einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Drittanbieterinhalte nur dann einbetten, wenn es unbedingt notwendig ist. Eine gute Regel für Websicherheit ist _"Sie können nie zu vorsichtig sein. Wenn Sie es erstellt haben, überprüfen Sie es trotzdem noch einmal. Wenn es jemand anderes erstellt hat, nehmen Sie an, dass es gefährlich ist, bis bewiesen ist, dass es das nicht ist."_

Neben der Sicherheit sollten Sie sich auch über Probleme mit dem geistigen Eigentum im Klaren sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, sogar Inhalte, die Sie vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind streng. Auch hier können Sie nie zu vorsichtig sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, Sie müssen [uns ordnungsgemäß erwähnen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, auch wenn Sie wesentliche Änderungen vornehmen.

#### Verwendung von HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass Remote-Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen und umgekehrt.

Das Aktivieren von HTTPS auf Ihrer Seite erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting ohne Setupaufwand für das Einrichten eines Zertifikats. Wenn Sie jedoch _tatsächlich_ die Unterstützung von HTTPS selbst auf Ihrer Seite konfigurieren müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Werkzeuge und Anleitungen, um das benötigte Zertifikat automatisch zu erstellen und zu installieren – mit eingebauter Unterstützung für die meistgenutzten Webserver einschließlich des Apache-Webservers, Nginx und anderen. Das Let's Encrypt-Tooling ist darauf ausgelegt, den Prozess so einfach wie möglich zu machen, es gibt also wirklich keinen guten Grund, es nicht zu verwenden oder andere verfügbare Mittel zu nutzen, um Ihre Site mit HTTPS zu aktivieren.

> **Hinweis:** [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) ermöglichen es, Inhalte standardmäßig über HTTPS auszuliefern.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie überprüfen, welche Unterstützung er für das Bereitstellen von Inhalten mit HTTPS bietet.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um auf Ihrer Webseite böse Dinge zu tun, deshalb sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die benötigt werden, um ihre Aufgaben auszuführen._ Natürlich gilt das auch für Ihre eigenen Inhalte. Ein Container für Code, der eventuell anwendbar ist — oder für Tests — aber keinen Schaden am restlichen Code (ob zufällig oder böswillig) verursachen kann, wird [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) genannt.

Nicht sandboxed-Inhalte könnten in der Lage sein, JavaScript auszuführen, Formulare zu übermitteln, Popup-Fenster auszulösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen einsetzen, indem Sie das `sandbox`-Attribut ohne Parameter verwenden, wie im vorherigen Beispiel gezeigt.

Wenn unbedingt notwendig, können Sie Berechtigungen einzeln wieder hinzufügen (innerhalb des `sandbox=""` Attributwerts) – siehe die [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Referenzeinträge für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-origin-Policy")}} umgehen und JavaScript verwenden, um Sandboxing insgesamt abzuschalten.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen in bösartige Inhalte direkt (außerhalb eines `iframe`) locken können. Wenn es eine Chance gibt, dass bestimmte Inhalte bösartig sein könnten (z.B. nutzergenerierte Inhalte), liefern Sie diese bitte von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptseite aus.

#### Konfigurieren von CSP-Richtlinien

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und stellt [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) bereit (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn diese von einem Webserver bereitgestellt werden), die zur Verbesserung der Sicherheit Ihres HTML-Dokuments dienen. Um `<iframe>`s sicherer zu machen, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Seiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und viele andere Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir weiter oben gesehen haben.

> [!NOTE]
> Sie können Frederic Brauns Post [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Offensichtlich ist es für eine vollständige Erklärung in diesem Artikel außerhalb des Rahmens.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente haben eine andere Funktion als {{htmlelement("iframe")}} – diese Elemente sind vielseitige Werkzeuge zum Einbinden externer Inhalte, wie PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht oft verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, sie zu verlinken, anstatt sie direkt in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins wie {{Glossary("Adobe_Flash", "Adobe Flash")}} behandelt werden, aber diese Technologie ist jetzt veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie feststellen, dass Sie Plug-in-Inhalte einbetten müssen, ist dies die Art von Informationen, die Sie mindestens benötigen:

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
      <td>{{Glossary("URL", "Die URL")}} der eingebetteten Inhalte</td>
      <td><a href="/de/docs/Web/HTML/Element/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Genauer </em>{{Glossary("MIME_type", "Mediatyp")}}
        der eingebetteten Inhalte
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixel) des vom Plugin kontrollierten Bereichs
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

Sehen wir uns ein `<object>` Beispiel an, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Übergang zwischen Papier und Digitalem, aber sie stellen viele [Barrierefreiheitsprobleme](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in bestimmten Kreisen immer noch beliebt, aber es ist viel besser, sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir einige der fortgeschritteneren Funktionen der beteiligten Technologien andeuten. Zunächst werden Sie Einbettungen wahrscheinlich nicht über das Einfügen von Drittanbieterinhalten wie Karten und Videos hinaus verwenden. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte in Webseiten ermöglichen, außer den hier diskutierten. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken.
