---
title: Welche HTML-Funktionen fördern die Barrierefreiheit?
slug: Learn/Common_questions/Design_and_accessibility/HTML_features_for_accessibility
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Der folgende Inhalt beschreibt spezifische Funktionen von HTML, die verwendet werden sollten, um eine Webseite zugänglicher für Menschen mit verschiedenen Behinderungen zu gestalten.

## Linktext

Wenn Sie einen Link haben, der nicht selbsterklärend ist, oder das Ziel des Links von einer detaillierteren Erklärung profitieren könnte, können Sie einem Link mit den Attributen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Informationen hinzufügen.

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

## Skip Links

Um das Navigieren per Tab-Taste zu erleichtern, können Sie einen [Skip Link](/de/docs/Web/HTML/Element/a#skip_links) bereitstellen, der es den Benutzern ermöglicht, über Teile Ihrer Webseite zu springen. Sie könnten jemandem erlauben, über eine Vielzahl von Navigationslinks zu springen, die auf jeder Seite zu finden sind. Dies ermöglicht es Tastaturnutzern, schnell über wiederkehrende Inhalte zu springen und direkt zum Hauptinhalt der Seite zu gelangen:

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

Jedes Bild sollte ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut haben. Wenn das Bild reine Dekoration ist und dem Inhalt oder dem Kontext des Dokuments keine Bedeutung hinzufügt, sollte das `alt`-Attribut vorhanden, aber leer sein. Sie können optional auch [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) hinzufügen. Alle anderen Bilder sollten ein `alt`-Attribut enthalten, das eine [alternative Beschreibung des Bildes](/de/docs/Web/API/HTMLImageElement/alt#usage_notes) bietet, die für Benutzer hilfreich ist, die den restlichen Inhalt lesen können, das Bild jedoch nicht sehen können. Überlegen Sie, wie Sie das Bild jemandem beschreiben würden, der Ihr Bild nicht laden kann: Diese Informationen sollten Sie als Wert des `alt`-Attributs einfügen.

```html
<!-- decorative image -->
<img alt="" src="blueswish.png" role="presentation" />
<img
  alt="The Open Web Docs logo: Carle the book worm smiling"
  src="carle.svg"
  role="img" />
```

Das `alt`-Attribut für denselben Inhalt kann je nach Kontext variieren. Im folgenden Beispiel wird ein animiertes GIF anstelle einer Fortschrittsanzeige verwendet, um den Ladefortschritt einer Seite zu zeigen, die Entwicklern beibringt, wie sie das HTML-Element [`<progress>`](/de/docs/Web/HTML/Element/progress) verwenden:

```html
<img alt="20% complete" src="load-progress.gif" />
<img
  alt="The progress bar is a thick green square to the left of the thumb and a thin grey line to the right. The thumb is a circle with a diameter the height of the green area."
  src="screenshot-progressbar.png" />
```

## ARIA-Rollenattribut

Standardmäßig haben alle semantischen Elemente in HTML eine [`role`](/de/docs/Web/Accessibility/ARIA/Roles); zum Beispiel hat `<input type="radio">` die Rolle `radio`. Nicht-semantische Elemente in HTML haben keine Rolle. ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die in HTML nicht nativ existieren, wie beispielsweise ein [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)-Widget. Rollen sind auch für neuere Elemente hilfreich, die existieren, aber noch keine volle Browser-Unterstützung haben. Beispielsweise sollten bei der Verwendung von SVG-Bildern `role="img"` am Anfangstag hinzugefügt werden, da es einen [SVG VoiceOver-Bug](https://webkit.org/b/216364) gibt, bei dem VoiceOver SVG-Bilder nicht korrekt ankündigt.

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```
