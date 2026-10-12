---
title: CSS-Animationen mit Scroll-Triggern verwenden
short-title: Animationen mit Scroll-Triggern
slug: Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

CSS-**Animationen mit Scroll-Triggern** bieten einen deklarativen Mechanismus, um eine auf der [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) basierende [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) eines Elements zu starten, anzuhalten, zu stoppen oder umzukehren, wenn der Benutzer dieses Element (oder ein anderes Element) zu einer bestimmten Position innerhalb eines Scrollports scrollt.

Dieser Artikel beschreibt, wie Sie CSS-Animationen mit Scroll-Triggern erstellen.

## Konzepte von Animationen mit Scroll-Triggern

Ein häufiges UI-Muster besteht darin, Animationen auf einer Webseite auszulösen, wenn der Benutzer zu einer bestimmten Stelle im Inhalt scrollt – beispielsweise um zusätzliche UI-Elemente einzublenden oder die Aufmerksamkeit auf bestimmte Details zu lenken.

Mit CSS-Animationen mit Scroll-Triggern können Sie scrollbasierte Trigger definieren, die reguläre zeitbasierte [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) starten und stoppen. Sie können Trigger-Positionen innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} festlegen. Erreicht ein überwachtes Element diese Positionen im Scrollport, ändern die Trigger den Wiedergabestatus einer Animation, die auf dieses oder ein völlig anderes Element angewendet wird.

> [!NOTE]
> Animationen mit Scroll-Triggern bieten eine Alternative zu JavaScript-Funktionen – etwa Frameworks oder der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) –, um beim Scrollen Animationen auszulösen. CSS-Animationen mit Scroll-Triggern sind leistungsfähiger und möglicherweise einfacher zu implementieren.

### Animationen mit Scroll-Triggern und scrollgesteuerte Animationen im Vergleich

Animationen mit Scroll-Triggern ähneln [scrollgesteuerten CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations), unterscheiden sich aber von ihnen:

- Animationen mit Scroll-Triggern sind reguläre zeitbasierte Animationen, die abgespielt werden, wenn ein Trigger aktiv wird. Bei jedem Start der Animation berücksichtigen sie {{cssxref("animation-delay")}} und schließen jede Wiederholung stets innerhalb der durch {{cssxref("animation-duration")}} festgelegten Zeit ab – unabhängig davon, wie schnell der Benutzer scrollt.
- Bei scrollgesteuerten Animationen wird die normale, zeitbasierte Animationstimeline durch eine scrollbasierte Timeline ersetzt. Dadurch läuft die Animation vorwärts beziehungsweise rückwärts, wenn Sie zum Anfang beziehungsweise Ende des Inhalts scrollen; schnelleres Scrollen führt zu einer schnelleren Animation. Scrollgesteuerte Animationen ignorieren die Eigenschaften `animation-duration` und `animation-delay`.

## Grundlagen von Animationen mit Scroll-Triggern

Sehen wir uns anhand eines einfachen Beispiels an, wie eine Animation mit Scroll-Trigger funktioniert. Eine Bildunterschrift wird ein- und ausgeblendet, wenn das zugehörige Bild in den sichtbaren Bereich beziehungsweise aus ihm heraus gescrollt wird. Dabei gilt:

- Für das {{htmlelement("figcaption")}}-Element ist eine {{cssxref("@keyframes")}}-Animation festgelegt: ein Einblendeffekt. Diese Animation ist die _ausgelöste Animation_.
- Als _Animationsaktionen_ legen wir fest, dass die Animation vorwärts abgespielt werden soll, wenn der Trigger _aktiviert_ wird, sodass die Bildunterschrift eingeblendet wird. Wenn der Trigger _deaktiviert_ wird, soll sie rückwärts abgespielt werden, sodass die Bildunterschrift ausgeblendet wird.
- Die _Animationstrigger_ werden auf dem `<img>`-Element definiert. Die Aktivierung wird ausgelöst, wenn das `<img>` in den Scrollport eintritt, und die Deaktivierung erfolgt, wenn das `<img>` den Scrollport vollständig verlässt. Damit ist der gesamte Scrollport der _Timeline-Bereich_, das `<img>` das _überwachte Element_ und das `<figcaption>` das animierte Element.
- Auf dem {{htmlelement("img")}}-Element legen wir eine mit der Funktion [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) erstellte [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) als _Trigger-Quelle_ fest.

Wenn der Inhalt nach oben und unten gescrollt wird, beginnt die Animation der Bildunterschrift, sobald das `<img>` im Scrollport erscheint. Verlässt das `<img>` den Scrollport, läuft die Animation rückwärts. Dieses einfache Beispiel erzielt noch nicht den gewünschten Effekt, ist aber ein guter Ausgangspunkt, den wir mit weiteren Funktionen verbessern können.

Das HTML enthält mehrere Textabsätze, zwischen denen ein {{htmlelement("figure")}}-Element mit dem `<img>` und dem `<figcaption>` steht. Der Kürze halber zeigen wir nicht den vollständigen Quelltext.

```html
...

<p>...</p>

<figure>
  <img
    src="jungle-coast.jpg"
    alt="A view across some trees towards a rocky coast" />
  <figcaption>A view of the Jungle coast</figcaption>
</figure>

<p>...</p>

...
```

```html hidden live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___play-once
<h1>Information about Cairns</h1>

<p>
  The countryside surrounding Cairns, located in eastern Australia, is a
  breathtakingly beautiful region characterized by diverse landscapes, lush
  greenery, and unique natural wonders.
</p>

<p>
  Nestled between the Great Dividing Range and the sparkling Coral Sea, this
  area offers a stunning blend of tropical rainforests, pristine beaches, and
  majestic mountain ranges.
</p>

<p>
  As you venture away from the city, you'll be greeted by the verdant
  rainforests of the Wet Tropics World Heritage Area. Towering ancient trees,
  vibrant ferns, and cascading waterfalls create a serene and magical
  atmosphere.
</p>
<p>
  Exploring the lush undergrowth, you may encounter unique wildlife such as
  colorful birds, tree-dwelling mammals, and rare reptiles. The sounds of
  chirping birds and rushing water add to the symphony of nature, providing an
  immersive experience in this captivating wilderness.
</p>

<p>
  Traveling further, you'll discover the Atherton Tablelands, a plateau renowned
  for its fertile farmlands, rolling hills, and picturesque lakes. This
  agricultural heartland is dotted with quaint rural towns and farms producing
  an array of fresh produce.
</p>
<p>
  Fields of sugar cane, banana plantations, and dairy farms stretch as far as
  the eye can see, creating a patchwork of vibrant green hues against the
  backdrop of distant mountains. The region is also famous for its waterfalls,
  such as Millaa Millaa Falls, where crystal-clear water tumbles down verdant
  cliffs, offering a refreshing retreat.
</p>

<figure>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
    alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
  <figcaption>A beautiful butterfly seen in the Jungle near Cairns</figcaption>
</figure>

<p>
  No visit to the countryside surrounding Cairns is complete without exploring
  the stunning beaches that line the Coral Sea. From Palm Cove to Mission Beach,
  the coastline is adorned with golden sands, swaying palm trees, and azure
  waters. These idyllic beaches provide the perfect setting for relaxation,
  swimming, and water sports.
</p>
<p>
  Snorkeling enthusiasts can also discover the wonders of the Great Barrier
  Reef, a UNESCO World Heritage Site, which lies just off the coast. This
  vibrant underwater ecosystem teems with an incredible diversity of marine
  life, including colorful coral formations, tropical fish, and sea turtles.
</p>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>
<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walshs Pyramid near Gordonvale.
</p>
```

Zunächst definieren wir mit {{cssxref("@keyframes")}} die Animation `fade-in`, die wir auf unser `<figcaption>` anwenden.

```css live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

```css hidden live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once
body {
  width: 80%;
  margin: 0 auto;
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
}

figure {
  display: block;
  margin: 0 auto;
  max-width: 60%;
  position: relative;
}

img {
  max-width: 100%;
  border: 3px solid black;
}

h1 {
  font-size: 3rem;
}

p {
  line-height: 1.5;
}

figcaption {
  font-size: 1rem;
  padding: 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  border: 3px solid black;
  background: white;
}
```

Der erste Deklarationsblock wendet die Animation, einen Animationstrigger und die Animationsaktionen auf das {{htmlelement("figcaption")}}-Element an:

1. Mit der Kurzschreibweise {{cssxref("animation")}} wenden wir die Animation `fade-in` auf `<figcaption>` an. Ohne Trigger würde das `<figcaption>` dadurch eingeblendet, sobald die Seite geladen wird.
2. Mit der Eigenschaft {{cssxref("animation-trigger")}} verzögern wir den Beginn der Animation, bis das {{htmlelement("img")}}-Element in den sichtbaren Bereich gescrollt wird. Dazu geben wir an, welches Element die Trigger bereitstellt und welche Aktionen diese Trigger ausführen. Der Wert der Eigenschaft `animation-trigger` setzt sich aus folgenden Komponenten zusammen:
   - Einem {{cssxref("dashed-ident")}}, `--t`, das als Wert der Eigenschaft {{cssxref("timeline-trigger-name")}} auf dem auslösenden Element festgelegt ist.
   - Zwei {{cssxref("&lt;animation-action>")}}-Werten, die bestimmen, wie sich die Animation bei Aktivierung und Deaktivierung des Triggers verhält (die [Animationsaktionen](#adjusting_the_animations_action)). Bei Aktivierung des Triggers legen wir fest, dass die Animation des `<figcaption>`-Elements vorwärts abgespielt wird. Bei Deaktivierung legen wir fest, dass sie rückwärts abgespielt wird.

```css live-sample___basic-scroll-triggered live-sample___adjust-range live-sample___set-active-range
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
}
```

Der zweite Deklarationsblock erstellt den Animationstrigger:

1. Mit der Eigenschaft `timeline-trigger-name` geben wir den auf dem `<img>`-Element erstellten Triggern einen identifizierenden Namen. Es handelt sich um denselben gestrichelten Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des `<figcaption>`-Elements verweist.
2. Mit der Eigenschaft {{cssxref("timeline-trigger-source")}} legen wir den Typ des Animationstriggers fest. Durch Angabe der Funktion [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) ist unser Triggertyp eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function). Ihr standardmäßiger [Aktivierungsbereich](#den_aktivierungsbereich_des_triggers_anpassen) entspricht dem [`cover`-Timeline-Bereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets).

```css live-sample___basic-scroll-triggered
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

Standardmäßig verfolgt die von der Funktion `view()` erstellte [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) die Position des `<img>`-Elements entlang der Blockachse des nächstgelegenen übergeordneten Scrollers. Das verfolgte Element – in diesem Fall das `<img>` – ist das **Subjekt** oder das **überwachte Element**.

Standardmäßig werden die Trigger aktiviert beziehungsweise deaktiviert, wenn das überwachte Element in Blockrichtung zum Anfang beziehungsweise Ende des Timeline-Bereichs gescrollt wird. Dadurch wird die Animation des `<figcaption>` vorwärts beziehungsweise rückwärts abgespielt. Die Aktivierung erfolgt, wenn das überwachte Element in den [**Aktivierungsbereich**](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) eintritt; die Deaktivierung erfolgt, wenn es den [**aktiven Bereich**](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) verlässt. Wenn `timeline-trigger-source` auf `view()` gesetzt ist, entsprechen sowohl der standardmäßige Aktivierungsbereich als auch der aktive Bereich `cover`. Dieser reicht vom Beginn des Eintritts der Anfangsrahmenkante des überwachten Elements in den Scrollport bis zum vollständigen Austritt seiner Endrahmenkante aus dem Scrollport.

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-scroll-triggered", "100%", 500)}}

Beachten Sie, dass die Bildunterschrift eingeblendet wird, sobald irgendein Teil des Bildes im Scrollport sichtbar wird – unabhängig davon, ob das Bild von unten oder oben hineingescrollt wird. Sie wird erst wieder ausgeblendet, wenn das gesamte Bild den Scrollport verlassen hat. Daher können Sie den Ausblendeffekt nicht sehen. Wenn Sie das Bild wieder in den sichtbaren Bereich scrollen, wird die Bildunterschrift erneut eingeblendet.

## Den Trigger auf demselben Element erstellen

Im vorherigen Beispiel wurde der Trigger auf dem `<img>`-Element definiert und das `<figcaption>` animiert. Es ist auch möglich, den Trigger auf dem animierten Element selbst zu definieren. Ändern wir das vorherige Beispiel so, dass der Trigger auf dem animierten {{htmlelement("figcaption")}}-Element erstellt wird.

Das HTML ist mit dem des vorherigen Beispiels identisch. Das CSS unterscheidet sich nur darin, auf welchem Element die `timeline-trigger-*`-Eigenschaften festgelegt sind.

Dieses Mal sind die Eigenschaften {{cssxref("animation")}}, {{cssxref("animation-trigger")}}, {{cssxref("timeline-trigger-name")}} und {{cssxref("timeline-trigger-source")}} alle auf dem `<figcaption>`-Element festgelegt – es wird animiert, wenn es im Scrollport erscheint. Im vorherigen Beispiel war das `<figcaption>` das animierte Element und das `<img>` das überwachte Element. Jetzt übernimmt die Bildunterschrift beide Rollen.

```css live-sample___same-element-trigger
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

Die aktualisierte Darstellung sieht so aus:

{{embedlivesample("same-element-trigger", "100%", 500)}}

In diesem Fall wird das `<figcaption>` eingeblendet, wenn es selbst – und nicht das Bild – erstmals in den Scrollport eintritt.

## Den Aktivierungsbereich des Triggers anpassen

In den vorherigen Beispielen wird der Trigger aktiviert (`fade-in` beginnt), sobald eine Blockkante des überwachten Elements an einer Seite in den Scrollport eintritt. Er wird deaktiviert (das Ausblenden beginnt: `fade-in` wird rückwärts abgespielt), wenn das überwachte Element den Scrollport an der gegenüberliegenden Seite vollständig verlassen hat. Daher ist das Ausblenden nie sichtbar. Der Grund dafür ist, dass bei Verwendung von `view()` als `timeline-trigger-source` sowohl der standardmäßige Aktivierungsbereich als auch der aktive Bereich (siehe {{cssxref("timeline-range-name")}}) `cover` sind.

Damit die Ausblendanimation sichtbar wird, können wir den Anfang und das Ende des Aktivierungsbereichs mit den Eigenschaften {{cssxref("timeline-trigger-activation-range-start")}} beziehungsweise {{cssxref("timeline-trigger-activation-range-end")}} verschieben. Alternativ können wir mit der Kurzschreibweise {{cssxref("timeline-trigger-activation-range")}} beide Werte in einer einzigen Deklaration festlegen. Jede dieser Eigenschaften akzeptiert die folgenden Werte:

- Den Standardwert `normal`.
- Einen {{cssxref("length-percentage")}}-Wert, der einen Punkt entlang des Standardbereichs angibt.
- Ein {{cssxref("timeline-range-name")}}-Schlüsselwort, das einen benannten Bereich angibt.
- Einen `timeline-range-name` zusammen mit einem `<length-percentage>`, um einen Punkt entlang des benannten Bereichs anzugeben.

Prozentangaben beziehen sich auf die Länge des `<timeline-range-name>`, der für unsere [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) zu `cover` aufgelöst wird. Hätten wir [`scroll()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) als {{cssxref("timeline-trigger-source")}} festgelegt, würde der standardmäßige `<timeline-range-name>` zu `scroll` aufgelöst. Unter [Namen von Timeline-Bereichen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) erfahren Sie mehr über die Werte für `<timeline-range-name>`.

Das folgende Beispiel aktiviert den Trigger bei `50%` des `entry`-Bereichs (wenn `50%` des überwachten Elements über eine der Blockkanten des Scrollports eingetreten sind) und deaktiviert ihn bei `0%` des `exit`-Bereichs (wenn `50%` des überwachten Elements die gegenüberliegende Blockkante des Scrollports verlassen haben).

```css
timeline-trigger-activation-range: entry 50% exit 0%;
```

Wenden wir dies auf unser erstes Beispiel an, damit Sie die Wirkung sehen können. Unser `img`-Deklarationsblock wird wie folgt geändert:

```css live-sample___adjust-range
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 0%;
}
```

Die aktualisierte Darstellung sieht so aus:

{{embedlivesample("adjust-range", "100%", 500)}}

Die Animation des `<figcaption>` ist nun etwas nützlicher: Das Einblenden beginnt erst, wenn ein erheblicher Teil des `<img>` an der Endkante des Scrollports eingetreten ist. Das Ausblenden beginnt, sobald das `<img>` anfängt, den Scrollport an dessen Anfangskante zu verlassen. Wenn Sie den Inhalt anschließend wieder nach unten scrollen, wird der Trigger erneut aktiviert und das Einblenden erfolgt wieder an der Anfangskante des Scrollports. Die Deaktivierung erfolgt erneut an dessen Endkante.

## Einen benutzerdefinierten aktiven Bereich festlegen

Der **aktive Bereich** ist der Bereich, innerhalb dessen ein Trigger nach seiner Aktivierung aktiviert bleibt. Standardmäßig entspricht der aktive Bereich dem Aktivierungsbereich. In den bisherigen Beispielen war der Bereich für Aktivierung und Deaktivierung daher derselbe.

Mit den Eigenschaften {{cssxref("timeline-trigger-active-range-start")}} und {{cssxref("timeline-trigger-active-range-end")}} können Sie einen aktiven Bereich festlegen, der sich vom Aktivierungsbereich unterscheidet. Alternativ können Sie mit der Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} beide Werte in einer einzigen Deklaration festlegen.

Das kann sinnvoll sein, um einer Animation mehr Zeit bis zu ihrem Abschluss zu geben – beispielsweise wenn der Animationstrigger nur innerhalb eines kleinen Bereichs aktiviert werden, aber über einen größeren Bereich aktiv bleiben soll. Erst wenn das überwachte Element den aktiven Bereich verlässt, wird der Trigger inaktiv. Danach können Sie ihn erneut aktivieren, indem Sie das Subjekt wieder in den Aktivierungsbereich bewegen.

Wir erweitern unsere bisherigen Beispiele, um die Wirkung des aktiven Bereichs zu zeigen. Das HTML bleibt gleich, mit einer Ausnahme: Wir haben zwei identische `<figure>`-Elemente mit den Klassen `.one` und `.two` eingefügt und sie mithilfe von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) nebeneinander angeordnet. So erscheinen und verschwinden sie gleichzeitig im sichtbaren Bereich. In beiden Fällen ist das `<img>` das überwachte Element für das animierte `<figcaption>` im selben `<figure>`-Element.

```html
<div class="figure-wrapper">
  <figure class="one">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>
</div>
```

```html hidden live-sample___set-active-range
<h1>Information about Cairns</h1>

<p>
  The countryside surrounding Cairns, located in eastern Australia, is a
  breathtakingly beautiful region characterized by diverse landscapes, lush
  greenery, and unique natural wonders.
</p>

<p>
  Nestled between the Great Dividing Range and the sparkling Coral Sea, this
  area offers a stunning blend of tropical rainforests, pristine beaches, and
  majestic mountain ranges.
</p>

<p>
  As you venture away from the city, you'll be greeted by the verdant
  rainforests of the Wet Tropics World Heritage Area. Towering ancient trees,
  vibrant ferns, and cascading waterfalls create a serene and magical
  atmosphere.
</p>
<p>
  Exploring the lush undergrowth, you may encounter unique wildlife such as
  colorful birds, tree-dwelling mammals, and rare reptiles. The sounds of
  chirping birds and rushing water add to the symphony of nature, providing an
  immersive experience in this captivating wilderness.
</p>

<p>
  Traveling further, you'll discover the Atherton Tablelands, a plateau renowned
  for its fertile farmlands, rolling hills, and picturesque lakes. This
  agricultural heartland is dotted with quaint rural towns and farms producing
  an array of fresh produce.
</p>
<p>
  Fields of sugar cane, banana plantations, and dairy farms stretch as far as
  the eye can see, creating a patchwork of vibrant green hues against the
  backdrop of distant mountains. The region is also famous for its waterfalls,
  such as Millaa Millaa Falls, where crystal-clear water tumbles down verdant
  cliffs, offering a refreshing retreat.
</p>

<div class="figure-wrapper">
  <figure class="one">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>
</div>

<p>
  No visit to the countryside surrounding Cairns is complete without exploring
  the stunning beaches that line the Coral Sea. From Palm Cove to Mission Beach,
  the coastline is adorned with golden sands, swaying palm trees, and azure
  waters. These idyllic beaches provide the perfect setting for relaxation,
  swimming, and water sports.
</p>
<p>
  Snorkeling enthusiasts can also discover the wonders of the Great Barrier
  Reef, a UNESCO World Heritage Site, which lies just off the coast. This
  vibrant underwater ecosystem teems with an incredible diversity of marine
  life, including colorful coral formations, tropical fish, and sea turtles.
</p>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>
<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walshs Pyramid near Gordonvale.
</p>
```

Wir wenden auf beide `<figcaption>`-Elemente dieselbe `animation` wie in den vorherigen Beispielen an. Die Werte ihrer `animation-trigger`-Eigenschaften verweisen jedoch auf zwei verschiedene `timeline-trigger-name`-Werte.

```css live-sample___set-active-range
figcaption {
  animation: fade-in 0.4s ease-in both;
}

.one figcaption {
  animation-trigger: --t1 play-forwards play-backwards;
}

.two figcaption {
  animation-trigger: --t2 play-forwards play-backwards;
}
```

Für beide `<img>`-Elemente legen wir dieselbe `timeline-trigger-source` und denselben `timeline-trigger-activation-range` fest. Der `timeline-trigger-name` jedes `<img>`-Elements entspricht einem der beiden unterschiedlichen gestrichelten Bezeichner aus dem vorherigen Codeblock. Dadurch dient der auf jedem `<img>` erstellte Trigger als Auslöser für die Animation seines zugehörigen `<figcaption>`.

Die Deklaration `timeline-trigger-activation-range: contain 40% contain 60%` bedeutet, dass der Trigger aktiviert wird – und damit die Animation beginnt –, wenn das überwachte Element einen schmalen Bereich in den mittleren `20%` des Scrollports erreicht. Er wird deaktiviert, wenn das Subjekt diesen schmalen Bereich verlässt.

Standardmäßig ist der Aktivierungsbereich mit dem aktiven Bereich identisch. Für das zweite `<img>` legen wir jedoch zusätzlich einen `timeline-trigger-active-range` von `entry 50% exit 100%` fest. Das bedeutet, dass das zweite `<figcaption>` nach dem Einblenden erst wieder ausgeblendet wird, wenn das zweite `<img>` bis `exit 100%` gescrollt wurde, also den Scrollport vollständig verlassen hat.

```css live-sample___set-active-range
img {
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 40% contain 60%;
}

.one img {
  timeline-trigger-name: --t1;
}

.two img {
  timeline-trigger-name: --t2;
  timeline-trigger-active-range: entry 50% exit 100%;
}
```

> [!NOTE]
> Damit `timeline-trigger-active-range` eine Wirkung hat, muss dieser Bereich größer als `timeline-trigger-activation-range` sein.

```css hidden live-sample___set-active-range
.figure-wrapper {
  display: flex;
  gap: 20px;
}

figcaption {
  left: 5px;
  right: -1px;
}
```

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("set-active-range", "100%", 500)}}

Scrollen Sie die Bilder in den sichtbaren Bereich und bewegen Sie sie dann vorsichtig nach oben und unten. Beachten Sie, dass beide Bildunterschriften gleichzeitig eingeblendet werden, ungefähr auf einem Drittel der Höhe der eingebetteten Seite. Die erste Bildunterschrift wird etwas weiter oben ausgeblendet, während die zweite erst ausgeblendet wird, wenn sie den Scrollport vollständig verlassen hat. Das liegt daran, dass beide `<img>`-Trigger denselben _Aktivierungsbereich_ haben, für den zweiten jedoch ein wesentlich größerer _aktiver Bereich_ festgelegt ist.

## Die Kurzschreibweise timeline-trigger

Bisher haben wir das gesamte CSS für unsere Animation mit Scroll-Trigger als Kombination aus Kurz- und Langschreibweisen verfasst, um die einzelnen Eigenschaften und ihre Werte verständlich zu erklären. Das ist jedoch umständlich und ausführlich. Nachdem Sie die Konzepte kennengelernt haben, können wir mit der Kurzschreibweise {{cssxref("timeline-trigger")}} eine möglichst kurze gleichwertige Fassung erstellen. Wahrscheinlich werden Sie sich in künftigen Projekten für diese Kurzschreibweise entscheiden.

Nehmen wir diese Deklarationen als Beispiel:

```css
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 25% contain 75%;
  timeline-trigger-active-range: entry 0% exit 100%;
}
```

Mit der Kurzschreibweise `timeline-trigger` können wir sie in einer einzigen CSS-Zeile ausdrücken:

```css
img {
  timeline-trigger: --t view() contain 25% contain 75% / entry 0% exit 100%;
}
```

## Die Aktion der Animation anpassen

Alle bisherigen Beispiele in diesem Leitfaden haben die Animation `fade-in` ausgelöst, sodass die Bildunterschrift ein- und ausgeblendet wurde. Das Abspielen vorwärts und rückwärts wird durch die auf dem animierten Element festgelegte `animation-trigger`-Deklaration gesteuert:

```css
animation-trigger: --t play-forwards play-backwards;
```

Die {{cssxref("animation-action")}}-Werte `play-forwards` und `play-backwards` geben an, dass die Animation bei Aktivierung des Triggers vorwärts und bei Deaktivierung rückwärts abgespielt wird. Der erste Wert ist die Aktion bei Aktivierung der Animation, der zweite die Aktion bei Deaktivierung.

Wenn wir auf demselben Element die folgende `animation`-Deklaration festlegen:

```css
animation: fade-in 1s ease-in both;
```

Die Animation läuft bei Aktivierung des Triggers nur einmal und bei Deaktivierung einmal rückwärts: In unserer `animation`-Kurzschreibweise haben wir keinen {{cssxref("animation-iteration-count")}} angegeben. Daher wird der Standardwert `1` verwendet.

Mit anderen `animation-action`-Werten lassen sich andere Effekte erzielen. Zum Beispiel:

- `play-once` bewirkt, dass die Animation nur einmal abgespielt wird. Nach ihrem Abschluss wird sie bei späteren Aktivierungen oder Deaktivierungen nicht erneut abgespielt.
- `play` bewirkt, dass die Animation in der Richtung abgespielt wird, in der sie zuvor lief. Im Gegensatz dazu beeinflussen `play-forwards` und `play-backwards` die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation: Sie setzen sie auf ihren positiven Absolutwert beziehungsweise auf ihren mit `-1` multiplizierten positiven Absolutwert. Dadurch läuft die Animation vorwärts beziehungsweise rückwärts. Beachten Sie, dass der Wert von {{cssxref("animation-direction")}} davon nicht betroffen ist.
- `pause` hält die Animation an. Sie könnten beispielsweise den Wiederholungszähler einer Animation auf `infinite` und den zugehörigen `animation-trigger` auf `--t play pause` setzen. Dadurch würde die Animation bei Aktivierung des Triggers abgespielt und bei Deaktivierung angehalten.
- `reset` hat dieselbe Wirkung wie `pause`, setzt aber zusätzlich den Fortschritt der Animation auf `0` zurück.

Einige dieser Werte sind für die gemeinsame Verwendung vorgesehen. `play-forwards play-backwards` eignet sich beispielsweise für Fälle, in denen die Wiedergaberichtung gewechselt werden soll, um einen visuellen Ein- und Ausblendeffekt zu erzielen: Ein UI-Element wird animiert eingeblendet, wenn es auf dem Bildschirm erscheint, und wieder animiert ausgeblendet, wenn es den Bildschirm verlässt. `play pause` wird dagegen häufig verwendet, um ein Element bei seinem Erscheinen zu animieren und die Animation anzuhalten, sobald es beginnt, den Bildschirm zu verlassen.

Sehen wir uns ein kurzes Beispiel an: Wir ändern unser erstes Beispiel so, dass unser `<figure>` nur einmal eingeblendet wird, nämlich wenn es vollständig in den Scrollport eingetreten ist. Danach wird es weder ausgeblendet noch erneut animiert, bis die Seite neu geladen wird.

Wir setzen die `animation-action` der Eigenschaft `animation-trigger` auf `play-once`, damit die Animation nur einmal abgespielt wird, wenn das `<figure>` erstmals in den Aktivierungsbereich eintritt. Außerdem setzen wir `timeline-trigger-activation-range` auf `contain`, damit die Animation erst abgespielt wird, wenn das `<figure>` vollständig auf dem Bildschirm zu sehen ist. Da sie nur einmal läuft, sollen Sie sie nicht verpassen.

```css live-sample___play-once
figure {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-once;

  timeline-trigger: --t view() contain;
}
```

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("play-once", "100%", 500)}}

Wenn Sie das `<figure>` zum ersten Mal auf den Bildschirm scrollen, wird es eingeblendet. Danach behält es eine Deckkraft von `100%` bei, unabhängig davon, wie oft Sie es im Scrollport nach oben und unten bewegen. Sie können das Einblenden nur erneut auslösen, indem Sie die Seite aktualisieren (oder das `<iframe>` des eingebetteten Beispiels neu laden).

## Gültigkeitsbereich von Triggern

Wenn mehrere Trigger denselben `timeline-trigger-name` verwenden, werden die Trigger aufgrund der Art und Weise, wie der Browser [Trigger standardmäßig bestimmt](/de/docs/Web/CSS/Reference/Properties/trigger-scope#description), dem letzten Element in der HTML-Quelltextreihenfolge zugeordnet, das diesen `timeline-trigger-name`-Wert hat. Das ist wahrscheinlich nicht das gewünschte Verhalten.

Wenn ein Dokument beispielsweise mehrere wiederholte Komponenten enthält, die jeweils eine Animation mit Scroll-Trigger haben, bei der das animierte und das überwachte Element verschieden sind, werden die Animationen aller animierten Elemente vom Trigger der letzten Komponente gesteuert. Das können Sie vermeiden, indem Sie in jeder Komponente einen anderen `timeline-trigger-name` verwenden oder den Gültigkeitsbereich des Namens auf einen Teilbaum begrenzen.

Die Eigenschaft {{cssxref("trigger-scope")}} begrenzt die Sichtbarkeit beziehungsweise den „Gültigkeitsbereich“ eines `timeline-trigger-name`-Werts auf einen bestimmten Teilbaum. Dadurch kann die Animation jedes animierten Elements nur von einem Trigger ausgelöst werden, der innerhalb desselben abgegrenzten Teilbaums erstellt wurde. Wie das funktioniert, erfahren Sie auf der Referenzseite zu `trigger-scope` und im dortigen [`trigger-scope`-Beispiel](/de/docs/Web/CSS/Reference/Properties/trigger-scope#examples).

## Mehrere Animationen mit Scroll-Triggern

In den bisherigen Beispielen haben wir für ein Element jeweils nur eine Animation mit Scroll-Trigger festgelegt. Alle in diesem Leitfaden behandelten `animation-*`- und `timeline-trigger-*`-Eigenschaften akzeptieren jedoch eine durch Kommas getrennte Liste von Werten. So können mehrere Animationen durch mehrere Trigger ausgelöst werden. In diesem Abschnitt erstellen wir ein etwas komplexeres Beispiel mit mehreren Animationen mit Scroll-Triggern auf demselben Element.

Die Eigenschaft {{cssxref("animation-trigger")}} funktioniert beim Festlegen [mehrerer Werte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) genauso wie die Kurzschreibweise {{cssxref("animation")}} und die anderen Animations-Langschreibweisen. Wenn mehrere `animation-name`-Werte festgelegt sind, aber nur ein `animation-trigger`-Wert, gilt dieser `animation-trigger` für alle Animationen. Wenn zwei `animation-trigger`-Werte festgelegt sind, werden diese den Animationen wiederholt zugeordnet, bis jede Animation einen `animation-trigger`-Wert erhalten hat. Entsprechendes gilt für weitere Werte.

Dieses Beispiel animiert ein Element schrittweise: Wenn beim Scrollen der Seite neue Trigger aktiviert werden, kommen weitere Animationen hinzu. Während der Benutzer scrollt, gleitet das Element zuerst von der rechten Bildschirmseite herein, gibt dann seinen Inhalt frei, gleitet anschließend auf dem Bildschirm nach unten und ändert seine Hintergrundfarbe.

Das HTML ähnelt den vorherigen Beispielen. Wir haben jedoch oben ein {{htmlelement("section")}}-Element mit hervorgehobenem Inhalt eingefügt. Außerdem sind zwischen den übrigen Inhalten einige leere {{htmlelement("div")}}-Elemente verteilt, auf denen wir Trigger für unsere Animationen definieren.

```html
<section>
  <h2>This content is animated!</h2>

  <p>
    The countryside surrounding Cairns, located in eastern Australia, is a
    breathtakingly beautiful region characterized by diverse landscapes, lush
    greenery, and unique natural wonders.
  </p>
</section>

<h1>Information about Cairns</h1>

...
```

```html hidden live-sample___multiple-triggers
<section>
  <h2>This content is animated!</h2>

  <p>
    The countryside surrounding Cairns, located in eastern Australia, is a
    breathtakingly beautiful region characterized by diverse landscapes, lush
    greenery, and unique natural wonders.
  </p>
</section>

<h1>Information about Cairns</h1>

<p>
  Nestled between the Great Dividing Range and the sparkling Coral Sea, this
  area offers a stunning blend of tropical rainforests, pristine beaches, and
  majestic mountain ranges.
</p>

<p>
  As you venture away from the city, you'll be greeted by the verdant
  rainforests of the Wet Tropics World Heritage Area. Towering ancient trees,
  vibrant ferns, and cascading waterfalls create a serene and magical
  atmosphere.
</p>
<p>
  Exploring the lush undergrowth, you may encounter unique wildlife such as
  colorful birds, tree-dwelling mammals, and rare reptiles. The sounds of
  chirping birds and rushing water add to the symphony of nature, providing an
  immersive experience in this captivating wilderness.
</p>

<p>
  Traveling further, you'll discover the Atherton Tablelands, a plateau renowned
  for its fertile farmlands, rolling hills, and picturesque lakes. This
  agricultural heartland is dotted with quaint rural towns and farms producing
  an array of fresh produce.
</p>

<div id="one"></div>

<p>
  Fields of sugar cane, banana plantations, and dairy farms stretch as far as
  the eye can see, creating a patchwork of vibrant green hues against the
  backdrop of distant mountains. The region is also famous for its waterfalls,
  such as Millaa Millaa Falls, where crystal-clear water tumbles down verdant
  cliffs, offering a refreshing retreat.
</p>

<p>
  No visit to the countryside surrounding Cairns is complete without exploring
  the stunning beaches that line the Coral Sea. From Palm Cove to Mission Beach,
  the coastline is adorned with golden sands, swaying palm trees, and azure
  waters. These idyllic beaches provide the perfect setting for relaxation,
  swimming, and water sports.
</p>

<p>
  Snorkeling enthusiasts can also discover the wonders of the Great Barrier
  Reef, a UNESCO World Heritage Site, which lies just off the coast. This
  vibrant underwater ecosystem teems with an incredible diversity of marine
  life, including colorful coral formations, tropical fish, and sea turtles.
</p>

<div id="two"></div>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>

<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walshs Pyramid near Gordonvale.
</p>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>

<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walshs Pyramid near Gordonvale.
</p>

<div id="three"></div>

<p>
  Walshs Pyramid is located within Wooroonooran National Park south of Cairns,
  Queensland, Australia. An annual footrace to its summit is held on the third
  Saturday in August. For experienced hikers, the ascent and descent can take 4
  to 6 hours. The vegetation on the mountain is fairly dense with exposed rocks
  which can make the surface very slippery after rain.
</p>
```

Anfangs befindet sich das `<section>`-Element mit dem hervorgehobenen Inhalt außerhalb des Bildschirms. In unserem CSS gestalten wir zunächst das `<section>`-Element: Wir setzen seine {{cssxref("position")}} auf `fixed` und positionieren es nahe der linken oberen Ecke des Scrollports. Außerdem definieren wir die Anfangsstile, von denen aus animiert und zu denen zurückgekehrt wird. Anschließend legen wir drei {{cssxref("animation")}}-Werte fest. Sie lassen das `<section>`-Element mit `slide-from-right` herein gleiten, geben mit `reveal` seinen Inhalt frei und lassen es mit `slide-down` auf dem Bildschirm nach unten gleiten und seine Hintergrundfarbe ändern. Für jede Animation legen wir außerdem einen `animation-trigger` fest, damit sie durch die Aktivierung unterschiedlicher Trigger ausgelöst wird.

Der Endzustand jeder Animation soll nach Erreichen dieses Zustands erhalten bleiben. Deshalb ist es wichtig, geeignete {{cssxref("animation-fill-mode")}}-Werte für die Animationen und `<animation-action>`-Werte für die `animation-trigger`-Werte festzulegen. Für die letzte Animation mussten wir `animation-fill-mode` auf `forwards` statt auf `both` setzen, da es keinen `from`-Keyframe gibt.

```css hidden live-sample___multiple-triggers
body {
  overflow-x: hidden;
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}

section {
  background: red;
  color: #ffffff00;
  padding: 10px;
  width: 400px;
  height: 50px;
}

section p {
  font-size: 1.2rem;
}
```

```css live-sample___multiple-triggers
section {
  position: fixed;
  left: 1em;
  top: 1em;
  height: 240px;
  background: red;
  width: 400px;
  transform-origin: top;

  animation:
    slide-from-right 1s both,
    reveal 1s both,
    slide-down 1s forwards;

  animation-trigger:
    --t1 play-forwards pause,
    --t2 play-forwards pause,
    --t3 play-forwards pause;
}
```

Als Nächstes erstellen wir Trigger auf den `<div>`-Elementen. Ihre {{cssxref("timeline-trigger-name")}}-Werte entsprechen den Bezeichnern, die in den `animation-trigger`-Eigenschaftswerten des `<section>`-Elements angegeben sind. Wenn der Benutzer scrollt und eines der überwachten `<div>`-Elemente in den Scrollport eintritt, wird dadurch jeweils eine andere Animation aktiviert. In diesem Fall sind unsere überwachten Elemente unsichtbar: Sie enthalten keine nützlichen Inhalte und dienen ausschließlich dazu, die Trigger bereitzustellen.

```css live-sample___multiple-triggers
#one {
  timeline-trigger: --t1 view();
}

#two {
  timeline-trigger: --t2 view();
}

#three {
  timeline-trigger: --t3 view();
}
```

Abschließend definieren wir mit {{cssxref("@keyframes")}} die Animationen, auf die wir zuvor in der `animation`-Eigenschaft des `<section>`-Elements verwiesen haben.

```css live-sample___multiple-triggers
@keyframes slide-from-right {
  from {
    translate: 400%;
  }
  to {
    translate: 0;
  }
}

@keyframes reveal {
  from {
    color: #ffffff00;
    transform: scaleY(0.2);
  }
  to {
    color: white;
    transform: scaleY(1);
  }
}

@keyframes slide-down {
  to {
    translate: 0 100%;
    background: blue;
  }
}
```

```css hidden live-sample___basic-scroll-triggered live-sample___same-element-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once live-sample___trigger-scope live-sample___multiple-triggers
@supports not (timeline-trigger-name: --t) {
  body::before {
    content: "Your browser does not support scroll-triggered animations.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("multiple-triggers", "100%", 500)}}

Scrollen Sie vorsichtig durch das Beispiel und beachten Sie, wie die einzelnen Animationen auf das `<section>` angewendet werden, sobald Sie zum jeweiligen `<div>` scrollen.

### Mehrere Trigger für dieselbe Animation

Wenn Sie für ein animiertes Element Trigger auf mehreren verschiedenen Elementen definieren möchten, die alle dieselbe Animation auslösen, müssen Sie dieselbe benannte Animation mehrfach auf dem animierten Element angeben und jeder Instanz dieser Animation einen anderen Trigger zuweisen. Weitere Informationen finden Sie unter [Mehrere Trigger für dieselbe Animation](/de/docs/Web/CSS/Reference/Properties/animation-trigger#multiple_triggers_for_the_same_animation).

## Siehe auch

- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- Modul [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [CSS-Animationen mit Scroll-Triggern kommen!](https://developer.chrome.com/blog/scroll-triggered-animations) auf developer.chrome.com (2025)
