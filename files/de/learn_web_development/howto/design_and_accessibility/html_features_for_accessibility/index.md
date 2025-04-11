---
title: Welche HTML-Funktionen fördern die Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/HTML_features_for_accessibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Der folgende Inhalt beschreibt spezifische Funktionen von HTML, die verwendet werden sollten, um eine Webseite für Menschen mit unterschiedlichen Behinderungen zugänglicher zu machen.

## Linktext

Wenn Sie einen Link haben, der nicht selbsterklärend ist, oder das Ziel des Links von einer detaillierteren Erklärung profitieren könnte, können Sie einem Link Informationen mit den Attributen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) hinzufügen.

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

Beachten Sie, dass es in den meisten Fällen besser ist, stattdessen aussagekräftige Linktexte zu schreiben:

```html
<p>
  I wrote a
  <a href="capable.html">blog post about how good I am at writing link text</a>.
</p>
```

## Überspringbare Links

Um das Tabben zu erleichtern, können Sie einen [überspringbaren Link](/de/docs/Web/HTML/Reference/Elements/a#skip_links) bereitstellen, der es den Nutzern ermöglicht, über Teile Ihrer Webseite hinwegzuspringen. Sie möchten vielleicht jemanden in die Lage versetzen, über eine Vielzahl von Navigationslinks hinwegzuspringen, die auf jeder Seite zu finden sind. Dies ermöglicht es Tastaturnutzern, schnell über wiederholte Inhalte zu tabben und direkt zum Hauptinhalt der Seite zu gelangen:

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

Jedes Bild sollte ein [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut haben. Wenn das Bild rein dekorativ ist und dem Inhalt oder Kontext des Dokuments keine Bedeutung hinzufügt, sollte das `alt`-Attribut vorhanden, aber leer sein. Optional können Sie auch [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) hinzufügen. Alle anderen Bilder sollten ein `alt`-Attribut enthalten, das [alternativen Text, der das Bild beschreibt](/de/docs/Web/API/HTMLImageElement/alt#usage_notes), in einer Weise bereitstellt, die für Benutzer hilfreich ist, die den Rest des Inhalts lesen, das Bild jedoch nicht sehen können. Denken Sie darüber nach, wie Sie das Bild jemandem beschreiben würden, der Ihr Bild nicht laden kann: Diese Informationen sollten Sie als Wert des `alt`-Attributes einfügen.

```html
<!-- decorative image -->
<img alt="" src="blueswish.png" role="presentation" />
<img
  alt="The Open Web Docs logo: Carle the book worm smiling"
  src="carle.svg"
  role="img" />
```

Das `alt`-Attribut für denselben Inhalt kann je nach Kontext variieren. Im folgenden Beispiel wird ein animiertes GIF anstelle eines Fortschrittsbalkens verwendet, um den Ladefortschritt der Seite für ein Dokument zu zeigen, das Entwicklern beibringt, wie das HTML-Element [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress) zu verwenden ist:

```html
<img alt="20% complete" src="load-progress.gif" />
<img
  alt="The progress bar is a thick green square to the left of the thumb and a thin grey line to the right. The thumb is a circle with a diameter the height of the green area."
  src="screenshot-progressbar.png" />
```

## ARIA role-Attribut

Standardmäßig haben alle semantischen Elemente in HTML eine [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles); zum Beispiel hat `<input type="radio">` die Rolle `radio`. Nicht-semantische Elemente in HTML haben keine Rolle. ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die in HTML nicht nativ existieren, wie z.B. ein [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)-Widget. Rollen sind auch hilfreich für neuere Elemente, die existieren, aber noch keine vollständige Browser-Unterstützung haben. Zum Beispiel, wenn SVG-Bilder verwendet werden, fügen Sie `role="img"` zum öffnenden Tag hinzu, da es einen [SVG VoiceOver-Bug](https://webkit.org/b/216364) gibt, bei dem VoiceOver SVG-Bilder nicht korrekt ankündigt.

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```
