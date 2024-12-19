---
title: Welche HTML-Features fördern die Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/HTML_features_for_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Der folgende Inhalt beschreibt spezifische HTML-Funktionen, die verwendet werden sollten, um eine Webseite für Menschen mit unterschiedlichen Behinderungen zugänglicher zu machen.

## Linktext

Wenn Sie einen Link haben, der nicht selbsterklärend ist, oder das Linkziel von einer detaillierteren Erklärung profitieren könnte, können Sie Informationen zu einem Link hinzufügen, indem Sie die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden.

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

Beachten Sie, dass es in den meisten Fällen besser ist, stattdessen einen nützlichen Linktext zu schreiben:

```html
<p>
  I wrote a
  <a href="capable.html">blog post about how good I am at writing link text</a>.
</p>
```

## Links überspringen

Um das Tabben zu erleichtern, können Sie einen [Link überspringen](/de/docs/Web/HTML/Element/a#skip_links) bereitstellen, der es Benutzern ermöglicht, über Teile Ihrer Webseite zu springen. Sie möchten vielleicht jemandem erlauben, über eine Fülle von Navigationslinks zu springen, die auf jeder Seite zu finden sind. Dies ermöglicht es Tastaturbenutzern, schnell wiederholte Inhalte zu überspringen und direkt zum Hauptinhalt der Seite zu gelangen:

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

Jedes Bild sollte ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut haben. Wenn das Bild rein dekorativ ist und dem Inhalt oder Kontext des Dokuments keine Bedeutung hinzufügt, sollte das `alt`-Attribut vorhanden, aber leer sein. Sie können optional auch [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) hinzufügen. Alle anderen Bilder sollten ein `alt`-Attribut enthalten, das [alternativen Text, der das Bild beschreibt](/de/docs/Web/API/HTMLImageElement/alt#usage_notes), in einer Weise bereitstellt, die nützlich für Benutzer ist, die den restlichen Inhalt lesen können, aber das Bild nicht sehen können. Überlegen Sie, wie Sie das Bild jemandem beschreiben würden, der Ihr Bild nicht laden kann: Diese Informationen sollten Sie als Wert des `alt`-Attributs einschließen.

```html
<!-- decorative image -->
<img alt="" src="blueswish.png" role="presentation" />
<img
  alt="The Open Web Docs logo: Carle the book worm smiling"
  src="carle.svg"
  role="img" />
```

Das `alt`-Attribut für denselben Inhalt kann je nach Kontext variieren. Im folgenden Beispiel wird statt einer Fortschrittsleiste ein animiertes GIF verwendet, um den Ladefortschritt einer Seite für ein Dokument zu zeigen, das Entwicklern beibringt, wie sie das HTML-Element [`<progress>`](/de/docs/Web/HTML/Element/progress) verwenden:

```html
<img alt="20% complete" src="load-progress.gif" />
<img
  alt="The progress bar is a thick green square to the left of the thumb and a thin grey line to the right. The thumb is a circle with a diameter the height of the green area."
  src="screenshot-progressbar.png" />
```

## ARIA-Rollenattribut

Standardmäßig haben alle semantischen Elemente in HTML eine [`role`](/de/docs/Web/Accessibility/ARIA/Roles); zum Beispiel hat `<input type="radio">` die Rolle `radio`. Nicht-semantische Elemente in HTML haben keine Rolle. ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die nicht nativ in HTML existieren, wie z. B. ein [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)-Widget. Rollen sind auch hilfreich für neuere Elemente, die existieren, aber noch keine volle Browser-Unterstützung haben. Zum Beispiel sollten Sie bei der Verwendung von SVG-Bildern `role="img"` zum öffnenden Tag hinzufügen, da es einen [SVG VoiceOver Fehler](https://webkit.org/b/216364) gibt, bei dem VoiceOver SVG-Bilder nicht korrekt ankündigt.

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```
