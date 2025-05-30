---
title: Vom Objekt zum Iframe — allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

Entwickler denken häufig daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel gehen wir einen etwas anderen Weg und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen dem Einbetten anderer Webseiten, während die anderen beiden es ermöglichen, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/"
          >HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Elemente in Webseiten einbettet, wie z. B. PDF-Dokumente und andere Webseiten, mithilfe von
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}}.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte des Einbettens

Vor langer Zeit im Web war es populär, **Frames** zu verwenden, um Websites zu erstellen — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert sind. Diese wurden in ein Master-Dokument eingebettet, das als **Frameset** bezeichnet wurde, und das es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame ausfüllte, ähnlich dem Größen der Spalten und Zeilen einer Tabelle. Diese galten Mitte bis Ende der 90er Jahre als äußerst schick, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Teile wie diese die Download-Geschwindigkeit verbesserte — besonders spürbar bei den damals sehr langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die die Vorteile bei weitem überwogen, als die Netzwerkgeschwindigkeiten schneller wurden, sodass Sie sie heute nicht mehr in Verwendung sehen.

Ein wenig später (Ende der 90er, Anfang der 2000er Jahre) wurden Plugin-Technologien sehr populär, wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}}. Diese ermöglichten es Webentwicklern, reichhaltige Inhalte in Webseiten einzubetten, wie Videos und Animationen, die nur mit HTML nicht verfügbar waren. Das Einbetten dieser Technologien wurde durch Elemente wie {{htmlelement("object")}} erreicht, und das weniger häufig verwendete {{htmlelement("embed")}}, und sie waren zu ihrer Zeit sehr nützlich. Seitdem sind sie aufgrund vieler Probleme, einschließlich Barrierefreiheit, Sicherheit, Dateigröße und mehr, aus der Mode gekommen. Heute haben die großen Browser die Unterstützung für Plugins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}} Element (zusammen mit anderen Wegen, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, usw.). Dies bietet eine Möglichkeit, ein ganzes Webdokument in ein anderes einzubetten, als ob es ein {{htmlelement("img")}} oder ein anderes solches Element wäre, und wird heute regelmäßig verwendet.

Nachdem nun der Geschichtsunterricht abgeschlossen ist, lasst uns weitermachen und sehen, wie man einige dieser Techniken anwendet.

## Aktives Lernen: klassische Einbettungsverwendungen

In diesem Artikel springen wir direkt in einen Abschnitt zum aktiven Lernen, um Ihnen sofort eine echte Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen wissen nicht über einige der verfügbaren Freigabefunktionen Bescheid. Sehen wir uns an, wie YouTube es uns ermöglicht, ein Video in jede beliebige Seite einzubetten, die wir möchten, indem wir ein {{htmlelement("iframe")}} verwenden.

1. Gehen Sie zuerst zu YouTube und suchen Sie sich ein Video aus, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_ Button — wählen Sie diesen aus, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie den _Einbetten_ Button aus und Sie erhalten etwas `<iframe>` Code — kopieren Sie diesen.
4. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie sich das Ergebnis im _Output_ an.

Für Bonuspunkte können Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) in das Beispiel einzubetten:

1. Gehen Sie zu Google Maps und suchen Sie sich eine Karte aus, die Ihnen gefällt.
2. Klicken Sie auf das "Hamburger-Menü" (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Einbettungsoption für die Karte, die Ihnen etwas `<iframe>` Code gibt — kopieren Sie diesen.
5. Fügen Sie ihn in das _Input_-Feld unten ein und sehen Sie sich das Ergebnis im _Output_ an.

Wenn Sie einen Fehler machen, können Sie immer die Reset-Taste benutzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die Show Solution-Taste, um eine Antwort zu sehen.

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

Das war also einfach und unterhaltsam, oder? {{htmlelement("iframe")}} Elemente sind dafür gedacht, um andere Webdokumente in das aktuelle Dokument einzubetten. Dies ist großartig für die Einbindung von Drittanbieterinhalten in Ihre Website, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren müssen — wie Video von Online-Videodiensten, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Sogar die bearbeitbaren Beispiele, die Sie während dieses Kurses verwendet haben, werden mithilfe von `<iframe>`s implementiert.

Bevor Sie mit der Verwendung von `<iframe>` Elementen beginnen, gibt es einige Sicherheitsbedenken, die berücksichtigt werden müssen. Angenommen, Sie möchten das MDN-Glossar auf einer Ihrer Webseiten über das {{htmlelement("iframe")}} Element einbinden, könnten Sie etwas wie das folgende Codebeispiel ausprobieren. Wenn Sie den folgenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, statt der Glossarseite eine Fehlermeldung zu sehen:

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

Der Abschnitt [Sicherheitsbedenken](#sicherheitsbedenken) unten erklärt ausführlicher, warum Sie diese Fehlermeldung sehen, aber zuerst schauen wir uns an, was unser Code macht.

Das Beispiel enthält das Nötigste, um ein `<iframe>` zu verwenden:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn es verwendet wird, wird das `<iframe>` ohne umlaufenden Rahmen angezeigt. Andernfalls zeigen Browser standardmäßig das `<iframe>` mit einem umlaufenden Rahmen an (was in der Regel unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus angezeigt werden, indem die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwendet wird (etwas außerhalb des Umfangs dieses Artikels).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält einen Pfad, der auf die URL des einzubettenden Dokuments zeigt, ebenso wie {{htmlelement("video")}}/{{htmlelement("img")}}.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die das iframe haben soll.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als die übrigen `<iframe>`-Funktionen funktioniert (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr dazu sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dies macht Ihre Seite schneller nutzbar und verkürzt die offiziell gemessene Ladezeit der Seite (ein wichtiger {{Glossary("SEO", "SEO")}} Faktor).

### Sicherheitsbedenken

Oben erwähnten wir Sicherheitsbedenken — gehen wir jetzt ein wenig detaillierter darauf ein. Wir erwarten nicht, dass Sie all diese Inhalte beim ersten Mal perfekt verstehen; wir möchten Sie nur auf diese Sorge aufmerksam machen und eine Referenz bieten, auf die Sie zurückkommen können, wenn Sie erfahrener werden und anfangen, `<iframe>`s in Ihren Experimenten und Arbeiten zu verwenden. Auch gibt es keinen Grund zur Panik und `<iframe>`s nicht zu benutzen — Sie müssen nur vorsichtig sein. Lesen Sie weiter…

Browser-Hersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für schlechte Menschen im Web sind (oft als **Hacker** bezeichnet, oder genauer als **Cracker**), um anzugreifen, wenn sie versuchen, Ihre Webseite böswillig zu verändern oder Menschen dazu zu bewegen, etwas zu tun, was sie nicht tun wollen, wie z.B. sensible Informationen preiszugeben, wie Benutzernamen und Passwörter. Aufgrund dessen haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch Best Practices, die berücksichtigt werden sollten — wir werden auf einige davon unten eingehen.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art von häufigem iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene bösartige Website) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine häufige Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) an). Anstelle der erwarteten Seite sehen Sie wahrscheinlich eine Art von Meldung mit dem Effekt "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, sehen Sie eine Meldung, die Ihnen erklärt, warum. In Firefox wird Ihnen etwas in der Art von _The loading of "https\://developer.mozilla.org/de/docs/Glossary" in a frame is denied by "X-Frame-Options" directive set to "DENY"_ mitgeteilt. Dies liegt daran, dass die Entwickler, die MDN erstellt haben, eine Einstellung auf dem Server enthalten haben, der die Webseiten bereitstellt, um sie daran zu hindern, in `<iframe>`s eingebettet zu werden (siehe [Konfigurieren der CSP-Richtlinien](#konfigurieren_sie_csp-richtlinien), unten). Das macht Sinn — eine ganze MDN-Seite macht kaum Sinn, in andere Seiten eingebettet zu werden, es sei denn, man möchte sie zum Beispiel auf Ihrer Seite einbetten und als Ihre eigene ausgeben — oder versuchen, Daten durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides sehr schlechte Dinge sind. Außerdem, wenn jeder anfängt, dies zu tun, würden die zusätzlichen Bandbreitenkosten Mozilla eine Menge Geld kosten.

#### Nur dann einbetten, wenn es notwendig ist

Manchmal macht es Sinn, Drittanbieterinhalte einzubetten — wie YouTube-Videos und Karten —, aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Drittanbieterinhalte nur dann einbetten, wenn es völlig notwendig ist. Eine gute Regel für Websicherheit ist _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es trotzdem doppelt. Wenn es jemand anderes gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Probleme mit dem geistigen Eigentum bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, selbst Inhalte, die Sie möglicherweise nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Besitzer haben Ihnen eine schriftliche, eindeutige Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier gilt: Man kann nie zu vorsichtig sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [lizenziert unter CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie uns [ordnungsgemäß anerkennen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) müssen, wenn Sie unsere Inhalte zitieren, auch wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich über HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass entfernte Inhalte bei der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte Zugriff auf Inhalte in Ihrem übergeordneten Dokument haben, und umgekehrt.

Das Aktivieren von HTTPS für Ihre Website erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat einrichten müssen. Wenn Sie jedoch _selbst_ HTTPS-Unterstützung für Ihre Website einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anweisungen, die Sie verwenden können, um das benötigte Zertifikat automatisch zu erstellen und zu installieren — mit integrierter Unterstützung für die am weitesten verbreiteten Webserver, darunter Apache-Webserver, Nginx und andere. Die Let's Encrypt-Tools sind darauf ausgelegt, den Prozess so einfach wie möglich zu gestalten, sodass es wirklich keinen guten Grund gibt, sie oder andere verfügbare Mittel nicht zu verwenden, um Ihre Website mit HTTPS zu aktivieren.

> **Hinweis:** [GitHub-Seiten](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) ermöglichen es, Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie überprüfen, welche Unterstützung sie für das Bereitstellen von Inhalten mit HTTPS bieten.

#### Verwenden Sie immer das `sandbox` Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um schlechte Dinge auf Ihrer Website zu tun, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die für ihre Aufgabe erforderlich sind._ Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder zum Testen —, aber keinen Schaden im Rest des Codes verursachen kann (entweder zufällig oder böswillig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht in einer Sandbox sind, können möglicherweise JavaScript ausführen, Formulare einreichen, Popup-Fenster starten usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen durch die Verwendung des `sandbox` Attributs ohne Parameter auferlegen, wie in unserem vorherigen Beispiel gezeigt.

Falls unbedingt erforderlich, können Sie Berechtigungen eine nach der anderen wieder hinzufügen (innerhalb des `sandbox=""` Attributwertes) — siehe den Eintrag zur [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Referenz für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox` Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-origin policy")}}, die Skriptausführungen von Websites verhindert, umgehen und JavaScript verwenden, um die Sandbox komplett zu deaktivieren.

> [!NOTE]
> Sandbox-Methoden bieten keinen Schutz, wenn Angreifer Menschen dazu täuschen können, schädliche Inhalte direkt zu besuchen (außerhalb eines `iframe`). Wenn die Möglichkeit besteht, dass bestimmte Inhalte schädlich sein könnten (z.B. nutzergenerierte Inhalte), verwenden Sie bitte eine andere {{Glossary("domain", "Domain")}} als Ihre Hauptseite, um sie bereitzustellen.

#### Konfigurieren Sie CSP-Richtlinien

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver bereitgestellt werden), die dazu entwickelt wurden, die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es darum geht, `<iframe>`s abzusichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options` Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl anderer Angriffe ermöglichen würde), was genau das ist, was die Entwickler von MDN getan haben, wie wir vorhin gesehen haben.

> [!NOTE]
> Sie können Frederick Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) lesen, um weitere Hintergrundinformationen zu diesem Thema zu erhalten. Natürlich ist dies ziemlich außerhalb des Umfangs einer vollständigen Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente dienen einer anderen Funktion als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungswerkzeuge, um externe Inhalte einzubetten, wie z. B. PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht sehr häufig verwenden. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch gesehen wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser {{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet werden. Diese Technologie ist jedoch inzwischen obsolet und wird von modernen Browsern nicht mehr unterstützt.

Wenn Sie feststellen, dass Sie Plugin-Inhalte einbetten müssen, benötigen Sie mindestens die folgende Art von Informationen:

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
      <td>Unabhängiger HTML-Inhalt als Fallback für eine nicht verfügbare Ressource</td>
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist obsolet)</td>
      <td>
        Dabei stehen die enthaltenen Inhalte zwischen den öffnenden und schließenden
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

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und digital, aber sie stellen viele [Barrierefreiheitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) und können schwer auf kleinen Bildschirmen lesbar sein. Sie sind in einigen Kreisen nach wie vor beliebt, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden. Deshalb haben wir in diesem Artikel versucht, es auf eine einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während immer noch auf einige der fortgeschrittenen Funktionen der beteiligten Technologien hingewiesen wird. Zu Beginn werden Sie das Einbetten wahrscheinlich nicht für viel mehr als das Einbeziehen von Drittanbieterinhalten wie Karten und Videos auf Ihren Seiten verwenden. Wenn Sie jedoch erfahrener werden, werden Sie wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten von externen Inhalten beinhalten, abgesehen von denen, die wir hier besprochen haben. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}} und {{htmlelement("img")}}, aber es gibt andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken, und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken.
