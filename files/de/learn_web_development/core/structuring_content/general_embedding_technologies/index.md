---
title: Von Objekt zu iframe — allgemeine Einbettungstechnologien
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Entwickler denken häufig an das Einbetten von Medien wie Bildern, Videos und Audio in Webseiten. In diesem Artikel machen wir einen etwas seitlichen Schritt und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>`s dienen dazu, andere Webseiten einzubetten, und die anderen beiden ermöglichen es Ihnen, externe Ressourcen wie PDF-Dateien einzubetten.

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
        Lernen, wie man Objekte wie PDF-Dokumente und andere Webseiten mit
        {{htmlelement("object")}}, {{htmlelement("embed")}} und
        {{htmlelement("iframe")}} in die Webseiten einbettet.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit war es im Web populär, **Frames** zum Erstellen von Webseiten zu verwenden – kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert waren. Diese wurden in ein Masterdokument eingebettet, das **Frameset** genannt wurde und es Ihnen ermöglichte, den Bereich auf dem Bildschirm zu spezifizieren, den jeder Frame ausfüllte, ähnlich der Größenanpassung der Spalten und Zeilen einer Tabelle. Sie galten als das Höchste der Coolness in den mittleren bis späten 90er Jahren, und es gab Hinweise darauf, dass das Aufteilen einer Webseite in kleinere Abschnitte wie dieser die Download-Geschwindigkeit verbesserte – besonders bemerkbar mit den damals langsamen Netzwerkverbindungen. Sie hatten jedoch viele Probleme, die jegliche Vorteile bei steigenden Netzgeschwindigkeiten überwogen, weshalb sie nicht mehr verwendet werden.

Ein wenig später (späte 90er, frühe 2000er) wurden Plug-in-Technologien wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr populär – diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die allein durch HTML nicht verfügbar waren. Diese Technologien wurden mithilfe von Elementen wie {{htmlelement("object")}} und dem weniger verwendeten {{htmlelement("embed")}} eingebettet und waren zu dieser Zeit sehr nützlich. Sie sind inzwischen aufgrund vieler Probleme wie Zugänglichkeit, Sicherheit, Dateigröße und mehr aus der Mode gekommen. Heute haben große Browser die Unterstützung für Plugins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}}-Element (zusammen mit anderen Möglichkeiten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}}, usw.). Es bietet eine Möglichkeit, ein gesamtes Webdokument in ein anderes einzubetten, als wäre es ein {{htmlelement("img")}} oder ein ähnliches Element, und wird heute regelmäßig verwendet.

Mit der Geschichtsstunde aus dem Weg, lassen Sie uns fortfahren und sehen, wie einige dieser Techniken verwendet werden können.

## Aktives Lernen: klassische Einbettungsanwendungen

In diesem Artikel springen wir direkt in einen aktiven Lernabschnitt, um Ihnen sofort eine echte Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen kennen nicht einige der Freigabefunktionen, die es bietet. Schauen wir uns an, wie YouTube es uns erlaubt, ein Video in jede beliebige Seite einzubetten, die wir mögen, mit einem {{htmlelement("iframe")}}.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_ Button - wählen Sie diesen aus, um die Freigabeoptionen anzuzeigen.
3. Wählen Sie den _Einbetten_ Button und Sie erhalten etwas `<iframe>`-Code – kopieren Sie diesen.
4. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie, was das Ergebnis im _Ausgabefeld_ ist.

Für zusätzliche Punkte könnten Sie auch versuchen, eine [Google Map](https://www.google.com/maps/) in das Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie in der oberen linken Ecke der Benutzeroberfläche auf das "Hamburgermenü" (drei horizontale Linien).
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Option Karte einbetten, wodurch Sie einige `<iframe>`-Codes erhalten – kopieren Sie diesen.
5. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie, was das Ergebnis im _Ausgabefeld_ ist.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit dem _Reset_-Button zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie den _Lösung anzeigen_-Button, um eine Antwort zu sehen.

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

Das war einfach und spaßig, oder? {{htmlelement("iframe")}} Elemente sind dafür gedacht, andere Webdokumente in das aktuelle Dokument einzubetten. Das ist großartig, um Drittanbieter-Inhalte in Ihre Website zu integrieren, über die Sie möglicherweise keine direkte Kontrolle haben und deren Implementierung Sie nicht selbst umsetzen müssen – wie Video von Online-Videoprovidern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartanbietern, Werbebanner usw. Selbst die live-editierbaren Beispiele, die Sie während dieses Kurses verwendet haben, werden mit `<iframe>`s implementiert.

Bevor Sie `<iframe>`-Elemente verwenden, gibt es einige Sicherheitsbedenken, die Sie beachten sollten.
Angenommen, Sie wollten das MDN-Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einfügen, könnten Sie etwas wie das folgende Codebeispiel versuchen.
Wenn Sie den untenstehenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, stattdessen eine Fehlermeldung anstelle der Glossar-Seite zu sehen:

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

Wenn Sie einen Blick auf die Konsole Ihres Browsers werfen, sehen Sie eine Fehlermeldung wie die folgende:

```plain
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

Der [Sicherheits](#sicherheitsbedenken) Abschnitt unten erklärt detaillierter, warum Sie diese Fehlermeldung sehen, aber zunächst sehen wir uns an, was unser Code tut.

Das Beispiel enthält die wesentlichen Dinge, die man für die Verwendung eines `<iframe>` benötigt:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wenn verwendet, wird das `<iframe>` ohne umlaufenden Rahmen angezeigt. Andernfalls zeigen Browser das `<iframe>` standardmäßig mit einem umlaufenden Rahmen an (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwendet werden (etwas über den Rahmen dieses Artikels hinausgehend).
- [`src`](/de/docs/Web/HTML/Element/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Element/iframe#width) und [`height`](/de/docs/Web/HTML/Element/iframe#height)
  - : Diese Attribute spezifizieren die Breite und Höhe, die das iframe haben soll.
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als der Rest der `<iframe>`-Features funktioniert (z.B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir sagen mehr dazu im nächsten Abschnitt.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript zu setzen, nachdem der Hauptinhalt geladen ist. Dies macht Ihre Seite schneller nutzbar und verkürzt Ihre offizielle Ladezeit der Seite (eine wichtige {{Glossary("SEO", "SEO")}}-Metrik).

### Sicherheitsbedenken

Oben erwähnten wir Sicherheitsbedenken — lassen Sie uns jetzt ein wenig mehr ins Detail gehen. Wir erwarten nicht, dass Sie all diesen Inhalt beim ersten Mal perfekt verstehen; wir möchten Sie lediglich auf dieses Problem aufmerksam machen und eine Referenz bereitstellen, zu der Sie zurückkehren können, wenn Sie erfahrener werden und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten in Betracht zu ziehen. Es gibt keinen Grund, `<iframe>`s nicht zu verwenden — Sie müssen nur vorsichtig sein. Lesen Sie weiter…

Browserhersteller und Webentwickler haben auf die harte Tour gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für schlechte Akteure im Web sind (oft als **Hacker** bezeichnet, genauer als **Cracker**), wenn sie versuchen, Ihre Webseite böswillig zu ändern oder Leute dazu zu verleiten, etwas zu tun, das sie nicht tun wollen, z.B. sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch bewährte Praktiken, die berücksichtigt werden müssen — einige davon werden wir unten behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art häufiger iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einbetten (oder Ihr Dokument in ihre eigene böswillige Website einbetten) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine gängige Methode, Benutzer in die Irre zu führen oder sensible Daten zu stehlen.

Ein kurzes Beispiel zuerst — versuchen Sie, das vorherige Beispiel, das wir oben gezeigt haben, in Ihrem Browser zu laden — Sie können es [live auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ansehen ([sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ebenfalls.) Anstelle der erwarteten Seite sehen Sie wahrscheinlich eine Art von Meldung "Ich kann diese Seite nicht öffnen", und wenn Sie sich die _Konsole_ in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ansehen, sehen Sie eine Nachricht, die Ihnen sagt, warum. In Firefox sehen Sie etwas wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options"-Richtlinie abgelehnt, die auf "DENY" gesetzt ist_. Dies liegt daran, dass die Entwickler von MDN eine Einstellung auf dem Server, der die Webseiten bereitstellt, hinzugefügt haben, um zu verhindern, dass sie in `<iframe>`s eingebettet werden (siehe [CSP-Richtlinien konfigurieren](#konfigurieren_sie_csp-richtlinien), unten). Das macht Sinn — eine gesamte MDN-Seite macht nicht wirklich Sinn, in andere Seiten eingebettet zu werden, es sei denn, Sie möchten sie in Ihre Seite einbetten und als Ihre eigene ausgeben — oder versuchen, Daten durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem würde, wenn jeder das anfangen würde, all die zusätzliche Bandbreite Mozilla eine Menge Geld kosten.

#### Nur einbetten, wenn nötig

Manchmal macht es Sinn, Inhalte von Drittanbietern einzubetten – wie YouTube-Videos und Karten – aber Sie können sich viel Ärger ersparen, wenn Sie Inhalte von Drittanbietern nur dann einbetten, wenn es absolut notwendig ist. Eine gute Regel für Web-Sicherheit ist _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es doppelt. Wenn es jemand anderes gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Abgesehen von Sicherheitsaspekten sollten Sie sich auch der Probleme mit dem geistigen Eigentum bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, selbst Inhalte, die Sie vielleicht nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind schwerwiegend. Auch hier kann man nie zu vorsichtig sein.

Wenn die Inhalte lizenziert sind, müssen Sie die Lizenzbedingungen einhalten. Zum Beispiel sind die Inhalte auf MDN [lizenziert unter CC-BY-SA](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, dass Sie [uns ordnungsgemäß nennen müssen](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Websites nach Möglichkeit über HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass remote Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen und umgekehrt.

Das Aktivieren von HTTPS auf Ihrer Seite erfordert ein spezielles Sicherheitszertifikat. Viele Hosting-Anbieter bieten HTTPS-fähiges Hosting an, ohne dass Sie selbst ein Zertifikat installieren müssen. Wenn Sie jedoch _selbst_ die HTTPS-Unterstützung für Ihre Seite einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anleitungen zum automatischen Erstellen und Installieren des erforderlichen Zertifikats — mit eingebauter Unterstützung für die am meisten verwendeten Webserver, einschließlich des Apache-Webservers, Nginx und anderer. Die Let's Encrypt-Werkzeuge sind so konzipiert, dass sie den Prozess so einfach wie möglich machen, sodass es keinen guten Grund gibt, es nicht zu nutzen oder andere verfügbare Mittel zu verwenden, um Ihre Website HTTPS-fähig zu machen.

> **Hinweis:** [GitHub Pages](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben es, Inhalte standardmäßig über HTTPS bereitzustellen.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie dessen Unterstützung für die Bereitstellung von Inhalten über HTTPS überprüfen.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern so wenig Macht wie möglich geben, um auf Ihrer Website Schaden anzurichten, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die benötigt werden, um ihre Aufgabe zu erfüllen._ Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder zum Testen — aber keinen Schaden im Rest des Codebasis anrichten kann (entweder versehentlich oder böswillig), wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht gesandet wurden, können möglicherweise JavaScript ausführen, Formulare übermitteln, Popup-Fenster öffnen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen durch einfaches Hinzufügen des `sandbox`-Attributs ohne Parameter auferlegen, wie in unserem vorherigen Beispiel gezeigt.

Wenn unbedingt erforderlich, können Sie Berechtigungen einzeln wieder hinzufügen (im Wert des `sandbox=""` Attributs) — siehe die [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Referenzeintrag für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox` Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-Origin-Policy")}} umgehen, die Sites daran hindert, Skripte auszuführen, und JavaScript verwenden, um das Sandboxing vollständig zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Leute dazu bringen können, bösartige Inhalte direkt (außerhalb eines `iframe`) zu besuchen. Wenn die Möglichkeit besteht, dass bestimmte Inhalte schädlich sind (z.B. benutzergenerierte Inhalte), stellen Sie diese bitte von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptseite bereit.

#### Konfigurieren Sie CSP-Richtlinien

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/CSP)** und stellt [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Headers/Content-Security-Policy) zur Verfügung (Metadaten, die zusammen mit Ihren Webseiten geliefert werden, wenn sie von einem Webserver bereitgestellt werden), die dazu gedacht sind, die Sicherheit Ihres HTML-Dokuments zu verbessern. Um `<iframe>`s zu sichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten `X-Frame-Options`-Header sendet.](/de/docs/Web/HTTP/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihre Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Reihe anderer Angriffe ermöglichen würde), was genau das ist, was die Entwickler von MDN getan haben, wie wir früher gesehen haben.

> [!NOTE]
> Sie können Frederic Brauns Beitrag [Über die X-Frame-Options-Sicherheitsheader](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) für weitere Hintergrundinformationen zu diesem Thema lesen. Natürlich ist dies für eine vollständige Erklärung in diesem Artikel etwas außerhalb des Geltungsbereichs.

## Die \<embed>- und `<object>`-Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente dienen einem anderen Zweck als {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungswerkzeuge zum Einbinden externer Inhalte wie PDFs.

Sie werden diese Elemente jedoch wahrscheinlich nicht sehr häufig verwenden. Wenn Sie PDFs anzeigen müssen, ist es in der Regel besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-Plugins wie {{Glossary("Adobe_Flash", "Adobe Flash")}} verarbeitet werden, aber diese Technologie ist jetzt veraltet und wird von modernen Browsern nicht unterstützt.

Wenn Sie feststellen, dass Sie Inhalte aus Plugins einbetten müssen, sind dies die Informationen, die Sie mindestens benötigen:

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
        <em>Genauer </em>{{Glossary("MIME_type", "Medientyp")}}
        des eingebetteten Inhalts
      </td>
      <td><a href="/de/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin kontrollierten Kästchens
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

Sehen wir uns ein `<object>`-Beispiel an, das ein PDF in eine Seite einbettet (sehen Sie sich das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) an):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digital, aber sie stellen viele [Barrierefreiheitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer zu lesen sein. Sie tendieren immer noch dazu, in einigen Kreisen beliebt zu sein, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf eine einfache, vertraute Weise vorzustellen, die sofort relevant erscheint, während dennoch einige der fortschrittlicheren Funktionen der beteiligten Technologien angedeutet werden. Zu Beginn werden Sie wahrscheinlich Einbettungen nur dazu verwenden, Drittanbieter-Inhalte wie Karten und Videos in Ihren Seiten zu integrieren. Mit zunehmender Erfahrung werden Sie jedoch wahrscheinlich weitere Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte beinhalten, neben denen, die wir hier besprochen haben. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch andere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken.
