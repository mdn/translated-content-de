---
title: Von Objekt zu iframe — andere Einbettungstechnologien
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

Inzwischen sollten Sie wirklich den Dreh raus haben, wie man Dinge in Ihre Webseiten einbettet, einschließlich Bilder, Videos und Audio. An diesem Punkt möchten wir einen kleinen Seitenschritt machen und einige Elemente betrachten, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen zum Einbetten anderer Webseiten, während die anderen beiden es Ihnen erlauben, externe Ressourcen wie PDF-Dateien einzubetten.

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
        >, Vertrautheit mit HTML-Grundlagen (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >) und den vorherigen Artikeln in diesem Modul.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Elemente auf Webseiten mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} einbettet, wie PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit im Web war es beliebt, **Frames** zu verwenden, um Websites zu erstellen — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert sind. Diese wurden in ein Master-Dokument eingebettet, das als **Frameset** bezeichnet wurde. Damit konnten Sie den Bereich auf dem Bildschirm angeben, den jeder Frame ausfüllte, ähnlich wie die Größe von Spalten und Reihen einer Tabelle. Diese galten in den mittleren bis späten 90er Jahren als der Gipfel der Coolness, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Teile wie dieses besser für Downloadgeschwindigkeiten war — besonders bemerkbar bei so langsamen Netzverbindungen wie damals. Sie hatten allerdings viele Probleme, die alle Vorteile bei schneller werdenden Netzgeschwindigkeiten weit überwogen, weshalb Sie sie heutzutage nicht mehr verwendet sehen.

Wenig später (Ende der 90er Jahre, Anfang der 2000er Jahre) wurden Plug-in-Technologien sehr populär, wie {{Glossary("Java", "Java-Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} — diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die allein durch HTML nicht verfügbar waren. Diese Technologien wurden durch Elemente wie {{htmlelement("object")}} und das weniger genutzte {{htmlelement("embed")}} eingebettet und waren damals sehr nützlich. Sie sind seither aufgrund vieler Probleme, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr, aus der Mode gekommen. Heute haben große Browser aufgehört, Plug-ins wie Flash zu unterstützen.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten zur Einbettung von Inhalten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, usw.) Es bietet eine Möglichkeit, ein gesamtes Webdokument in ein anderes einzubetten, als ob es ein {{htmlelement("img")}} oder ein ähnliches Element wäre, und wird heute regelmäßig verwendet.

Mit der Geschichtsstunde aus dem Weg, lassen Sie uns weitermachen und sehen, wie einige dieser Technologien verwendet werden.

## Aktives Lernen: Klassische Einbettungsanwendungen

In diesem Artikel steigen wir direkt in einen aktiven Lernabschnitt ein, um Ihnen sofort eine reale Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen kennen einige der Freigabemöglichkeiten nicht, die es bietet. Lassen Sie uns betrachten, wie YouTube es uns ermöglicht, ein Video auf jeder Seite einzufügen, die wir mögen, mit einem {{htmlelement("iframe")}}.

1. Gehen Sie zuerst zu YouTube und suchen Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_ Button — klicken Sie darauf, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie den _Einbetten_ Button und Sie erhalten einige `<iframe>`-Code — kopieren Sie diesen.
4. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie, was das Ergebnis im _Output_ ist.

Für Bonuspunkte könnten Sie auch versuchen, eine [Google Karte](https://www.google.com/maps/) in das Beispiel einzubetten:

1. Gehen Sie zu Google Maps und suchen Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) in der oberen linken Ecke der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Karte einbetten Option, die Ihnen einige `<iframe>`-Code gibt — kopieren Sie diesen.
5. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie, was das Ergebnis im _Output_ ist.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Reset_ Button zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Show solution_ Taste, um eine Antwort zu sehen.

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

Das war einfach und hat Spaß gemacht, oder? {{htmlelement("iframe")}}-Elemente sind so konzipiert, dass Sie andere Webdokumente in das aktuelle Dokument einbetten können. Dies ist großartig für das Einbinden von Drittanbieter-Inhalten in Ihre Website, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie Videos von Online-Videodiensten, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Sogar die live bearbeitbaren Beispiele, die Sie während dieses Kurses verwendet haben, sind mit `<iframe>`s implementiert.

Bevor Sie in die Verwendung von `<iframe>`-Elementen eintauchen, gibt es einige Sicherheitsbedenken, die beachtet werden müssen. Angenommen, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einfügen, Sie könnten dann versuchen, etwas Ähnliches wie das nächste Code-Beispiel zu machen. Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, eine Fehlermeldung anstelle der Glossarseite zu sehen:

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

Wenn Sie sich die Konsole Ihres Browsers ansehen, sehen Sie eine Fehlermeldung wie die folgende:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der [Sicherheitsbereich](#sicherheitsbedenken) unten geht genauer darauf ein, warum diese Fehlermeldung erscheint, doch zunächst sehen wir uns an, was unser Code macht.

Das Beispiel enthält das Nötigste, um ein `<iframe>` zu verwenden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wird diese Option verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser das `<iframe>` standardmäßig mit einem umgebenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Ist dieses Attribut gesetzt, kann das `<iframe>` im Vollbildmodus mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) (ein wenig außerhalb des Umfangs dieses Artikels) angezeigt werden.
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, enthält einen Pfad zur URL des einzubettenden Dokuments.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute geben an, welche Breite und Höhe das `iframe` haben soll.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als der Rest der `<iframe>`-Funktionen funktioniert (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; dazu mehr im nächsten Abschnitt.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen wurde. Dadurch wird Ihre Seite früher nutzbar und die offizielle Ladezeit der Seite (eine wichtige {{Glossary("SEO", "SEO")}}-Metrik) verringert.

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns das jetzt etwas genauer betrachten. Wir erwarten nicht, dass Sie all diese Inhalte beim ersten Mal perfekt verstehen; wir möchten Sie nur auf dieses Problem aufmerksam machen und eine Referenz bereitstellen, auf die Sie zurückkommen können, wenn Sie erfahrener werden und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten zu verwenden. Außerdem besteht kein Grund zur Angst, `<iframe>`s nicht zu verwenden — Sie müssen nur vorsichtig sein. Lesen Sie weiter…

Browserentwickler und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für böswillige Personen im Web (oft als **Hacker** oder genauer als **Cracker** bezeichnet) sind, wenn sie versuchen, Ihre Webseite böswillig zu ändern oder Menschen dazu zu bringen, etwas zu tun, was sie nicht tun möchten, wie z.B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Praktiken, die zu berücksichtigen sind — wir werden einige dieser Punkte unten behandeln.

> **Hinweis:** {{Glossary("Clickjacking", "Clickjacking")}} ist eine Art häufiger iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Website einbetten) und es verwenden, um Interaktionen der Benutzer zu erfassen. Dies ist eine häufige Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das vorher gezeigte Beispiel in Ihrem Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich auch den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) an). Anstelle der erwarteten Seite werden Sie wahrscheinlich eine Nachricht wie "Ich kann diese Seite nicht öffnen" sehen, und wenn Sie im _Konsolen_ Bereich der [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) nachsehen, erhalten Sie eine Nachricht, die Ihnen erklärt, warum. In Firefox erhalten Sie eine Meldung wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options"-Direktive mit "DENY" verweigert_. Dies liegt daran, dass die Entwickler von MDN eine Einstellung auf dem Server integriert haben, der die Webseiten bereitstellt, um zu verhindern, dass sie in `<iframe>`s eingebettet werden (siehe [Konfigurieren von CSP-Direktiven](#konfigurieren_sie_csp-direktiven), unten). Das ergibt Sinn — eine gesamte MDN-Seite macht wirklich keinen Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten etwas wie sie in Ihre Website einbetten und als Ihre eigenen beanspruchen — oder versuchen, Daten über {{Glossary("Clickjacking", "Clickjacking")}} zu stehlen, was beides wirklich schlechte Dinge sind. Plus, wenn das jeder anfangen würde, würde all die zusätzliche Bandbreite Mozilla eine Menge Geld kosten.

#### Nur einbetten, wenn notwendig

Manchmal macht es Sinn, Inhalte von Drittanbietern einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Inhalte von Drittanbietern nur dann einbetten, wenn es absolut notwendig ist. Eine gute Regel für Websicherheit ist: _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es nochmal. Wenn es jemand anderes gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Probleme des geistigen Eigentums bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, sogar Inhalte, bei denen Sie es vielleicht nicht erwarten (z.B. die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen schriftlich, eindeutig die Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind streng. Wiederum, Vorsicht ist geboten.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel ist der Inhalt auf MDN [unter CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß attribuieren müssen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unseren Inhalt zitieren, selbst wenn Sie erhebliche Änderungen vornehmen.

#### Nutzen Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS verringert die Chance, dass entfernte Inhalte während der Übertragung manipuliert werden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen, und umgekehrt.

Die HTTPS-Bereitstellung Ihrer Seite erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting, ohne dass Sie ein eigenes Setup zur Bereitstellung eines Zertifikats benötigen. Wenn Sie jedoch HTTPS-Unterstützung für Ihre Seite selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen, die Ihnen beim automatischen Erstellen und Installieren des erforderlichen Zertifikats helfen — mit eingebauter Unterstützung für die am weitesten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Die Let's Encrypt-Tools sind so konzipiert, dass der Prozess so einfach wie möglich ist, sodass es wirklich keinen guten Grund gibt, deren Nutzung oder andere verfügbare Mittel zur HTTPS-Bereitstellung Ihrer Seite zu vermeiden.

> **Hinweis:** [GitHub Pages](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) erlauben standardmäßig das Bereitstellen von Inhalten über HTTPS. Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung er für das Bereitstellen von Inhalten mit HTTPS bietet.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie wollen Angreifern so wenig Macht wie möglich geben, um schlechte Dinge auf Ihrer Website zu tun. Daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die für die Erfüllung ihrer Aufgabe notwendig sind._ Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, wo dieser angemessen verwendet werden kann — oder zum Testen — und nicht in der Lage ist, dem restlichen Codebestand Schaden zuzufügen (entweder versehentlich oder böswillig), wird als [Sandbox](<https://de.wikipedia.org/wiki/Sandbox_(Computersicherheit)>) bezeichnet.

Inhalte, die nicht gesandboxed sind, könnten möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen durch die Verwendung des `sandbox`-Attributs ohne Parameter auferlegen, wie in unserem vorherigen Beispiel gezeigt.

Wenn absolut erforderlich, können Sie Berechtigungen einzeln wieder hinzufügen (innerhalb des `sandbox=""`-Attributwerts) — siehe die [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Referenzeintrag für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-Origin-Policy")}} umgehen, die verhindert, dass Websites Skripte ausführen, und JavaScript verwenden, um das Sandboxen ganz auszuschalten.

> [!NOTE]
> Sandboxen bietet keinen Schutz, wenn Angreifer Menschen direkt zu bösartigen Inhalten (außerhalb eines `iframe`) verleiten können. Wenn es eine Wahrscheinlichkeit gibt, dass bestimmte Inhalte bösartig sein könnten (z.B. nutzergenerierte Inhalte), sollten diese von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptseite bereitgestellt werden.

#### Konfigurieren Sie CSP-Direktiven

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/CSP)** und bietet [einen Satz von HTTP-Headern](/de/docs/Web/HTTP/Headers/Content-Security-Policy) (Metadaten, die mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die dazu entwickelt sind, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es um die Sicherung von `<iframe>`s geht, können Sie _[Ihren Server so konfigurieren, dass ein entsprechender `X-Frame-Options`-Header gesendet wird.](/de/docs/Web/HTTP/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihre Webseiten einbetten (was {{Glossary("Clickjacking", "Clickjacking")}} und eine Reihe anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir vorher gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Offensichtlich ist dies außerhalb des Rahmens für eine vollständige Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente dienen einem anderen Zweck als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungswerkzeuge zum Einbetten externer Inhalte, wie PDFs.

Sie werden diese Elemente jedoch wahrscheinlich nicht sehr oft verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, darauf zu verlinken, anstatt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten genutzt, die von Browser-Plugins gehandhabt werden, wie z.B. {{Glossary("Adobe_Flash", "Adobe Flash")}}, aber diese Technologie ist jetzt veraltet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie das Einbetten von Plug-in-Inhalten in Erwägung ziehen, sind dies die Informationen, die Sie mindestens benötigen:

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
        <em>Genauer </em>{{Glossary("MIME_type", "Medientyp")}}
        der eingebetteten Inhalte
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des von dem Plugin gesteuerten Feldes
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Element/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Element/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Element/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Element/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Unabhängiger HTML-Inhalt als Rückfalloption für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>
        Innerhalb der öffnenden und schließenden
        <code>&#x3C;object></code>-Tags enthalten
      </td>
    </tr>
  </tbody>
</table>

Sehen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, aber sie stellen viele [Zugänglichkeitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in einigen Kreisen immer noch beliebt, aber es ist viel besser, darauf zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigste Information merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hinweisen. Zunächst werden Sie wahrscheinlich nicht viel mehr als Drittanbieter-Inhalte wie Karten und Videos auf Ihren Seiten einbetten. Wenn Sie jedoch erfahrener werden, werden Sie wahrscheinlich weitere Anwendungen dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, neben denen, die wir hier besprochen haben. Einige haben wir bereits in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}, aber es gibt noch weitere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für das Einbetten von Vektorgrafiken. Im nächsten Artikel des Moduls schauen wir uns [SVG](/de/docs/Web/SVG) an.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
