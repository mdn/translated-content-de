---
title: Vom Objekt zum iframe — Allgemeine Einbettungstechnologien
short-title: Embedding technologies
slug: Learn_web_development/Core/Structuring_content/General_embedding_technologies
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

Entwickler denken oft daran, Medien wie Bilder, Videos und Audio in Webseiten einzubetten. In diesem Artikel nehmen wir eine etwas seitliche Perspektive ein und betrachten einige Elemente, die es Ihnen ermöglichen, eine Vielzahl von Inhaltstypen in Ihre Webseiten einzubetten: die {{htmlelement("iframe")}}, {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente. `<iframe>` dient zum Einbetten anderer Webseiten, während die anderen beiden Ihnen erlauben, externe Ressourcen wie PDF-Dateien einzubetten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, grundlegendes Wissen über <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">den Umgang mit Dateien</a>, Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content/">HTML-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man Elemente wie PDF-Dokumente und andere Webseiten mit {{htmlelement("object")}}, {{htmlelement("embed")}} und {{htmlelement("iframe")}} in Webseiten einbettet.
      </td>
    </tr>
  </tbody>
</table>

## Eine kurze Geschichte der Einbettung

Vor langer Zeit war es im Web populär, **Frames** zu verwenden, um Webseiten zu erstellen — kleine Teile einer Website, die in einzelnen HTML-Seiten gespeichert waren. Diese wurden in ein Hauptdokument eingebettet, das als **Frameset** bezeichnet wird und Ihnen ermöglichte, den Bereich auf dem Bildschirm anzugeben, den jeder Frame ausfüllt, ähnlich wie beim Festlegen der Breite von Tabellenzeilen und -spalten. In den 90er Jahren galten diese als besonders modern, und es gab Hinweise darauf, dass eine Webseite, die in kleinere Abschnitte unterteilt war, besser für die Download-Geschwindigkeit war — insbesondere bemerkbar, da die Netzwerkverbindungen damals sehr langsam waren. Allerdings hatten sie viele Probleme, die die Vorteile bei schnelleren Netzwerkgeschwindigkeiten weit übertrafen, weshalb man sie heute kaum noch sieht.

Ein wenig später (Ende der 90er, Anfang der 2000er) wurden Plug-in-Technologien wie {{Glossary("Java", "Java Applets")}} und {{Glossary("Adobe_Flash", "Flash")}} sehr populär — diese ermöglichten es Webentwicklern, reichhaltige Inhalte wie Videos und Animationen in Webseiten einzubetten, die allein in HTML nicht verfügbar waren. Diese Technologien wurden über Elemente wie {{htmlelement("object")}} und das weniger genutzte {{htmlelement("embed")}} eingebettet und waren damals sehr nützlich. Sie sind seitdem aus der Mode gekommen aufgrund vieler Probleme, einschließlich Zugänglichkeit, Sicherheit, Dateigröße und mehr. Heutzutage haben große Browser die Unterstützung für Plugins wie Flash eingestellt.

Schließlich erschien das {{htmlelement("iframe")}} Element (zusammen mit anderen Möglichkeiten, Inhalte einzubetten, wie {{htmlelement("canvas")}}, {{htmlelement("video")}} etc.), das es ermöglicht, ein vollständiges Webdokument in ein anderes einzubetten, als ob es ein {{htmlelement("img")}} oder ein anderes ähnliches Element wäre und wird heute regelmäßig verwendet.

Mit dem Geschichtsunterricht abgeschlossen, fahren wir fort und sehen, wie man einige dieser Elemente verwendet.

## Aktives Lernen: klassische Einbettungsanwendungen

In diesem Artikel springen wir direkt in einen aktiven Lernabschnitt, um Ihnen sofort eine echte Vorstellung davon zu geben, wofür Einbettungstechnologien nützlich sind. Die Online-Welt ist sehr vertraut mit [YouTube](https://www.youtube.com/), aber viele Menschen kennen einige der angebotenen Freigabemöglichkeiten nicht. Lassen Sie uns betrachten, wie YouTube es uns ermöglicht, ein Video auf einer beliebigen Seite, die wir mögen, mit einem {{htmlelement("iframe")}} einzubetten.

1. Gehen Sie zuerst zu YouTube und finden Sie ein Video, das Ihnen gefällt.
2. Unter dem Video finden Sie einen _Teilen_-Button — wählen Sie diesen aus, um die Freigabe-Optionen anzuzeigen.
3. Wählen Sie den _Einbetten_-Button, und Ihnen wird etwas `<iframe>`-Code angezeigt — kopieren Sie diesen.
4. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie sich das Ergebnis im _Ausgabefeld_ an.

Für Bonuspunkte könnten Sie auch versuchen, eine [Google-Karte](https://www.google.com/maps/) im Beispiel einzubetten:

1. Gehen Sie zu Google Maps und finden Sie eine Karte, die Ihnen gefällt.
2. Klicken Sie auf das „Hamburger-Menü“ (drei horizontale Linien) oben links in der Benutzeroberfläche.
3. Wählen Sie die Option _Karte teilen oder einbetten_.
4. Wählen Sie die Option Karte einbetten, die Ihnen etwas `<iframe>`-Code liefert — kopieren Sie diesen.
5. Fügen Sie ihn in das _Eingabefeld_ unten ein und sehen Sie sich das Ergebnis im _Ausgabefeld_ an.

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

Das war einfach und hat Spaß gemacht, oder? {{htmlelement("iframe")}} Elemente sind dazu gedacht, dass Sie andere Webdokumente in das aktuelle Dokument einbetten können. Dies ist großartig für die Einbindung von Drittanbieter-Inhalten in Ihre Website, über die Sie möglicherweise keine direkte Kontrolle haben und die Sie nicht selbst implementieren möchten — wie beispielsweise Videos von Online-Videoanbietern, Kommentarsysteme wie [Disqus](https://disqus.com/), Karten von Online-Kartenanbietern, Werbebanner usw. Sogar die Live-beispielhafte Schreibweise, die Sie in diesem Kurs verwendet haben, ist unter Verwendung von `<iframe>`s implementiert.

Bevor Sie sich mit der Verwendung von `<iframe>`-Elementen befassen, gibt es einige Sicherheitsbedenken, die Sie beachten sollten. Angenommen, Sie möchten das MDN Glossar auf einer Ihrer Webseiten mit dem {{htmlelement("iframe")}}-Element einfügen, Sie könnten etwas wie das nächste Codebeispiel versuchen. Wenn Sie den untenstehenden Code in eine Ihrer Seiten einfügen, könnten Sie überrascht sein, statt der Glossarseite eine Fehlermeldung zu sehen:

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

Der [Sicherheits](#sicherheitsbedenken)-Abschnitt unten geht näher darauf ein, warum Sie diesen Fehler sehen, aber zuerst, lassen Sie uns ansehen, was unser Code tut.

Das Beispiel enthält das Wesentliche, was Sie zur Verwendung eines `<iframe>` benötigen:

- [`border: none`](/de/docs/Web/CSS/border)
  - : Wird verwendet, um das `<iframe>` ohne einen umgebenden Rahmen anzuzeigen. Andernfalls wird das `<iframe>` standardmäßig mit einem umgebenden Rahmen angezeigt (was im Allgemeinen unerwünscht ist).
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
  - : Wenn gesetzt, kann das `<iframe>` im Vollbildmodus mithilfe der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) platziert werden (ein Aspekt, der etwas über den Umfang dieses Artikels hinausgeht).
- [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)
  - : Dieses Attribut enthält, wie bei {{htmlelement("video")}}/{{htmlelement("img")}}, einen Pfad, der auf die URL des einzubettenden Dokuments zeigt.
- [`width`](/de/docs/Web/HTML/Reference/Elements/iframe#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/iframe#height)
  - : Diese Attribute geben die Breite und Höhe an, die Sie für das iframe möchten.
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)
  - : Dieses Attribut, das in etwas moderneren Browsern als den anderen `<iframe>`-Funktionen funktioniert (z. B. IE 10 und höher), fordert erhöhte Sicherheitseinstellungen an; wir werden im nächsten Abschnitt mehr darüber sagen.

> [!NOTE]
> Um die Geschwindigkeit zu verbessern, ist es eine gute Idee, das `src`-Attribut des iframes mit JavaScript festzulegen, nachdem der Hauptinhalt geladen wurde. Dies macht Ihre Seite schneller nutzbar und verringert Ihre offizielle Seitenladezeit (ein wichtiges {{Glossary("SEO", "SEO")}}-Metrik).

### Sicherheitsbedenken

Oben haben wir Sicherheitsbedenken erwähnt — lassen Sie uns jetzt etwas detaillierter darauf eingehen. Wir erwarten nicht, dass Sie all diesen Inhalt sofort beim ersten Mal perfekt verstehen; wir möchten Sie nur auf diesen Aspekt aufmerksam machen und Ihnen eine Referenz bieten, zu der Sie zurückkehren können, wenn Sie erfahrener werden und beginnen, `<iframe>`s in Ihren Experimenten und Arbeiten zu erwägen. Außerdem besteht kein Grund, Angst zu haben und `<iframe>`s nicht zu verwenden — man muss nur vorsichtig sein. Lesen Sie weiter...

Browsermacher und Webentwickler haben schmerzlich gelernt, dass iframes ein häufiges Ziel (offizieller Begriff: **Angriffsvektor**) für Hacker oder genauer gesagt **Cracker** im Web sind, wenn sie versuchen, Ihre Webseite böswillig zu ändern oder Menschen dazu zu bringen, etwas zu tun, was sie nicht möchten, wie zum Beispiel sensible Informationen wie Benutzernamen und Passwörter preiszugeben. Aus diesem Grund haben Spezifikationsingenieure und Browserentwickler verschiedene Sicherheitsmechanismen entwickelt, um `<iframe>`s sicherer zu machen, und es gibt auch Best Practices, die man in Betracht ziehen sollte — wir werden einige dieser unten behandeln.

> **Hinweis:** [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist eine Art häufiger iframe-Angriff, bei dem Hacker ein unsichtbares iframe in Ihr Dokument einfügen (oder Ihr Dokument in ihre eigene bösartige Website einbetten) und es verwenden, um die Interaktionen der Benutzer zu erfassen. Dies ist eine gängige Methode, um Benutzer zu täuschen oder sensible Daten zu stehlen.

Ein schnelles Beispiel zuerst — versuchen Sie, das vorherigen Beispiel, das wir oben gezeigt haben, in Ihren Browser zu laden — Sie können es [live auf GitHub finden](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) an). Statt der erwarteten Seite sehen Sie wahrscheinlich eine Nachricht wie „Ich kann diese Seite nicht öffnen“, und wenn Sie in die _Konsole_ in den [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) schauen, sehen Sie eine Nachricht, die Ihnen erklärt, warum. In Firefox erhalten Sie eine Benachrichtigung wie _Das Laden von "https\://developer.mozilla.org/de/docs/Glossary" in einem Frame wird durch die "X-Frame-Options"-Richtlinie, die auf "DENY" gesetzt ist, verweigert_. Dies liegt daran, dass die Entwickler, die MDN gebaut haben, eine Einstellung auf dem Server eingebaut haben, der die Webseite-Seiten liefert, die verhindert, dass sie in `<iframe>`s eingebettet werden (siehe [CSP-Direktiven konfigurieren](#konfigurieren_sie_csp-direktiven), unten). Das ergibt Sinn — eine komplette MDN-Seite macht wirklich keinen Sinn, in andere Seiten eingebettet zu werden, es sei denn, man möchte etwas machen wie sie auf seiner eigenen Website einzubetten und als seine eigenen auszugeben — oder Daten über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu stehlen, was beides wirklich schlechte Dinge sind. Außerdem würde es, wenn jeder anfangen würde, dies zu tun, all das zusätzliche Bandwidth Mozilla eine Menge Geld kosten.

#### Nur einbetten, wenn nötig

Manchmal ergibt es Sinn Drittanbieter-Inhalte einzubetten — wie YouTube-Videos und Karten — aber Sie können sich viele Kopfschmerzen ersparen, wenn Sie Drittanbieter-Inhalte nur dann einbetten, wenn es unbedingt erforderlich ist. Eine gute Regel für Websicherheit ist _"Man kann nie zu vorsichtig sein. Wenn Sie es gemacht haben, überprüfen Sie es trotzdem noch einmal. Wenn es jemand anderes gemacht hat, gehen Sie davon aus, dass es gefährlich ist, bis das Gegenteil bewiesen ist."_

Neben der Sicherheit sollten Sie sich auch der Probleme mit geistigem Eigentum bewusst sein. Die meisten Inhalte sind urheberrechtlich geschützt, offline und online, auch solche Inhalte, die Sie möglicherweise nicht erwarten (zum Beispiel die meisten Bilder auf [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Zeigen Sie niemals Inhalte auf Ihrer Webseite an, es sei denn, Sie besitzen sie oder die Eigentümer haben Ihnen eine schriftliche, eindeutige Erlaubnis gegeben. Die Strafen für Urheberrechtsverletzungen sind streng. Auch hier kann man nie zu vorsichtig sein.

Wenn der Inhalt lizenziert ist, müssen Sie die Lizenzbedingungen einhalten. Der Inhalt auf MDN ist zum Beispiel unter [CC-BY-SA lizenziert](/de/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation). Das bedeutet, Sie müssen [uns ordnungsgemäß gutschreiben](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution), wenn Sie unsere Inhalte zitieren, selbst wenn Sie wesentliche Änderungen vornehmen.

#### Verwenden Sie HTTPS

{{Glossary("HTTPS", "HTTPS")}} ist die verschlüsselte Version von {{Glossary("HTTP", "HTTP")}}. Sie sollten Ihre Webseiten wann immer möglich mit HTTPS bereitstellen:

1. HTTPS reduziert die Wahrscheinlichkeit, dass entfernte Inhalte während der Übertragung manipuliert wurden.
2. HTTPS verhindert, dass eingebettete Inhalte auf Inhalte in Ihrem übergeordneten Dokument zugreifen können und umgekehrt.

Eine HTTPS-fähige Bereitstellung Ihrer Website erfordert ein spezielles Sicherheitszertifikat, das installiert werden muss. Viele Hosting-Anbieter bieten eine HTTPS-fähige Bereitstellung, ohne dass Sie etwas einrichten müssen, um ein Zertifikat in Kraft zu setzen. Wenn Sie jedoch _selbst_ HTTPS-Unterstützung für Ihre Website einrichten müssen, bietet [Let's Encrypt](https://letsencrypt.org/) Tools und Anweisungen an, die Sie verwenden können, um das notwendige Zertifikat automatisch zu erstellen und zu installieren — mit integrierter Unterstützung für die am weitesten verbreiteten Webserver, einschließlich des Apache-Webservers, Nginx und anderen. Die Tools von Let's Encrypt sind darauf ausgelegt, den Prozess so einfach wie möglich zu gestalten, sodass es wirklich keinen guten Grund gibt, sie oder andere verfügbare Mittel zur HTTPS-Aktivierung Ihrer Website nicht zu nutzen.

> **Hinweis:** [GitHub Seiten](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) erlauben standardmäßig das Bereitstellen von Inhalten über HTTPS.
> Wenn Sie einen anderen Hosting-Anbieter verwenden, sollten Sie prüfen, welche Unterstützung sie für das Bereitstellen von Inhalten über HTTPS bieten.

#### Verwenden Sie immer das `sandbox`-Attribut

Sie möchten Angreifern möglichst wenig Macht geben, um schlechte Dinge auf Ihrer Webseite zu tun, daher sollten Sie eingebetteten Inhalten _nur die Berechtigungen geben, die sie für ihre Aufgabe benötigen._ Natürlich gilt dies auch für Ihre eigenen Inhalte. Ein Container für Code, in dem er angemessen verwendet werden kann — oder zum Testen — aber keinen Schaden am Rest des Codebasises anrichten kann (entweder versehentlich oder bösartig) wird als [Sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>) bezeichnet.

Inhalte, die nicht in einer Sandbox sind, können möglicherweise JavaScript ausführen, Formulare senden, Popup-Fenster auslösen usw. Standardmäßig sollten Sie alle verfügbaren Einschränkungen anwenden, indem Sie das `sandbox`-Attribut ohne Parameter verwenden, wie in unserem vorherigen Beispiel gezeigt.

Wenn absolut erforderlich, können Sie Berechtigungen einzeln hinzufügen (innerhalb des `sandbox=""`-Attributwertes) — siehe den [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Referenzeintrag für alle verfügbaren Optionen. Ein wichtiger Hinweis ist, dass Sie _niemals_ sowohl `allow-scripts` als auch `allow-same-origin` zu Ihrem `sandbox`-Attribut hinzufügen sollten — in diesem Fall könnte der eingebettete Inhalt die {{Glossary("Same-origin_policy", "Same-origin policy")}}, die Websites daran hindert, Skripte auszuführen, umgehen und JavaScript verwenden, um die Sandbox ganz zu deaktivieren.

> [!NOTE]
> Sandboxing bietet keinen Schutz, wenn Angreifer Menschen dazu bringen können, bösartigen Inhalt direkt zu besuchen (außerhalb eines `iframe`). Wenn die Möglichkeit besteht, dass bestimmte Inhalte bösartig sein könnten (z. B. benutzergenerierte Inhalte), dienen Sie sie bitte von einer anderen {{Glossary("domain", "Domain")}} als Ihrer Hauptsite.

#### Konfigurieren Sie CSP-Direktiven

{{Glossary("CSP", "CSP")}} steht für **[Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)** und bietet [eine Reihe von HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) (Metadaten, die zusammen mit Ihren Webseiten gesendet werden, wenn sie von einem Webserver ausgeliefert werden), die entworfen wurden, um die Sicherheit Ihres HTML-Dokuments zu verbessern. Wenn es darum geht, `<iframe>`s abzusichern, können Sie _[Ihren Server so konfigurieren, dass er einen geeigneten „X-Frame-Options“-Header sendet.](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)_ Dies kann verhindern, dass andere Websites Ihre Inhalte in ihren Webseiten einbetten (was [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und eine Vielzahl anderer Angriffe ermöglichen würde), was genau das ist, was die Entwickler von MDN getan haben, wie wir oben gesehen haben.

> [!NOTE]
> Sie können Frederik Brauns Beitrag [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) lesen, um weitere Hintergrundinformationen zu diesem Thema zu erhalten. Offensichtlich ist es weit außerhalb des Rahmens einer vollständigen Erklärung in diesem Artikel.

## Die \<embed> und `<object>` Elemente

Die {{htmlelement("embed")}} und {{htmlelement("object")}} Elemente erfüllen eine andere Funktion als das {{htmlelement("iframe")}} — diese Elemente sind allgemeine Einbettungstools zum Einbetten externer Inhalte wie PDFs.

Allerdings werden Sie diese Elemente wahrscheinlich nicht sehr häufig verwenden. Wenn Sie PDFs anzeigen müssen, ist es normalerweise besser, auf sie zu verlinken, anstatt sie in die Seite einzubetten.

Historisch wurden diese Elemente auch zum Einbetten von Inhalten verwendet, die von Browser-{{Glossary("Plugin", "Plugins")}} wie {{Glossary("Adobe_Flash", "Adobe Flash")}} behandelt werden, aber diese Technologie ist jetzt veraltet und wird von modernen Browsern nicht mehr unterstützt.

Sollten Sie einmal das Bedürfnis haben, Plugin-Inhalte einzubetten, ist dies die Art von Informationen, die Sie mindestens benötigen:

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
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#src"><code>src</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        <em>Genauer</em> {{Glossary("MIME_type", "Medientyp")}} der eingebetteten Inhalte
      </td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/embed#type"><code>type</code></a></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        Höhe und Breite (in CSS-Pixeln) des vom Plugin kontrollierten Rahmens
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
      <td>Nicht unterstützt (<code>&#x3C;noembed></code> ist veraltet)</td>
      <td>
        Im öffnenden und schließenden
        <code>&#x3C;object></code>-Tag enthalten
      </td>
    </tr>
  </tbody>
</table>

Lassen Sie uns ein `<object>`-Beispiel betrachten, das ein PDF in eine Seite einbettet (siehe das [Live-Beispiel](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="my-pdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="my-pdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDFs waren ein notwendiger Zwischenschritt zwischen Papier und Digitalem, aber sie stellen viele [Zugänglichkeitsherausforderungen](https://webaim.org/techniques/acrobat/acrobat) dar und können auf kleinen Bildschirmen schwer lesbar sein. Sie sind in manchen Kreisen immer noch beliebt, aber es ist viel besser, auf sie zu verlinken, damit sie heruntergeladen oder auf einer separaten Seite gelesen werden können, anstatt sie in eine Webseite einzubetten.

## Zusammenfassung

Das Thema des Einbettens anderer Inhalte in Webdokumente kann schnell sehr komplex werden, daher haben wir in diesem Artikel versucht, es auf einfache, vertraute Weise einzuführen, die sofort relevant erscheint, während wir trotzdem auf einige der fortschrittlicheren Funktionen der beteiligten Technologien hinweisen. Zunächst einmal werden Sie wahrscheinlich die Einbettung nicht für viel mehr als das Einfügen von Drittanbieter-Inhalten wie Karten und Videos auf Ihren Seiten verwenden. Wenn Sie jedoch mehr Erfahrung sammeln, werden Sie mit der Zeit wahrscheinlich mehr Verwendungsmöglichkeiten dafür finden.

Es gibt viele andere Technologien, die das Einbetten externer Inhalte betreffen, neben den hier behandelten. Wir haben einige in früheren Artikeln gesehen, wie {{htmlelement("video")}}, {{htmlelement("audio")}}, und {{htmlelement("img")}}, aber es gibt noch weitere zu entdecken, wie {{htmlelement("canvas")}} für JavaScript-generierte 2D- und 3D-Grafiken und {{SVGElement("svg")}} zum Einbetten von Vektorgrafiken.
