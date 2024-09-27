---
title: Welche HTML-Funktionen fördern die Barrierefreiheit?
slug: Learn/Common_questions/Design_and_accessibility/HTML_features_for_accessibility
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Der folgende Inhalt beschreibt spezifische Funktionen von HTML, die verwendet werden sollten, um eine Webseite für Menschen mit verschiedenen Behinderungen zugänglicher zu machen.

## Linktext

Wenn Sie einen Link haben, der nicht selbsterklärend ist, oder wenn das Linkziel von einer detaillierteren Erklärung profitieren könnte, können Sie einem Link Informationen mit den Attributen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) hinzufügen.

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

Beachten Sie, dass es in den meisten Fällen besser ist, stattdessen nützlichen Linktext zu schreiben:

```html
<p>
  I wrote a
  <a href="capable.html">blog post about how good I am at writing link text</a>.
</p>
```

## Sprunglinks

Um das Abtabben zu erleichtern, können Sie einen [Sprunglink](/de/docs/Web/HTML/Element/a#skip_links) bereitstellen, der es Nutzern ermöglicht, über Teile Ihrer Webseite zu springen. Sie könnten es ermöglichen, dass jemand über eine Vielzahl von Navigationslinks springt, die auf jeder Seite zu finden sind. Dies ermöglicht Tastaturnutzern, schnell über sich wiederholende Inhalte zu tabben und direkt zum Hauptinhalt der Seite zu gelangen:

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

Jedes Bild sollte ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut haben. Wenn das Bild rein dekorativ ist und keinen Bedeutungszusatz zum Inhalt oder Kontext des Dokuments liefert, sollte das `alt`-Attribut vorhanden, aber leer sein. Optional können Sie auch [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) hinzufügen. Alle anderen Bilder sollten ein `alt`-Attribut enthalten, das [Alternativtext beschreibt, der das Bild beschreibt](/de/docs/Web/API/HTMLImageElement/alt#usage_notes), und zwar auf eine Weise, die für Benutzer hilfreich ist, die den Rest des Inhalts lesen können, aber das Bild nicht sehen können. Überlegen Sie, wie Sie das Bild beschreiben würden für jemanden, der Ihr Bild nicht laden kann: Diese Informationen sollten Sie als Wert des `alt`-Attributs einschließen.

```html
<!-- decorative image -->
<img alt="" src="blueswish.png" role="presentation" />
<img
  alt="The Open Web Docs logo: Carle the book worm smiling"
  src="carle.svg"
  role="img" />
```

Das `alt`-Attribut für denselben Inhalt kann je nach Kontext variieren. Im folgenden Beispiel wird ein animiertes GIF anstelle eines Fortschrittsbalkens verwendet, um den Ladefortschritt einer Seite in einem Dokument anzuzeigen, das Entwickler lehrt, wie man das HTML-Element [`<progress>`](/de/docs/Web/HTML/Element/progress) verwendet:

```html
<img alt="20% complete" src="load-progress.gif" />
<img
  alt="The progress bar is a thick green square to the left of the thumb and a thin grey line to the right. The thumb is a circle with a diameter the height of the green area."
  src="screenshot-progressbar.png" />
```

## ARIA-Rollenattribut

Standardmäßig haben alle semantischen Elemente in HTML eine [`role`](/de/docs/Web/Accessibility/ARIA/Roles); zum Beispiel hat `<input type="radio">` die Rolle `radio`. Nicht-semantische Elemente in HTML haben keine Rolle. ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die nicht nativ in HTML existieren, wie ein [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) Widget. Rollen sind auch für neuere Elemente hilfreich, die es gibt, aber noch nicht über volle Browserunterstützung verfügen. Zum Beispiel sollte bei der Verwendung von SVG-Bildern `role="img"` zum Öffnungstag hinzugefügt werden, da es einen [SVG VoiceOver-Bug](https://webkit.org/b/216364) gibt, bei dem VoiceOver SVG-Bilder nicht korrekt ankündigt.

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```
