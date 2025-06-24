---
title: Von object zu iframe — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Entwickler denken häufig an die Einbettung von Medien wie Bildern, Videos und Audio in Webseiten. In diesem Artikel machen wir einen etwas seitlichen Schritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhalten in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s sind für das Einbetten anderer Webseiten gedacht, während die anderen beiden es Ihnen ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

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
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Objekte in Webseiten mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} einbettet, wie zum Beispiel PDF-Dokumente und andere Webseiten.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit im Web war es beliebt, **Frames** zu nutzen, um Websites zu erstellen – kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert wurden. Diese wurden in einem Hauptdokument, dem sogenannten **Frameset**, eingebettet, das es Ihnen erlaubte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame füllte, ähnlich wie das Größen der Spalten und Zeilen einer Tabelle. In den mittleren bis späten 90ern galten sie als besonders cool, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinerer Teile wie dieses besser für die Download-Geschwindigkeiten war – insbesondere bei den damals sehr langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die alle Vorteile überwogen, als die Netzgeschwindigkeiten schneller wurden, sodass sie heute nicht mehr verwendet werden.

Ein wenig später (Ende der 90er, Anfang der 2000er) wurden Plugin-Technologien sehr populär, wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} — diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die HTML allein nicht bot. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} und das weniger verwendete {{htmlelement("embed")}} erreicht und sie waren damals sehr nützlich. Seitdem sind sie aufgrund vieler Probleme aus der Mode gekommen, darunter Zugänglichkeit, Sicherheit, Dateigröße und mehr. Heute unterstützen große Browser keine Plugins wie Flash mehr.

Schließlich erschien das {{htmlelement("iframe")}} Element (zusammen mit anderen Möglichkeiten zum Einbetten von Inhalten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.) Es bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein anderes ähnliches Element, und wird heute regelmäßig verwendet.

Nachdem wir nun den Geschichtsunterricht hinter uns gebracht haben, lassen Sie uns weitermachen und sehen, wie man einige dieser Technologien nutzt.

## Aktives Lernen: klassische Einbettungsanwendungen

In diesem Artikel werden wir direkt in einen aktiven Lernabschnitt einsteigen, um Ihnen sofort eine Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen wissen nicht über einige der verfügbaren Sharing-Funktionen Bescheid. Sehen wir uns an, wie YouTube es ermöglicht, ein Video auf jeder beliebigen Seite, die wir möchten, mit einem {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Share_-Button — wählen Sie diesen aus, um die Sharing-Optionen anzuzeigen.
3. Wählen Sie den _Embed_-Button aus und Sie erhalten einen `<iframe>`-Code — kopieren Sie diesen.
4. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie, welches Ergebnis im _Output_ angezeigt wird.

Für Bonuspunkte könnten Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) in das Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Teilen oder Karte einbetten_.
4. Wählen Sie die Option Karte einbetten, die Ihnen einen `<iframe>`-Code gibt — kopieren Sie diesen.
5. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie, welches Ergebnis im _Output_ angezeigt wird.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Reset_-Button zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie die _Show solution_-Taste, um eine Antwort zu sehen.

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

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
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

Das war doch einfach und spaßig, oder? {{htmlelement("iframe")}}-Elemente sind dafür entworfen, dass Sie andere Webdokumente in das aktuelle Dokument einbetten können. Das ist großartig, um Drittanbieter-Inhalte in Ihre Website zu integrieren, über die Sie vielleicht keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie zum Beispiel Videos von Online-Videoprovidern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Sogar die live editierbaren Beispiele, die Sie in diesem Kurs verwendet haben, sind mit `<iframe>`s implementiert.

Bevor Sie sich der Verwendung von `<iframe>`-Elementen widmen, sollten Sie einige Sicherheitsbedenken beachten.
Angenommen, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einbinden, dann könnten Sie etwas wie das nächste Codebeispiel versuchen.
Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, anstelle der Glossarseite eine Fehlermeldung zu sehen:

```html
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
```

```css
iframe {
  border: none;
}
```

Wenn Sie sich die Konsole Ihres Browsers ansehen, sehen Sie eine Fehlermeldung wie die folgende:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der Abschnitt [Sicherheit](#sicherheitsbedenken) unten geht näher darauf ein, warum Sie diesen Fehler sehen, aber lassen Sie uns zuerst ansehen, was unser Code tut.

Das Beispiel enthält die wesentlichen Elemente, die benötigt werden, um ein `<iframe>` zu verwenden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umgebenden Rahmen angezeigt. Andernfalls zeigen Browser das `<iframe>` standardmäßig mit einem Rahmen an (wodurch es in der Regel unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) im Vollbildmodus angezeigt werden (etwas über den Umfang dieses Artikels hinaus).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute spezifizieren die Breite und Höhe, die Sie dem iframe geben möchten.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als der Rest der `<iframe>`-Funktionen funktioniert (z.B. IE 10 und höher), fordert erweiterte Sicherheitseinstellungen an; wir werden mehr dazu im nächsten Abschnitt sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframe mit JavaScript zu setzen, nachdem der Hauptinhalt fertig geladen ist. Dies macht Ihre Seite früher benutzbar und verringert Ihre offizielle Ladezeit der Seite (ein wichtiger {{Glossary("SEO", "SEO")}}-Kennwert.)

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns jetzt etwas detaillierter darauf eingehen. Wir erwarten nicht, dass Sie diesen Inhalt perfekt beim ersten Mal verstehen; wir möchten Sie nur auf dieses Anliegen aufmerksam machen und eine Referenz bereitstellen, zu der Sie zurückkehren können, wenn Sie mehr Erfahrung haben und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten zu verwenden. Außerdem gibt es keinen Grund, Angst zu haben und `<iframe>`s nicht zu verwenden — Sie müssen lediglich vorsichtig sein. Lesen Sie weiter…

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für schlechte Menschen im Web sind (oft als **Hacker** bezeichnet, oder genauer **Cracker**), um Ihre Webseite böswillig zu verändern oder Leute dazu zu bringen, etwas zu tun, was sie nicht wollen, wie z.B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikations-Ingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Methoden zu berücksichtigen — wir werden einige davon unten beleuchten.

> [!NOTE] > [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von häufigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene böswillige Website einbetten) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine häufige Methode, um Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können [es live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([sehen Sie sich auch den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)). Anstatt der erwarteten Seite sehen Sie wahrscheinlich eine Art Nachricht im Sinne von "Ich kann diese Seite nicht öffnen", und wenn Sie die _Konsole_ in den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) aufrufen, sehen Sie eine Nachricht, die Ihnen den Grund dafür erklärt. In Firefox wird Ihnen etwas in der Art von _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die `X-Frame-Options`-Direktive verweigert, die auf `DENY` gesetzt ist_ gesagt. Dies liegt daran, dass die Entwickler, die MDN erstellt haben, eine Einstellung auf dem Server konfiguriert haben, um zu verhindern, dass ihre Seiten in `<iframe>`s eingebettet werden (siehe [Configure CSP directives](#konfigurieren_sie_csp-direktiven), unten). Das ergibt Sinn — eine vollständige MDN-Seite macht nicht wirklich Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten sie auf Ihrer Seite einbetten und als Ihre eigenen ausgeben — oder versuchen, Daten über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was wirklich schlechte Dinge sind, die man tun kann. Wenn alle anfangen würden, dies zu tun, würde die zusätzliche Bandbreite Mozilla viel Geld kosten.

#### Einbetten nur bei Notwendigkeit

Manchmal macht es Sinn, Drittanbieter-Inhalte einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie nur dann Drittanbieter-Inhalte einbetten, wenn es völlig notwendig ist. Eine gute Regel für die Web-Sicherheit lautet _"Man kann nie zu vorsichtig sein. Wenn Sie es selbst gemacht haben, überprüfen Sie es trotzdem noch einmal. Wenn es jemand anderes gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben Sicherheitsaspekten sollten Sie sich auch der Urheberrechtsfragen bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, sowohl offline als auch online, selbst Inhalte, bei denen Sie es vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie nie Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Inhaber haben Ihnen eine schriftliche, eindeutige Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier gilt: Man kann nie zu vorsichtig sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN unter der [CC-BY-SA Lizenz](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation) lizenziert. Das bedeutet, dass Sie uns ordnungsgemäß [zitieren müssen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Websites wann immer möglich über HTTPS bereitstellen:

1. HTTPS verringert die Chance, dass Remote-Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen, und umgekehrt.

Das HTTPS-fähig machen Ihrer Seite erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie eine eigene Einrichtung vornehmen müssen, um ein Zertifikat zu installieren. Aber wenn Sie HTTPS-Unterstützung für Ihre Seite selbst einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen, die Sie verwenden können, um das notwendige Zertifikat automatisch zu erstellen und zu installieren — mit integriertem Support für die am häufigsten verwendeten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Das Let's Encrypt-Tooling ist so gestaltet, dass es den Prozess so einfach wie möglich macht, sodass es wirklich keinen guten Grund gibt, es nicht zu verwenden oder andere verfügbare Mittel zu nutzen, um Ihre Seite HTTPS-fähig zu machen.

> [!NOTE] > [GitHub pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) lassen Inhalte standardmäßig über HTTPS bereitstellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung er für das Bereitstellen von Inhalten mit HTTPS bietet.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig wie möglich Macht geben, um schlechte Dinge auf Ihrer Website zu tun, daher sollten Sie eingebetteten Inhalten nur die Berechtigungen geben, die für die Erledigung ihrer Aufgaben benötigt werden. Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen genutzt werden kann — oder für Tests — aber dem Rest der Codebasis keinen Schaden zufügen kann (entweder versehentlich oder bösartig) wird als [Sandbox](<https://de.wikipedia.org/wiki/Sandbox_(Computersicherheit)>) bezeichnet.

Inhalte, die nicht sandboxed sind, können möglicherweise JavaScript ausführen, Formulare absenden, Popup-Fenster öffnen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen durch Verwendung des `sandbox`-Attributs ohne Parameter auferlegen, wie in unserem vorherigen Beispiel gezeigt.

Falls absolut erforderlich, können Sie Schritt für Schritt Berechtigungen wieder hinzufügen (im Wert des `sandbox=""`-Attributs) — sehen Sie die [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen. Eine wichtige Anmerkung ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die [Same-origin policy](/de/docs/Glossar/Same-origin_policy) umgehen, die Sites daran hindert, Skripte auszuführen, und JavaScript verwenden, um das Sandboxing vollständig abzuschalten.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen dazu bringen können, bösartige Inhalte direkt (außerhalb eines `iframe`) zu besuchen. Wenn die Möglichkeit besteht, dass bestimmte Inhalte schädlich sein könnten (z.B. benutzergenerierte Inhalte), dann stellen Sie sie bitte über eine andere {{Glossary("domain", "Domain")}} als Ihre Hauptseite bereit.

#### Konfigurieren Sie CSP-Direktiven

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die der Sicherheit Ihres HTML-Dokuments verbessern. Um `<iframe>`s sicherer zu machen, können Sie _[Ihren Server so konfigurieren, dass er einen entsprechenden `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Webseiten Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Reihe anderer Angriffe ermöglichen würde), was genau das ist, was die MDN-Entwickler getan haben, wie wir zuvor gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Offensichtlich ist es über den Rahmen dieses Artikels hinauszugehen, um eine vollständige Erklärung zu liefern.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente dienen einer anderen Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Werkzeuge zur Einbettung von externen Inhalten, wie PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht sehr oft verwenden. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, darauf zu verlinken, statt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch genutzt, um Inhalte einzubetten, die von Browser-{{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} behandelt werden, aber diese Technologie ist jetzt obsolet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie sich in der Lage finden, Plugin-Inhalte einbetten zu müssen, benötigen Sie mindestens die folgenden Informationen:

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
        <em>Genauer </em>{{Glossary("MIME_type", "Media Type")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin gesteuerten Bereichs
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/embed#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/embed#width"><code>width</code></a>
      </td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/object#height"><code>height</code></a><br /><a href="/de/docs/Web/HTML/Reference/Elements/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>Unabhängige HTML-Inhalte als Fallback für eine nicht verfügbare Ressource</td>
      <td>Wird nicht unterstützt (<code>&#x3C;noembed></code> ist obsolet)</td>
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

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, aber sie stellen viele [Zugänglichkeitsprobleme](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie sind in einigen Kreisen immer noch beliebt, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir dennoch auf einige der fortgeschritteneren Funktionen der beteiligten Technologien hinweisen. Zunächst werden Sie Einbettungen wahrscheinlich nicht weit über das Einfügen von Drittanbieter-Inhalten wie Karten und Videos auf Ihren Seiten hinaus verwenden. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, abgesehen von denen, die wir hier besprochen haben. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} für die Einbettung von Vektorgrafiken.
