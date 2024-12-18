---
title: Von object zu iframe — andere Einbettungstechnologien
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Inzwischen sollten Sie wirklich den Dreh raus haben, Inhalte wie Bilder, Videos und Audio in Ihre Webseiten einzubetten. An dieser Stelle möchten wir einen kleinen Seitensprung machen und uns einige Elemente ansehen, mit denen Sie eine Vielzahl von Inhaltstypen in Ihre Webseiten einbetten können: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s sind zum Einbetten anderer Webseiten gedacht, während die anderen beiden es Ihnen ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den Grundlagen von HTML (wie im
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        >) und den vorherigen Artikeln in diesem Modul behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Gegenstände in Webseiten mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} einbettet, wie z.B. PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit war es auf dem Web populär, **Frames** zur Erstellung von Webseiten zu verwenden – kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert wurden. Diese wurden in ein Hauptdokument namens **Frameset** eingebettet, das es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame füllte, ähnlich wie das Größen von Spalten und Zeilen einer Tabelle. Diese wurden in den mittleren bis späten 90er Jahren als das Höchste der Coolness angesehen, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Teile, wie es dadurch geschieht, für schnellere Download-Geschwindigkeiten besser war – was besonders bei damals so langsamen Netzwerkverbindungen bemerkbar war. Sie hatten jedoch viele Probleme, die alle positiven Aspekte bei weitem überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, sodass man sie heute nicht mehr sieht.

Ein wenig später (Ende der 90er, Anfang der 2000er Jahre) wurden Plugin-Technologien wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr populär — diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die nur durch HTML alleine nicht verfügbar waren. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger verwendete {{htmlelement("embed")}} erreicht, und sie waren damals sehr nützlich. Sie sind inzwischen aus der Mode gekommen wegen vieler Probleme, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr. Heutzutage haben große Browser aufgehört, Plugins wie Flash zu unterstützen.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten zur Einbettung von Inhalten wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.). Es bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, als ob es sich um ein {{htmlelement("img")}} oder ein anderes solches Element handelt, und wird heute regelmäßig verwendet.

Nachdem wir den Geschichtsunterricht abgeschlossen haben, lassen Sie uns weitermachen und sehen, wie wir einige dieser Technologien nutzen können.

## Aktives Lernen: Klassische Einbettungsverwendung

In diesem Artikel tauchen wir direkt in einen aktiven Lernabschnitt ein, um Ihnen sofort eine wirkliche Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Onlinewelt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Leute wissen nicht über einige der verfügbaren Sharing-Funktionen. Lassen Sie uns ansehen, wie YouTube uns ermöglicht, ein Video in jede Seite, die wir mögen, mit einem {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_-Button – wählen Sie diesen aus, um die Sharing-Optionen anzuzeigen.
3. Wählen Sie den _Einbetten_-Button und Sie erhalten einige `<iframe>`-Code – kopieren Sie diesen.
4. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie, was das Ergebnis im _Output_ ist.

Als Bonus könnten Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) im Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_ aus.
4. Wählen Sie die Option Karte einbetten, die Ihnen einige `<iframe>`-Code geben wird – kopieren Sie diesen.
5. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie, was das Ergebnis im _Output_ ist.

Wenn Sie einen Fehler machen, können Sie es immer mit dem _Zurücksetzen_ Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_ Button, um eine Antwort zu sehen.

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

Das war einfach und macht Spaß, nicht wahr? {{htmlelement("iframe")}}-Elemente sind dazu gedacht, andere Webdokumente in das aktuelle Dokument einzubetten. Dies ist großartig, um Drittanbieterinhalte in Ihre Webseite zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie Videos von Online-Videodiensten, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner, usw. Sogar die live bearbeitbaren Beispiele, die Sie in diesem Kurs verwendet haben, werden mit `<iframe>`s implementiert.

Bevor Sie sich in die Nutzung von `<iframe>`-Elementen stürzen, sollten Sie sich einiger Sicherheitsbedenken bewusst sein. Angenommen, Sie möchten das MDN-Glossar auf eine Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einbinden, dann könnten Sie etwas wie das nächste Codebeispiel versuchen. Wenn Sie den unten stehenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, eine Fehlermeldung anstelle der Glossarseite zu sehen:

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

Wenn Sie sich die Konsole Ihres Browsers ansehen, sehen Sie eine Fehlermeldung ähnlich der folgenden:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheit](#sicherheitsbedenken) weiter unten geht detaillierter darauf ein, warum Sie diese Fehlermeldung sehen, aber zuerst schauen wir uns an, was unser Code tut.

Das Beispiel umfasst die wesentlichen Grundlagen, die zur Verwendung eines `<iframe>`s benötigt werden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser standardmäßig das `<iframe>` mit einem umgebenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wenn festgelegt, kann das `<iframe>` im Vollbildmodus mittels der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) angezeigt werden (etwas außerhalb des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die Sie für das iframe wünschen.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern funktioniert als der Rest der `<iframe>`-Funktionen (z. B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr dazu sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dies macht Ihre Seite schneller nutzbar und verringert Ihre offizielle Ladezeit der Seite (eine wichtige {{Glossary("SEO", "SEO")}} Metrik).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns jetzt etwas detaillierter darauf eingehen. Es wird nicht erwartet, dass Sie all diese Inhalte beim ersten Mal perfekt verstehen; wir wollen Ihnen nur dieses Anliegen bewusst machen und eine Referenz bereitstellen, zu der Sie zurückkehren können, wenn Sie mehr Erfahrung sammeln und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Außerdem besteht kein Grund zur Panik und dazu, `<iframe>`s nicht zu verwenden — Sie müssen nur vorsichtig sein. Lesen Sie weiter...

Browserhersteller und Webentwickler haben es auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Ausdruck: **Angriffsvektor**) für böse Menschen im Web (oft als **Hacker** oder genauer gesagt als **Cracker** bezeichnet) sind, die versuchen, Ihre Webseite böswillig zu verändern oder Menschen dazu zu verleiten, etwas zu tun, das sie nicht wollen, wie z.B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikations-Ingenieure und Browser-Entwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Praktiken, die man beachten sollte — einige davon werden wir hier behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von häufigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Webseite einbetten) und es verwenden, um die Interaktionen der Benutzer einzufangen. Dies ist eine verbreitete Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) an). Statt der erwarteten Seite sehen Sie wahrscheinlich eine Art von Nachricht im Sinne von "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ansehen, erhalten Sie eine Nachricht die Ihnen erklärt warum. In Firefox werden Sie wahrscheinlich so etwas wie _Das Laden von "https:\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird von "X-Frame-Options"-Directive auf "DENY" eingestellt verweigert._ Dies liegt daran, dass die Entwickler, die MDN gebaut haben, eine Einstellung auf dem Server, der die Webseiten bereitstellt, enthalten, um das Einbetten in `<iframe>`s zu verbieten (siehe [Befehlen Sie CSP-Direktiven konfigurieren](#csp-direktiven_konfigurieren), unten). Dies macht Sinn — eine gesamte MDN-Seite macht wirklich keinen Sinn, um in andere Seiten eingebettet zu werden, es sei denn, Sie möchten sie auf Ihrer Seite einbetten und als Ihre eigene beanspruchen — oder versuchen, Daten über Clickjacking zu stehlen, was beides wirklich schlechte Dinge sind, die man tun kann. Wenn alle damit anfangen würden, würde die zusätzliche Bandbreite Mozilla viel Geld kosten.

#### Nur einbetten, wenn es notwendig ist

Manchmal macht es Sinn, Drittanbieterinhalte einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie nur dann Drittanbieterinhalte einbetten, wenn es wirklich notwendig ist. Eine gute Regel für die Websicherheit lautet _"Man kann nie vorsichtig genug sein. Wenn Sie es gemacht haben, überprüfen Sie es trotzdem doppelt. Wenn es jemand anders gemacht hat, nehmen Sie an, dass es gefährlich ist, bis das Gegenteil bewiesen wird."_

Neben der Sicherheit sollten Sie sich auch der Fragen des geistigen Eigentums bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, auch Inhalte, die Sie vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen schriftlich eine unmissverständliche Erlaubnis erteilt. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier: Sie können nie vorsichtig genug sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel ist der Inhalt auf MDN [lizenziert unter CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß erwähnen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unseren Inhalt zitieren, auch wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten immer dann mit HTTPS ausliefern, wenn dies möglich ist:

1. HTTPS verringert die Wahrscheinlichkeit, dass entfernte Inhalte während der Übertragung manipuliert werden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen, und umgekehrt.

Das Aktivieren von HTTPS für Ihre Seite erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst eine Einrichtung vornehmen müssen, um ein Zertifikat zu installieren. Wenn Sie jedoch die HTTPS-Unterstützung für Ihre Seite selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Werkzeuge und Anweisungen, die Sie zur automatischen Erstellung und Installation des erforderlichen Zertifikats verwenden können — mit eingebauter Unterstützung für die am meisten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Das Let's Encrypt-Tooling ist darauf ausgelegt, den Prozess so einfach wie möglich zu gestalten, sodass es wirklich keinen guten Grund gibt, es oder andere verfügbare Mittel zur HTTPS-Aktivierung Ihrer Seite nicht zu nutzen.

> **Hinweis:** [GitHub-Seiten](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) ermöglichen standardmäßig die Bereitstellung von Inhalten über HTTPS.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie überprüfen, welche Unterstützung dieser für die Bereitstellung von Inhalten mit HTTPS bietet.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, schlechte Dinge auf Ihrer Webseite zu tun, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die nötig sind, um ihre Arbeit zu erledigen_. Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er geeignet verwendet werden kann — oder zum Testen — aber keinen Schaden am Rest der Codebasis (entweder versehentlich oder böswillig) verursachen kann, wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Nicht sandboxed Inhalte können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen usw. Standardmäßig sollten Sie mit dem `sandbox`-Attribut ohne Parameter alle verfügbaren Einschränkungen auferlegen, wie in unserem vorherigen Beispiel gezeigt.

Wenn unbedingt erforderlich, können Sie Berechtigungen einzeln wieder hinzufügen (innerhalb des `sandbox=""`-Attributwerts) — siehe den [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-origin policy")}} umgehen, die das Ausführen von Skripten aufhält, und JavaScript verwenden, um die Sandbox-Einschränkungen ganz aufzuheben.

> [!NOTE]
> Das Sandboxen bietet keinen Schutz, wenn Angreifer Menschen täuschen können, bösartige Inhalte direkt zu besuchen (außerhalb eines `iframe`). Wenn eine Chance besteht, dass bestimmte Inhalte bösartig sein könnten (z.B. nutzergenerierte Inhalte), stellen Sie bitte sicher, dass diese von einer anderen {{Glossary("domain", "Domain")}} als Ihre Hauptseite bereitgestellt werden.

#### CSP-Direktiven konfigurieren

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy (Inhaltssicherheitsrichtlinien)](/de/docs/Web/HTTP/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten bereitgestellt werden, wenn sie von einem Webserver ausgeliefert werden), die darauf ausgelegt sind, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es darum geht, `<iframe>`s abzusichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Webseiten Ihre Inhalte in ihre Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir oben gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für Hintergrundinformationen zu diesem Thema lesen. Offensichtlich ist es außerhalb des Umfangs für eine vollständige Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente dienen einer anderen Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungswerkzeuge zum Einbetten externer Inhalte, wie PDFs.

Sie werden diese Elemente jedoch wahrscheinlich nicht sehr häufig verwenden. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, sie zu verlinken, anstatt sie auf der Seite einzubetten.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet werden, aber diese Technologie ist inzwischen veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie Inhalte von Plugins einbetten müssen, sind dies die Informationen, die Sie mindestens benötigen:

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
        <em>Genauer</em> {{Glossary("MIME_type", "Medientyp")}} des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin kontrollierten Rahmens
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

Sehen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (sehen Sie das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, aber sie stellen viele [Barrierefreiheitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in einigen Kreisen nach wie vor beliebt, aber es ist viel besser, auf sie zu verweisen, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige zusätzliche Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Können: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Das Thema der Einbettung anderer Inhalte in Webdokumente kann schnell sehr komplex werden, weshalb wir in diesem Artikel versucht haben, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir immer noch auf einige der weiterentwickelten Funktionen der beteiligten Technologien hinweisen. Zu Beginn werden Sie die Einbettung wahrscheinlich nicht für viel mehr verwenden als das Einfügen von Drittanbieterinhalten wie Karten und Videos auf Ihre Seiten. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich weitere Verwendungsmöglichkeiten für sie finden.

Es gibt viele andere Technologien, die neben den hier besprochenen das Einbetten externer Inhalte betreffen. Einige davon haben wir in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}, aber es gibt noch weitere zu entdecken, wie {{htmlelement("canvas")}} für durch JavaScript generierte 2D- und 3D-Grafiken, und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken. Im nächsten Artikel des Moduls werden wir uns mit [SVG](/de/docs/Web/SVG) befassen.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
