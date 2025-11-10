---
title: Welche HTML-Funktionen fördern die Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/HTML_features_for_accessibility
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

Der folgende Inhalt beschreibt spezifische Funktionen von HTML, die verwendet werden sollten, um eine Webseite für Menschen mit unterschiedlichen Behinderungen zugänglicher zu machen.

## Link-Text

Wenn Sie einen Link haben, der nicht selbsterklärend ist, oder das Link-Ziel von einer detaillierteren Erklärung profitieren könnte, können Sie einem Link Informationen mithilfe der Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) hinzufügen.

```html
<p>
  I'm really bad at writing link text.
  <a
    href="inept.html"
    aria-label="Why I'm rubbish at writing link text: An explanation and an apology."
    >Click here</a
  >
  to find out more.
</p>
<p>
  I'm really <span id="incompetence">bad at writing link text</span>.
  <a href="inept.html" aria-labelledby="incompetence">Click here</a> to find out
  more.
</p>
```

Beachten Sie, dass es in den meisten Fällen besser ist, stattdessen einen nützlichen Link-Text zu schreiben:

```html
<p>
  I wrote a
  <a href="capable.html">blog post about how good I am at writing link text</a>.
</p>
```

## Skip-Links

Um das Tabben zu erleichtern, können Sie einen [Skip-Link](/de/docs/Web/HTML/Reference/Elements/a#skip_links) bereitstellen, der es Benutzern ermöglicht, große Teile Ihrer Webseite zu überspringen. Sie könnten beispielsweise jemanden ermöglichen, über eine Vielzahl von Navigationslinks zu springen, die auf jeder Seite zu finden sind. Dies ermöglicht Tastaturnutzern, schnell über sich wiederholende Inhalte zu tabben und direkt zum Hauptinhalt der Seite zu gelangen:

```html
<header>
  <h1>The Heading</h1>
  <a href="#content">Skip to content</a>
</header>

<nav>
  <!-- navigation stuff -->
</nav>

<section id="content">
  <!--your content -->
</section>
```

## Alt-Attribut für Bilder

Jedes Bild sollte ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut haben. Wenn das Bild nur Dekoration ist und keinen Sinn für den Inhalt oder Kontext des Dokuments hinzufügt, sollte das `alt`-Attribut vorhanden, aber leer sein. Optional können Sie auch [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) hinzufügen. Alle anderen Bilder sollten ein `alt`-Attribut enthalten, das [alternativen Text beschreibt, der das Bild beschreibt](/de/docs/Web/HTML/Reference/Elements/img#accessibility) auf eine Weise, die nützlich für Benutzer ist, die den restlichen Inhalt lesen, aber das Bild nicht sehen können. Denken Sie darüber nach, wie Sie das Bild jemandem beschreiben würden, der Ihr Bild nicht laden kann: Diese Information sollten Sie als Wert des `alt`-Attributs einfügen.

```html
<!-- decorative image -->
<img alt="" src="blueswish.png" role="presentation" />
<img
  alt="The Open Web Docs logo: Carle the book worm smiling"
  src="carle.svg"
  role="img" />
```

Das `alt`-Attribut kann je nach Kontext für denselben Inhalt variieren. Im folgenden Beispiel wird ein animiertes GIF anstelle eines Fortschrittbalkens verwendet, um den Ladefortschritt einer Seite für ein Dokument zu zeigen, das Entwicklern beibringt, wie sie das HTML-Element [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) verwenden:

```html
<img alt="20% complete" src="load-progress.gif" />
<img
  alt="The progress bar is a thick green square to the left of the thumb and a thin grey line to the right. The thumb is a circle with a diameter the height of the green area."
  src="screenshot-progressbar.png" />
```

## ARIA-Rollenattribut

Standardmäßig haben alle semantischen Elemente in HTML eine [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles); zum Beispiel hat `<input type="radio">` die Rolle `radio`. Nicht-semantische Elemente in HTML haben keine Rolle. ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die nicht nativ in HTML existieren, wie z. B. ein [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)-Widget. Rollen sind auch hilfreich für neuere Elemente, die existieren, aber noch keine vollständige Browserunterstützung haben. Beispielsweise sollte beim Verwenden von SVG-Bildern `role="img"` zum Eröffnungs-Tag hinzugefügt werden, da es einen [SVG-VoiceOver-Fehler](https://webkit.org/b/216364) gibt, bei dem VoiceOver SVG-Bilder nicht korrekt ansagt.

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```
