---
title: CSS-Animationen mit Scroll-Auslösern verwenden
short-title: Animationen mit Scroll-Auslösern
slug: Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

CSS-**Animationen mit Scroll-Auslösern** bieten einen deklarativen Mechanismus, um eine auf [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) basierende [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) eines Elements zu starten, anzuhalten, zu stoppen oder umzukehren, wenn Nutzende das Element (oder ein anderes Element) zu einem bestimmten Offset innerhalb eines Scrollports scrollen.

Dieser Artikel beschreibt, wie Sie CSS-Animationen mit Scroll-Auslösern erstellen.

## Grundkonzepte von Animationen mit Scroll-Auslösern

Ein verbreitetes UI-Muster besteht darin, Animationen auf einer Webseite auszulösen, wenn Nutzende zu einer bestimmten Stelle im Inhalt scrollen – etwa um zusätzliche UI-Elemente einzublenden oder die Aufmerksamkeit auf bestimmte Details zu lenken.

Mit CSS-Animationen mit Scroll-Auslösern können Sie scrollbasierte Auslöser definieren, die reguläre zeitbasierte [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) starten und stoppen. Sie können Auslösepositionen innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} festlegen. Wenn ein beobachtetes Element diese Positionen innerhalb des Scrollports erreicht, ändern die Auslöser den Wiedergabestatus einer Animation, die auf dieses oder ein völlig anderes Element angewendet wird.

> [!NOTE]
> Animationen mit Scroll-Auslösern sind eine Alternative zu JavaScript-Funktionen – etwa Frameworks oder der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) –, um Animationen beim Scrollen auszulösen. CSS-Animationen mit Scroll-Auslösern sind leistungsfähiger und möglicherweise einfacher zu implementieren.

### Animationen mit Scroll-Auslösern und scrollgesteuerte Animationen im Vergleich

Animationen mit Scroll-Auslösern ähneln [scrollgesteuerten CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations), unterscheiden sich aber von ihnen:

- Animationen mit Scroll-Auslösern sind reguläre zeitbasierte Animationen, die abgespielt werden, wenn ein Auslöser aktiv wird. Bei jedem Start der Animation berücksichtigen sie {{cssxref("animation-delay")}} und schließen jede Wiederholung stets innerhalb der durch {{cssxref("animation-duration")}} festgelegten Zeit ab – unabhängig davon, wie schnell Nutzende scrollen.
- Bei scrollgesteuerten Animationen wird die normale zeitbasierte Animations-Timeline durch eine scrollbasierte Timeline ersetzt. Die Animation läuft daher vorwärts beziehungsweise rückwärts, wenn Sie zum Anfang beziehungsweise Ende des Inhalts scrollen; schnelleres Scrollen führt zu einer schnelleren Animation. Scrollgesteuerte Animationen ignorieren die Eigenschaften `animation-duration` und `animation-delay`.

## Grundlagen von Animationen mit Scroll-Auslösern

Sehen wir uns an einem einfachen Beispiel an, wie eine Animation mit Scroll-Auslöser funktioniert. Eine Bildunterschrift wird ein- und ausgeblendet, wenn das zugehörige Bild in den sichtbaren Bereich hinein- beziehungsweise aus ihm herausgescrollt wird. In diesem Fall gilt:

- Auf dem Element {{htmlelement("figcaption")}} ist eine {{cssxref("@keyframes")}}-Animation festgelegt: ein Einblendeffekt. Diese Animation ist die _ausgelöste Animation_.
- Als _Animationsaktionen_ legen wir fest, dass die Animation vorwärts abgespielt wird, wenn der Auslöser _aktiviert_ wird, sodass die Bildunterschrift eingeblendet wird. Wenn der Auslöser _deaktiviert_ wird, wird sie rückwärts abgespielt, sodass die Bildunterschrift ausgeblendet wird.
- Die _Animationsauslöser_ werden auf dem Element `<img>` definiert. Die Aktivierung erfolgt, sobald `<img>` beginnt, in den Scrollport einzutreten; die Deaktivierung erfolgt, wenn `<img>` den Scrollport vollständig verlassen hat. Damit bildet der gesamte Scrollport den _Timeline-Bereich_, `<img>` ist das _beobachtete Element_ und `<figcaption>` das animierte Element.
- Auf dem Element {{htmlelement("img")}} legen wir eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) als _Auslösequelle_ fest, die mit der Funktion [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) erstellt wird.

Wenn der Inhalt nach oben oder unten gescrollt wird, beginnt die Animation der Bildunterschrift, sobald `<img>` im Scrollport erscheint. Sie läuft rückwärts, wenn `<img>` den Scrollport verlässt. Dieses einfache Beispiel erzeugt noch nicht den gewünschten Effekt, ist aber ein guter Ausgangspunkt, den wir mit weiteren Funktionen verbessern können.

Der HTML-Code enthält mehrere Textabsätze mit einem {{htmlelement("figure")}}-Element dazwischen, das `<img>` und `<figcaption>` enthält. Der Kürze halber zeigen wir nicht den vollständigen Quellcode.

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
  colourful birds, tree-dwelling mammals, and rare reptiles. The sounds of
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
  the iconic Walsh's Pyramid near Gordonvale.
</p>
```

Zunächst definieren wir {{cssxref("@keyframes")}} für die Animation `fade-in`, die wir auf `<figcaption>` anwenden.

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
  font-family: Arial, Helvetica, sans-serif;
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

Der erste Deklarationsblock wendet die Animation und einen Animationsauslöser zusammen mit den Animationsaktionen auf das Element {{htmlelement("figcaption")}} an:

1. Mit der Kurzschreibweise {{cssxref("animation")}} wenden wir die Animation `fade-in` auf `<figcaption>` an. Ohne Auslöser würde `<figcaption>` dadurch sofort beim Laden der Seite eingeblendet.
2. Mit der Eigenschaft {{cssxref("animation-trigger")}} verzögern wir den Start der Animation, bis das Element {{htmlelement("img")}} in den sichtbaren Bereich gescrollt wird. Dazu geben wir an, welches Element die Auslöser bereitstellt und welche Aktionen diese ausführen. Der Wert von `animation-trigger` umfasst:
   - Einen {{cssxref("dashed-ident")}}, `--t`. Dieser Bezeichner ist auf dem auslösenden Element als Wert der Eigenschaft {{cssxref("timeline-trigger-name")}} festgelegt.
   - Zwei {{cssxref("&lt;animation-action>")}}-Werte, die festlegen, wie sich die Animation bei Aktivierung und Deaktivierung des Auslösers verhält (die [Animationsaktionen](#adjusting_the_animations_action)). Bei Aktivierung wird die Animation des Elements `<figcaption>` vorwärts abgespielt, bei Deaktivierung rückwärts.

```css live-sample___basic-scroll-triggered live-sample___adjust-range live-sample___set-active-range
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
}
```

Der zweite Deklarationsblock erstellt den Animationsauslöser:

1. Mit der Eigenschaft `timeline-trigger-name` geben wir den auf dem Element `<img>` erstellten Auslösern einen Namen. Dies ist derselbe gestrichelte Bezeichner wie der Auslösername, auf den der Wert von `animation-trigger` des Elements `<figcaption>` verweist.
2. Mit der Eigenschaft {{cssxref("timeline-trigger-source")}} legen wir den Typ des Animationsauslösers fest. Durch Angabe der Funktion [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) ist unser Auslösertyp eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function). Ihr standardmäßiger [Aktivierungsbereich](#den_aktivierungsbereich_des_auslösers_anpassen) entspricht dem [Timeline-Bereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) `cover`.

```css live-sample___basic-scroll-triggered
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

Standardmäßig verfolgt die von der Funktion `view()` erstellte [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) die Position des Elements `<img>` entlang der Blockachse des nächstgelegenen übergeordneten Scrollers. Das beobachtete Element – hier `<img>` – wird als **Subjekt** oder **beobachtetes Element** bezeichnet.

Standardmäßig werden die Auslöser aktiviert beziehungsweise deaktiviert, wenn das beobachtete Element in Blockrichtung zum Anfang beziehungsweise Ende des Timeline-Bereichs gescrollt wird. Dadurch wird die Animation von `<figcaption>` vorwärts beziehungsweise rückwärts abgespielt. Die Aktivierung erfolgt, wenn das beobachtete Element in den [**Aktivierungsbereich**](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) eintritt; die Deaktivierung erfolgt, wenn es den [**aktiven Bereich**](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) verlässt. Wenn `timeline-trigger-source` auf `view()` gesetzt ist, entsprechen der standardmäßige Aktivierungsbereich und der aktive Bereich `cover`: Sie reichen von dem Punkt, an dem die vordere Rahmenkante des beobachteten Elements beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem seine hintere Rahmenkante den Scrollport vollständig verlassen hat.

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("basic-scroll-triggered", "100%", 500)}}

Beachten Sie, dass die Bildunterschrift eingeblendet wird, sobald irgendein Teil des Bildes im Scrollport sichtbar wird – unabhängig davon, ob Sie es von unten oder oben hineinscrollen. Sie wird erst wieder ausgeblendet, wenn sich das gesamte Bild aus dem Scrollport herausbewegt hat. Daher ist der Ausblendeffekt nicht zu sehen. Wenn Sie das Bild zurück in den sichtbaren Bereich scrollen, wird die Bildunterschrift erneut eingeblendet.

## Den Auslöser auf demselben Element erstellen

Im vorherigen Beispiel wurde der Auslöser auf dem Element `<img>` definiert und `<figcaption>` animiert. Der Auslöser kann auch auf dem animierten Element selbst definiert werden. Ändern wir das vorherige Beispiel so, dass der Auslöser auf dem animierten Element {{htmlelement("figcaption")}} erstellt wird.

Der HTML-Code ist mit dem vorherigen Beispiel identisch. Der CSS-Code unterscheidet sich nur darin, auf welchem Element die `timeline-trigger-*`-Eigenschaften festgelegt sind.

Diesmal sind die Eigenschaften {{cssxref("animation")}}, {{cssxref("animation-trigger")}}, {{cssxref("timeline-trigger-name")}} und {{cssxref("timeline-trigger-source")}} alle auf dem Element `<figcaption>` festgelegt: Es wird animiert, wenn es im Scrollport erscheint. Im vorherigen Beispiel war `<figcaption>` das animierte Element und `<img>` das beobachtete Element. Jetzt übernimmt die Bildunterschrift beide Rollen.

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

In diesem Fall wird `<figcaption>` eingeblendet, wenn die Bildunterschrift selbst – und nicht das Bild – erstmals in den Scrollport eintritt.

## Den Aktivierungsbereich des Auslösers anpassen

In den vorherigen Beispielen wird der Auslöser aktiviert (`fade-in` startet), sobald eine Blockkante des beobachteten Elements an einer Seite in den Scrollport eintritt. Er wird deaktiviert (das Ausblenden beginnt: `fade-in` wird rückwärts abgespielt), wenn das beobachtete Element den Scrollport an der gegenüberliegenden Seite vollständig verlassen hat. Dadurch ist das Ausblenden nie sichtbar. Der Grund ist, dass der standardmäßige Aktivierungsbereich und der aktive Bereich (siehe {{cssxref("timeline-range-name")}}) bei Verwendung von `view()` als `timeline-trigger-source` beide `cover` sind.

Damit die Ausblendanimation sichtbar wird, können wir den Anfang und das Ende des Aktivierungsbereichs mit den Eigenschaften {{cssxref("timeline-trigger-activation-range-start")}} beziehungsweise {{cssxref("timeline-trigger-activation-range-end")}} verschieben. Alternativ können wir mit der Kurzschreibweise {{cssxref("timeline-trigger-activation-range")}} beide Werte in einer Deklaration festlegen. Jede dieser Eigenschaften akzeptiert folgende Werte:

- Den Standardwert `normal`.
- Einen {{cssxref("length-percentage")}}-Wert, der einen Punkt innerhalb des Standardbereichs angibt.
- Ein {{cssxref("timeline-range-name")}}-Schlüsselwort, das einen benannten Bereich angibt.
- Einen `timeline-range-name` und einen `<length-percentage>`-Wert, die einen Punkt innerhalb des benannten Bereichs angeben.

Prozentwerte beziehen sich auf die Länge von `<timeline-range-name>`, der für unsere [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) zu `cover` aufgelöst wird. Hätten wir [`scroll()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) als {{cssxref("timeline-trigger-source")}} festgelegt, würde der standardmäßige `<timeline-range-name>` zu `scroll` aufgelöst. Unter [Namen von Timeline-Bereichen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) erfahren Sie mehr über die Werte von `<timeline-range-name>`.

Im folgenden Beispiel wird der Auslöser bei `50%` des `entry`-Bereichs aktiviert (wenn `50%` des beobachteten Elements über eine der Blockkanten des Scrollports eingetreten sind) und bei `0%` des `exit`-Bereichs deaktiviert (wenn `50%` des beobachteten Elements die gegenüberliegende Blockkante des Scrollports verlassen haben).

```css
timeline-trigger-activation-range: entry 50% exit 0%;
```

Wenden wir dies auf unser erstes Beispiel an, damit Sie den Effekt sehen können. Der Deklarationsblock für `img` wird wie folgt geändert:

```css live-sample___adjust-range
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 0%;
}
```

Die aktualisierte Darstellung sieht so aus:

{{embedlivesample("adjust-range", "100%", 500)}}

Die Animation von `<figcaption>` ist nun etwas nützlicher: Die Bildunterschrift wird erst eingeblendet, wenn ein erheblicher Teil von `<img>` an der Endkante des Scrollports eingetreten ist. Sie wird ausgeblendet, sobald `<img>` beginnt, den Scrollport an dessen Anfangskante zu verlassen. Wenn Sie den Inhalt wieder nach unten scrollen, wird der Auslöser erneut aktiviert und die Bildunterschrift an der Anfangskante des Scrollports wieder eingeblendet. An der Endkante des Scrollports erfolgt erneut die Deaktivierung.

## Einen benutzerdefinierten aktiven Bereich festlegen

Der **aktive Bereich** ist der Bereich, innerhalb dessen ein Auslöser nach seiner Aktivierung aktiv bleibt. Standardmäßig stimmt er mit dem Aktivierungsbereich überein. In den bisherigen Beispielen war der Bereich für Aktivierung und Deaktivierung daher derselbe.

Mit den Eigenschaften {{cssxref("timeline-trigger-active-range-start")}} und {{cssxref("timeline-trigger-active-range-end")}} können Sie einen aktiven Bereich festlegen, der sich vom Aktivierungsbereich unterscheidet. Alternativ können Sie mit der Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} beide Werte in einer Deklaration festlegen.

Dies kann sinnvoll sein, um einer Animation mehr Zeit zum Abschließen zu geben – etwa wenn der Animationsauslöser nur innerhalb eines kleinen Bereichs aktiviert werden, aber über einen größeren Bereich aktiv bleiben soll. Erst wenn sich das beobachtete Element aus dem aktiven Bereich herausbewegt, wird der Auslöser inaktiv. Anschließend können Sie ihn erneut aktivieren, indem Sie das Subjekt wieder in den Aktivierungsbereich bewegen.

Erweitern wir die vorherigen Beispiele, um die Wirkung des aktiven Bereichs zu zeigen. Der HTML-Code ist derselbe, mit einer Ausnahme: Wir haben zwei identische `<figure>`-Elemente mit den Klassen `.one` und `.two` eingefügt. Sie werden mithilfe von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) nebeneinander angeordnet und erscheinen beziehungsweise verschwinden daher gleichzeitig. In beiden Fällen ist `<img>` das beobachtete Element für das jeweils benachbarte animierte `<figcaption>`.

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
  colourful birds, tree-dwelling mammals, and rare reptiles. The sounds of
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
  the iconic Walsh's Pyramid near Gordonvale.
</p>
```

Wir wenden auf beide `<figcaption>`-Elemente dieselbe `animation` wie in den vorherigen Beispielen an. Ihre `animation-trigger`-Werte verweisen jedoch auf zwei unterschiedliche `timeline-trigger-name`-Werte.

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

Auf beiden `<img>`-Elementen legen wir dieselbe `timeline-trigger-source` und denselben `timeline-trigger-activation-range` fest. Der `timeline-trigger-name` jedes `<img>`-Elements entspricht einem der beiden unterschiedlichen gestrichelten Bezeichner aus dem vorherigen Codeblock. Dadurch steuert der auf jedem `<img>` erstellte Auslöser die Animation des jeweils benachbarten `<figcaption>`.

Die Deklaration `timeline-trigger-activation-range: contain 40% contain 60%` bedeutet, dass der Auslöser aktiviert wird – und damit die Animation beginnt –, wenn das beobachtete Element einen schmalen Bereich erreicht: die mittleren `20%` des Scrollports. Er wird deaktiviert, wenn das Subjekt diesen schmalen Bereich verlässt.

Standardmäßig stimmt der Aktivierungsbereich mit dem aktiven Bereich überein. Für das zweite `<img>` legen wir jedoch zusätzlich einen `timeline-trigger-active-range` von `entry 50% exit 100%` fest. Das bedeutet: Nachdem die zweite Bildunterschrift `<figcaption>` eingeblendet wurde, wird sie erst wieder ausgeblendet, wenn das zweite `<img>` zu `exit 100%` gescrollt wurde – also den Scrollport vollständig verlassen hat.

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
> Damit `timeline-trigger-active-range` eine Wirkung hat, muss sein Bereich größer sein als `timeline-trigger-activation-range`.

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

Scrollen Sie die Bilder in den sichtbaren Bereich und anschließend vorsichtig nach oben und unten. Beachten Sie, dass beide Bildunterschriften gleichzeitig eingeblendet werden, ungefähr auf einem Drittel der Höhe der eingebetteten Seite. Die erste Bildunterschrift wird etwas weiter oben ausgeblendet; die zweite hingegen erst, wenn sie vollständig aus dem Scrollport herausbewegt wurde. Das liegt daran, dass beide `<img>`-Auslöser denselben _Aktivierungsbereich_ haben, während für den zweiten ein wesentlich größerer _aktiver Bereich_ gilt.

## Die Kurzschreibweise timeline-trigger

Bisher haben wir den CSS-Code für unsere Animation mit Scroll-Auslöser als Mischung aus Kurz- und Einzeleigenschaften geschrieben, um die einzelnen Eigenschaften und ihre Werte verständlich zu erklären. Das ist allerdings umständlich und ausführlich. Nachdem Sie die Konzepte kennengelernt haben, können wir mit der Kurzschreibweise {{cssxref("timeline-trigger")}} eine möglichst kurze, gleichwertige Variante erstellen. Wahrscheinlich werden Sie diese Kurzschreibweise in Ihren künftigen Projekten bevorzugen.

Nehmen wir diese Deklarationen als Beispiel:

```css
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 25% contain 75%;
  timeline-trigger-active-range: entry 0% exit 100%;
}
```

Mit der Kurzschreibweise `timeline-trigger` können wir sie in einer einzigen CSS-Zeile zusammenfassen:

```css
img {
  timeline-trigger: --t view() contain 25% contain 75% / entry 0% exit 100%;
}
```

## Die Animationsaktion anpassen

In allen bisherigen Beispielen dieses Leitfadens wurde die Animation `fade-in` ausgelöst, sodass die Bildunterschrift ein- und ausgeblendet wird. Das Abspielen vorwärts und rückwärts wird durch die auf dem animierten Element festgelegte Deklaration `animation-trigger` gesteuert:

```css
animation-trigger: --t play-forwards play-backwards;
```

Die {{cssxref("animation-action")}}-Werte `play-forwards` und `play-backwards` legen fest, dass die Animation bei Aktivierung des Auslösers vorwärts und bei seiner Deaktivierung rückwärts abgespielt wird. Der erste Wert ist die Aktion bei Aktivierung, der zweite die Aktion bei Deaktivierung.

Wenn wir auf demselben Element die folgende `animation`-Deklaration festlegen:

```css
animation: fade-in 1s ease-in both;
```

Die Animation wird bei Aktivierung des Auslösers nur einmal abgespielt und bei Deaktivierung einmal rückwärts: In unserer `animation`-Kurzschreibweise haben wir keinen {{cssxref("animation-iteration-count")}} angegeben. Daher wird der Standardwert `1` verwendet.

Mit weiteren `animation-action`-Werten lassen sich andere Effekte erzielen. Zum Beispiel:

- `play-once` bewirkt, dass die Animation nur einmal abgespielt wird. Nach ihrem Abschluss wird sie bei späteren Aktivierungen oder Deaktivierungen nicht erneut abgespielt.
- `play` bewirkt, dass die Animation in der Richtung abgespielt wird, in der sie zuvor lief. Im Gegensatz dazu wirken sich `play-forwards` und `play-backwards` auf die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation aus: Sie setzen sie auf ihren positiven Absolutwert beziehungsweise auf ihren mit `-1` multiplizierten positiven Absolutwert. Dadurch läuft die Animation vorwärts oder rückwärts. Der Wert von {{cssxref("animation-direction")}} bleibt davon unberührt.
- `pause` hält die Animation an. Sie könnten beispielsweise die Anzahl der Animationswiederholungen auf `infinite` und den zugehörigen `animation-trigger` auf `--t play pause` setzen. Die Animation würde dann bei Aktivierung des Auslösers abgespielt und bei Deaktivierung angehalten.
- `reset` hat dieselbe Wirkung wie `pause`, setzt aber zusätzlich den Animationsfortschritt auf `0` zurück.

Einige dieser Werte sind für die gemeinsame Verwendung vorgesehen. `play-forwards play-backwards` eignet sich beispielsweise, wenn Sie die Abspielrichtung für den visuellen Endzustand der Animation wechseln möchten: Ein UI-Element wird beim Erscheinen auf dem Bildschirm „hineinanimiert“ und beim Verlassen des Bildschirms wieder „hinausanimiert“. `play pause` wird dagegen häufig verwendet, um ein Element beim Erscheinen zu animieren und die Animation anzuhalten, sobald es beginnt, den Bildschirm zu verlassen.

Sehen wir uns ein kurzes Beispiel an: Wir ändern unser erstes Beispiel so, dass `<figure>` nur einmal eingeblendet wird, sobald es vollständig in den Scrollport eingetreten ist. Bis zum Neuladen der Seite wird es weder ausgeblendet noch erneut animiert.

Wir setzen die `animation-action` der Eigenschaft `animation-trigger` auf `play-once`, damit die Animation nur einmal abgespielt wird, wenn `<figure>` erstmals in den Aktivierungsbereich eintritt. Außerdem setzen wir `timeline-trigger-activation-range` auf `contain`, damit die Animation erst abgespielt wird, wenn `<figure>` vollständig auf dem Bildschirm zu sehen ist. Da sie nur einmal abgespielt wird, soll sie Ihnen nicht entgehen.

```css live-sample___play-once
figure {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-once;

  timeline-trigger: --t view() contain;
}
```

Das Beispiel wird wie folgt dargestellt:

{{embedlivesample("play-once", "100%", 500)}}

Wenn Sie `<figure>` zum ersten Mal auf den Bildschirm scrollen, wird es eingeblendet. Danach bleibt es bei einer Deckkraft von `100%`, unabhängig davon, wie oft Sie es im Scrollport nach oben und unten scrollen. Nur durch Aktualisieren der Seite (oder erneutes Laden des `<iframe>` des eingebetteten Beispiels) können Sie es noch einmal einblenden.

## Gültigkeitsbereich von Auslösern

Wenn mehrere Auslöser denselben `timeline-trigger-name` verwenden, werden sie aufgrund der Art und Weise, wie [der Browser Auslöser standardmäßig bestimmt](/de/docs/Web/CSS/Reference/Properties/trigger-scope#description), dem letzten Element in der HTML-Quellreihenfolge zugeordnet, das diesen `timeline-trigger-name`-Wert hat. Das ist wahrscheinlich nicht das gewünschte Verhalten.

Enthält ein Dokument beispielsweise mehrere wiederholte Komponenten, die jeweils eine Animation mit Scroll-Auslöser enthalten und bei denen das animierte Element und das beobachtete Element verschieden sind, werden die Animationen aller animierten Elemente vom Auslöser der letzten Komponente gesteuert. Das können Sie vermeiden, indem Sie in jeder Komponente einen anderen `timeline-trigger-name` verwenden oder den Gültigkeitsbereich des Namens auf einen Teilbaum beschränken.

Die Eigenschaft {{cssxref("trigger-scope")}} beschränkt die Sichtbarkeit beziehungsweise den „Gültigkeitsbereich“ eines `timeline-trigger-name`-Werts auf einen bestimmten Teilbaum. Dadurch kann die Animation jedes animierten Elements nur durch einen Auslöser innerhalb desselben abgegrenzten Teilbaums gestartet werden. Einzelheiten zur Funktionsweise und ein [`trigger-scope`-Beispiel](/de/docs/Web/CSS/Reference/Properties/trigger-scope#examples) finden Sie auf der Referenzseite zu `trigger-scope`.

## Mehrere Animationen mit Scroll-Auslösern

In den vorherigen Beispielen haben wir jeweils nur eine Animation mit Scroll-Auslöser auf einem Element festgelegt. Alle in diesem Leitfaden besprochenen `animation-*`- und `timeline-trigger-*`-Eigenschaften akzeptieren jedoch eine durch Kommas getrennte Werteliste. So können mehrere Animationen durch mehrere Auslöser gestartet werden. In diesem Abschnitt erstellen wir ein etwas komplexeres Beispiel mit mehreren Animationen mit Scroll-Auslösern auf demselben Element.

Die Eigenschaft {{cssxref("animation-trigger")}} funktioniert beim Festlegen [mehrerer Werte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) genauso wie die Kurzschreibweise {{cssxref("animation")}} und die anderen Animationseigenschaften. Sind mehrere `animation-name`-Werte, aber nur ein `animation-trigger`-Wert festgelegt, gilt dieser für alle Animationen. Sind zwei `animation-trigger`-Werte festgelegt, werden sie den Animationen wiederholt der Reihe nach zugeordnet, bis jede Animation einen `animation-trigger`-Wert hat. Entsprechend verhält es sich bei weiteren Werten.

In diesem Beispiel wird ein Element schrittweise animiert: Beim Scrollen der Seite werden durch neu aktivierte Auslöser weitere Animationen angewendet. Zuerst gleitet das Element vom rechten Bildschirmrand herein, dann wird sein Inhalt sichtbar. Anschließend gleitet es auf dem Bildschirm nach unten und ändert seine Hintergrundfarbe.

Der HTML-Code ähnelt den vorherigen Beispielen. Zusätzlich haben wir oben ein {{htmlelement("section")}}-Element mit hervorgehobenem Inhalt eingefügt. Zwischen den Abschnitten des Hauptinhalts befinden sich außerdem leere {{htmlelement("div")}}-Elemente, auf denen wir Auslöser für die Animationen definieren.

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
  colourful birds, tree-dwelling mammals, and rare reptiles. The sounds of
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
  the iconic Walsh's Pyramid near Gordonvale.
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
  the iconic Walsh's Pyramid near Gordonvale.
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

Anfangs ist der hervorgehobene Inhalt in `<section>` außerhalb des Bildschirms verborgen. Unser CSS gestaltet zunächst das Element `<section>`: Wir setzen seine {{cssxref("position")}} auf `fixed` und positionieren es nahe der oberen linken Ecke des Scrollports. Außerdem definieren wir die Ausgangsstile, von denen aus animiert wird und zu denen die Animationen zurückkehren. Anschließend legen wir drei {{cssxref("animation")}}-Werte fest. Dadurch wird das Element `<section>` mit `slide-from-right` hereingeschoben, sein Inhalt mit `reveal` sichtbar gemacht und es mit `slide-down` auf dem Bildschirm nach unten bewegt, wobei sich seine Hintergrundfarbe ändert. Für jede Animation legen wir außerdem einen `animation-trigger` fest, damit unterschiedliche Auslöser sie aktivieren.

Der Endzustand jeder Animation soll nach Erreichen bestehen bleiben. Deshalb müssen wir passende {{cssxref("animation-fill-mode")}}-Werte für die Animationen und `<animation-action>`-Werte für die `animation-trigger`-Werte festlegen. Bei der letzten Animation mussten wir `animation-fill-mode` auf `forwards` statt auf `both` setzen, da es keinen `from`-Keyframe gibt.

```css hidden live-sample___multiple-triggers
body {
  overflow-x: hidden;
  font-family: Arial, Helvetica, sans-serif;
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
  color: #fff0;
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

Als Nächstes erstellen wir Auslöser auf den `<div>`-Elementen. Ihre {{cssxref("timeline-trigger-name")}}-Werte entsprechen den Bezeichnern in den `animation-trigger`-Werten des `<section>`-Elements. Wenn Nutzende scrollen und eines der beobachteten `<div>`-Elemente in den Scrollport eintritt, wird dadurch jeweils eine andere Animation aktiviert. Unsere beobachteten Elemente sind in diesem Fall unsichtbar: Sie enthalten keine nützlichen Inhalte und dienen nur dazu, die Auslöser zu erstellen.

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

Zum Schluss definieren wir die Animations-{{cssxref("@keyframes")}}, auf die wir zuvor in der `animation`-Eigenschaft des `<section>`-Elements verwiesen haben.

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
    color: #fff0;
    transform: scaleY(0.2);
  }
  to {
    color: #ffff;
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

Scrollen Sie vorsichtig durch das Beispiel. Beachten Sie, wie jede Animation auf `<section>` angewendet wird, sobald zum jeweiligen `<div>` gescrollt wird.

### Mehrere Auslöser für dieselbe Animation

Wenn Sie ein animiertes Element haben und auf mehreren verschiedenen Elementen Auslöser definieren möchten, die alle dieselbe Animation starten, müssen Sie dieselbe benannte Animation mehrfach auf dem animierten Element angeben und jeder Instanz dieser Animation einen anderen Auslöser zuweisen. Weitere Informationen finden Sie unter [Mehrere Auslöser für dieselbe Animation](/de/docs/Web/CSS/Reference/Properties/animation-trigger#multiple_triggers_for_the_same_animation).

## Siehe auch

- Modul [CSS-Animationsauslöser](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- Modul [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [CSS-Animationen mit Scroll-Auslösern kommen!](https://developer.chrome.com/blog/scroll-triggered-animations) auf developer.chrome.com (2025)
