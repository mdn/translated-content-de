---
title: "`:muted` CSS-Pseudoklasse"
short-title: :muted
slug: Web/CSS/Reference/Selectors/:muted
l10n:
  sourceCommit: d1aa0dbd7441564e6ce8f6706c2022a2e1912d8c
---

Der **`:muted`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)-Selektor repräsentiert ein Element, das in der Lage ist, Ton zu erzeugen, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, aber stummgeschaltet ist (erzwungene Stummschaltung).

Stummgeschaltet unterscheidet sich von {{cssxref(":volume-locked")}} darin, dass der Seitenautor die Kontrolle darüber hat, ob ein Medien-Element stummgeschaltet oder die Stummschaltung aufgehoben werden kann.
Benutzeragenten können den `muted`-Wert von Medien gemäß den Benutzereinstellungen setzen (z. B. indem sie den zuletzt gesetzten Wert über Sitzungen hinweg, pro Seite oder auf andere Weise merken).
Ein Element, das `:volume-locked` ist, kann aufgrund von Präferenzen des Betriebssystems oder des Benutzeragenten nicht stummgeschaltet, die Stummschaltung aufgehoben oder seine Lautstärke über JavaScript geändert werden.

## Syntax

```css
:muted {
  /* ... */
}
```

## Beispiele

### HTML

Das Attribut `muted` wird dem {{htmlelement("video")}}-Element hinzugefügt, sodass der Ton stummgeschaltet ist; dies funktioniert ebenso für {{htmlelement("audio")}}-Elemente.

```html
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video
  controls
  muted
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
  and watch it with your favorite video player!
</video>
```

### CSS

Wenn das `<video>`-Element `muted` ist, wird ein roter Umriss darum gezeichnet. Ist es nicht stummgeschaltet, hat es einen grünen Umriss. Versuchen Sie, das Stummschaltsymbol in den Steuerelementen umzuschalten, um den Statuswechsel zu sehen.

```css hidden
video {
  margin: 5px;
}
```

```css
video:muted {
  outline: 5px solid red;
}

video:not(:muted) {
  outline: 5px solid green;
}
```

{{EmbedLiveSample('examples', '', '400')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":buffering")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [`muted`](/de/docs/Web/API/HTMLMediaElement/muted)-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten
