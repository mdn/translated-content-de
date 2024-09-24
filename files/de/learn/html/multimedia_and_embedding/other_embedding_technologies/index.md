---
title: Vom Objekt zum Iframe — andere Einbettungstechnologien
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Bis jetzt sollten Sie wirklich den Umgang mit dem Einbetten von Objekten in Ihre Webseiten beherrschen, einschließlich Bildern, Videos und Audios. An diesem Punkt möchten wir einen etwas seitlichen Schritt machen und uns einige Elemente ansehen, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die Elemente {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}}. `<iframe>`s dienen zur Einbettung anderer Webseiten, und die anderen beiden ermöglichen es Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, Vertrautheit mit den HTML-Grundlagen (wie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einführung in HTML</a
        >) und den vorherigen Artikeln in diesem Modul.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man Objekte in Webseiten mit den Elementen
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} einbettet, wie PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit war es im Web populär, **Frames** zu verwenden, um Websites zu erstellen — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert sind. Diese wurden in ein Hauptdokument namens **Frameset** eingebettet, das es Ihnen erlaubte, den Bereich auf dem Bildschirm anzugeben, den jeder Frame ausfüllte, ähnlich wie das Anordnen der Spalten und Zeilen einer Tabelle. Diese galten in den mittleren bis späten 90ern als die Spitze der Coolness, und es gab Beweise dafür, dass eine Webseite, die in kleinere Teile wie diese aufgeteilt wurde, besser für die Download-Geschwindigkeiten war — besonders bemerkbar, weil die Netzwerkverbindungen damals so langsam waren. Sie hatten jedoch viele Probleme, die alle positiven Aspekte überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, sodass man sie nicht mehr verwendet.

Ein wenig später (Ende der 90er, Anfang der 2000er) wurden Plugins wie [Java Applets](/de/docs/Glossary/Java) und [Flash](/de/docs/Glossary/Adobe_Flash) sehr populär — sie erlaubten Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die über HTML allein nicht verfügbar waren. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger genutzte {{htmlelement("embed")}} erreicht, die zu ihrer Zeit sehr nützlich waren. Seitdem sind sie jedoch aus der Mode gefallen aufgrund vieler Probleme, einschließlich Barrierefreiheit, Sicherheit, Dateigröße und mehr. Heute haben große Browser die Unterstützung von Plugins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten zur Einbettung von Inhalten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Dies bietet eine Möglichkeit, ein komplettes Webdokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, und wird heute regelmäßig verwendet.

Nachdem wir die Geschichtsstunde hinter uns gebracht haben, lassen Sie uns fortfahren und sehen, wie man einige dieser Technologien verwendet.

## Aktives Lernen: Klassische Einbettungsanwendungen

In diesem Artikel springen wir direkt in einen aktiven Lernbereich, um Ihnen sofort eine echte Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen wissen nicht über die Freigabefunktionen Bescheid, die es bietet. Schauen wir uns an, wie YouTube es ermöglicht, ein Video auf jeder gewünschten Seite mit einem {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Sie mögen.
2. Unter dem Video finden Sie eine _Teilen_-Schaltfläche — wählen Sie diese aus, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie die _Einbetten_-Schaltfläche aus und Sie erhalten etwas `<iframe>`-Code — kopieren Sie diesen.
4. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie, welches Ergebnis im _Ausgabefeld_ angezeigt wird.

Für Bonuspunkte können Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) im Beispiel einzubetten:

1. Gehen Sie zu Google Maps und suchen Sie eine Karte, die Sie mögen.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_ aus.
4. Wählen Sie die Option Karte einbetten, die Ihnen etwas `<iframe>`-Code gibt — kopieren Sie diesen.
5. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie, welches Ergebnis im _Ausgabefeld_ angezeigt wird.

Wenn Sie einen Fehler machen, können Sie es jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine Antwort zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 250px;"></div>

<h2>Editierbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Code-Bereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
</p>

<textarea
  id="code"
  class="input"
  style="width: 95%;min-height: 100px;"></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

const htmlSolution =
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// verhindert, dass die Tabulatortaste das Textfeld verlässt und
// sorgt dafür, dass sie stattdessen ein Tab-Zeichen an der Cursorposition einfügt

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

// Aktualisiert den gespeicherten userCode jedes Mal, wenn der Benutzer den Code im Textbereich aktualisiert

textarea.onkeyup = function () {
  // Wir wollen den Zustand nur speichern, wenn der Benutzer-Code angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzer-Code gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_classic_embedding_uses', 700, 600) }}

## iframes im Detail

Das war einfach und macht Spaß, oder? {{htmlelement("iframe")}}-Elemente sind so konzipiert, dass Sie andere Webdokumente in das aktuelle Dokument einbetten können. Dies ist ideal, um Inhalte Dritter in Ihre Website zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartendiensten, Werbebanner usw. Sogar die live bearbeitbaren Beispiele, die Sie in diesem Kurs verwendet haben, sind mit `<iframe>`s implementiert.

Bevor Sie in die Verwendung von `<iframe>`-Elementen eintauchen, gibt es einige Sicherheitsbedenken, die Sie beachten sollten. Nehmen wir an, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einfügen, könnten Sie etwas wie das folgende Codebeispiel verwenden. Wenn Sie den folgenden Code in eine Ihrer Seiten hinzufügen würden, könnten Sie überrascht sein, eine Fehlermeldung statt der Glossarseite zu sehen:

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
    src="https://developer.mozilla.org/de/docs/Glossary"
    width="100%"
    height="500"
    allowfullscreen
    sandbox>
    <p>
      <a href="/de/docs/Glossary">
        Fallback-Link für Browser, die keine iframes unterstützen
      </a>
    </p>
  </iframe>
</body>
```

Wenn Sie sich die Konsole Ihres Browsers ansehen, werden Sie eine Fehlermeldung wie die folgende sehen:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheitsbedenken](#sicherheitsbedenken) unten geht näher darauf ein, warum Sie diese Fehlermeldung sehen, aber lassen Sie uns zuerst betrachten, was unser Code macht.

Das Beispiel enthält die grundlegenden Elemente, die für die Verwendung eines `<iframe>` erforderlich sind:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne einen umgebenden Rahmen angezeigt. Andernfalls zeigen Browser standardmäßig das `<iframe>` mit einem umgebenden Rahmen an (was in der Regel unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) in den Vollbildmodus versetzt werden (etwas über den Umfang dieses Artikels hinaus).
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, enthält einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die Sie für das iframe festlegen möchten.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als die übrigen `<iframe>`-Funktionen funktioniert (z. B. IE 10 und darüber), fordert erhöhte Sicherheitseinstellungen an; wir werden dazu im nächsten Abschnitt mehr sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dies macht Ihre Seite schneller benutzbar und verkürzt die offizielle Ladezeit der Seite (ein wichtiges {{glossary("SEO")}}-Kriterium).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns darauf jetzt näher eingehen. Wir erwarten nicht, dass Sie all diesen Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie lediglich auf dieses Thema aufmerksam machen und eine Referenz bieten, auf die Sie zurückkommen können, wenn Sie mehr Erfahrung sammeln und `<iframe>`s in Ihren Experimenten und Arbeiten verwenden möchten. Zudem gibt es keinen Grund, vor der Nutzung von `<iframe>`s Angst zu haben — Sie müssen nur vorsichtig sein. Lesen Sie weiter…

Browser-Hersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein übliches Angriffsziel (offizieller Begriff: **Angriffsvektor**) für böswillige Personen im Web (häufig als **Hacker**, oder genauer gesagt **Cracker**, bezeichnet) sind, die versuchen, Ihre Webseite böswillig zu ändern oder Personen dazu zu bringen, etwas zu tun, das sie nicht möchten, z. B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikations-Ingenieure und Browser-Entwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch Best Practices zu beachten — einige davon werden wir im Folgenden behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Glossary/Clickjacking) ist eine Art von häufigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Website einbetten) und es nutzen, um Benutzerinteraktionen abzufangen. Dies ist eine häufige Methode, um Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein kurzes Beispiel zuerst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)). Statt der erwarteten Seite werden Sie wahrscheinlich eine Art Nachricht wie "Diese Seite kann nicht geöffnet werden" sehen, und wenn Sie sich die _Konsole_ in den [Entwickler-Tools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/Was_sind_Entwickler-Tools_des_Browsers) ansehen, werden Sie eine Meldung sehen, die Ihnen den Grund dafür verrät. In Firefox sehen Sie eine Nachricht wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wurde durch "X-Frame-Options"-Direktive auf "DENY" gesetzt verweigert_. Dies liegt daran, dass die Entwickler, die MDN erstellt haben, eine Einstellung auf dem Server enthalten haben, der die Webseiten bereitstellt, um sie daran zu hindern, innerhalb von `<iframe>`s eingebettet zu werden (siehe [CSP-Direktiven konfigurieren](#konfigurieren_sie_csp-direktiven) unten). Dies macht Sinn — eine ganze MDN-Seite macht eigentlich keinen Sinn, um in andere Seiten eingebettet zu werden, es sei denn, Sie wollen etwas wie ihre Einbettung auf Ihrer Website, um sie als Ihre eigene auszugeben — oder versuchen, Daten durch [Clickjacking](/de/docs/Glossary/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem würde, wenn dies jeder tun würde, der zusätzliche Datenverkehr Mozilla viel Geld kosten.

#### Nur dann einbetten, wenn es notwendig ist

Manchmal macht es Sinn, Inhalte Dritter einzubetten — wie YouTube-Videos und Karten — jedoch können Sie sich viele Kopfschmerzen ersparen, wenn Sie nur dann Inhalte Dritter einbetten, wenn es absolut notwendig ist. Eine gute Regel für Websicherheit ist: _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es noch einmal. Wenn es jemand anderes gemacht hat, nehmen Sie an, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch über Fragen des geistigen Eigentums im Klaren sein. Die meisten Inhalte sind urheberrechtlich geschützt, sowohl offline als auch online, selbst Inhalte, die Sie vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie keine Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Besitzer haben Ihnen eine schriftliche, eindeutige Erlaubnis erteilt. Strafen für Urheberrechtsverletzungen sind schwerwiegend. Wiederum, Sie können nie zu vorsichtig sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Beispielsweise sind die Inhalte auf MDN [lizenziert unter CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, Sie müssen uns [korrekt erwähnen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte verwenden, auch wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass externe Inhalte auf dem Transportweg manipuliert werden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen können und umgekehrt.

Das HTTPS-Enablement Ihrer Website erfordert ein spezielles Sicherheitszertifikat, das installiert werden muss. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting, ohne dass Sie selbst etwas einrichten müssen, um ein Zertifikat zu installieren. Aber wenn Sie _selbst_ HTTPS-Unterstützung für Ihre Website einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen, die Sie verwenden können, um das notwendige Zertifikat automatisch zu erstellen und zu installieren — mit eingebauter Unterstützung für die am weitesten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Die Let's Encrypt-Tools sind so konzipiert, dass der Prozess so einfach wie möglich ist, sodass es wirklich keinen guten Grund gibt, deren Verwendung oder andere verfügbare Mittel zur HTTPS-Fähigkeit Ihrer Site zu meiden.

> **Hinweis:** [GitHub-Seiten](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) ermöglichen es, Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter nutzen, sollten Sie prüfen, welche Unterstützung er für die Bereitstellung von Inhalten über HTTPS bietet.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um auf Ihrer Website schlechte Dinge zu tun, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die für ihre Arbeit benötigt werden._ Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, wo er angemessen verwendet werden kann — oder zum Testen — aber keinen Schaden an der restlichen Codebasis anrichten kann (entweder unbeabsichtigt oder böswillig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht sandboxed sind, können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster öffnen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen auferlegen, indem Sie das `sandbox`-Attribut ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Wenn absolut erforderlich, können Sie Berechtigungen einzeln hinzufügen (innerhalb des `sandbox=""`-Attributwerts) — siehe den Eintrag [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die [Same-origin policy](/de/docs/Glossary/Same-origin_policy) umgehen, die verhindert, dass Seiten Skripte ausführen, und JavaScript verwenden, um das Sandboxing vollständig zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen dazu verleiten können, bösartige Inhalte direkt (außerhalb eines `iframe`) zu besuchen. Wenn es irgendwelche Chancen gibt, dass bestimmte Inhalte bösartig sein könnten (z. B. von Benutzern erstellte Inhalte), stellen Sie sicher, dass sie von einer anderen {{glossary("domain")}} als Ihrer Hauptsite bereitgestellt werden.

#### Konfigurieren Sie CSP-Direktiven

{{Glossary("CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/CSP)** und stellt [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Headers/Content-Security-Policy) bereit (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die dazu dienen, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es darum geht, `<iframe>`s zu sichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Glossary/Clickjacking) und eine Reihe anderer Angriffe ermöglichen würde), genau das haben die MDN-Entwickler getan, wie wir zuvor gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) lesen, um mehr Hintergrundinformationen zu diesem Thema zu erhalten. Offensichtlich ist es außerhalb des Umfangs für eine vollständige Erklärung in diesem Artikel.

## Die \<embed>- und \<object>-Elemente

Die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente haben eine andere Funktion als das {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbetten-Werkzeuge zur Einbettung externer Inhalte, wie PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht sehr oft verwenden. Wenn Sie PDF-Dateien anzeigen müssen, ist es in der Regel besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von {{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe Flash")}} behandelt wurden, aber diese Technologie ist jetzt obsolet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie feststellen sollten, dass Sie Plugin-Inhalte einbetten müssen, ist dies die Art von Informationen, die Sie mindestens benötigen:

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
      <td>{{glossary("URL")}} des eingebetteten Inhalts</td>
      <td><a href="/de/docs/Web/HTML/Element/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>genauer </em>{{glossary("MIME type", 'Medientyp')}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin kontrollierten Kastens
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Element/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Element/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Element/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Element/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Namen und Werte, um das Plugin mit Parametern zu versorgen</td>
      <td>ad-hoc-Attribute mit diesen Namen und Werten</td>
      <td>
        Einzelnes {{htmlelement("param")}}-Element, das innerhalb von
        <code>&#x3C;object></code> enthalten ist
      </td>
    </tr>
    <tr>
      <td>unabhängiger HTML-Inhalt als Fallback für eine nicht verfügbare Ressource</td>
      <td>nicht unterstützt (<code>&#x3C;noembed></code> ist obsolet)</td>
      <td>
        enthalten innerhalb von <code>&#x3C;object></code>, nach
        <code>&#x3C;param></code>-Elementen
      </td>
    </tr>
  </tbody>
</table>

Lassen Sie uns ein `<object>`-Beispiel betrachten, das ein PDF in eine Webseite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="mypdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    Sie haben kein PDF-Plugin, aber Sie können
    <a href="mypdf.pdf">die PDF-Datei herunterladen. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und digital, aber sie bringen viele [Zugänglichkeitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) mit sich und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in einigen Kreisen immer noch recht beliebt, es ist jedoch viel besser, sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während immer noch einige der fortgeschritteneren Funktionen der beteiligten Technologien angedeutet werden. Am Anfang werden Sie das Einbinden wahrscheinlich nicht viel über das Hinzufügen von Drittanbieter-Inhalten wie Karten und Videos auf Ihren Seiten hinaus verwenden. Wenn Sie jedoch mehr Erfahrung sammeln, werden Sie wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte ermöglichen, abgesehen von denen, die wir hier besprochen haben. Einige davon haben wir bereits in vorherigen Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}, aber es gibt noch weitere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken. Wir werden uns [SVG](/de/docs/Web/SVG) im nächsten Artikel des Moduls ansehen.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
