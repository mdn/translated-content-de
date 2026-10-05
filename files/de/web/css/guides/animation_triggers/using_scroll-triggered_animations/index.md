---
title: CSS-Animationen verwenden, die durch Scrollen ausgelöst werden
short-title: Durch Scrollen ausgelöste Animationen
slug: Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

**Durch Scrollen ausgelöste CSS-Animationen** bieten einen deklarativen Mechanismus, um eine auf der [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) basierende [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) eines Elements zu starten, anzuhalten, zu stoppen oder umzukehren, wenn das Element selbst (oder ein anderes Element) durch Scrollen einen bestimmten Versatz innerhalb eines Scrollports erreicht.

Dieser Artikel beschreibt, wie Sie durch Scrollen ausgelöste CSS-Animationen erstellen.

## Konzepte durch Scrollen ausgelöster Animationen

Ein häufiges UI-Muster besteht darin, Animationen auf einer Webseite auszulösen, wenn zu einer bestimmten Stelle im Inhalt gescrollt wird. So lassen sich beispielsweise zusätzliche UI-Elemente einblenden oder die Aufmerksamkeit auf bestimmte Details lenken.

Mit durch Scrollen ausgelösten CSS-Animationen können Sie scrollbasierte Auslöser definieren, die gewöhnliche zeitbasierte [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) starten und stoppen. Sie können Auslösepositionen innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} festlegen. Erreicht ein nachverfolgtes Element diese Positionen innerhalb des Scrollports, ändern die Auslöser den Wiedergabestatus einer Animation, die auf dieses oder auf ein völlig anderes Element angewendet wird.

> [!NOTE]
> Durch Scrollen ausgelöste Animationen bieten eine Alternative zu JavaScript-Funktionen – etwa Frameworks oder der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) –, um Animationen beim Scrollen auszulösen. Durch Scrollen ausgelöste CSS-Animationen sind leistungsfähiger und möglicherweise einfacher zu implementieren.

### Durch Scrollen ausgelöste und scrollgesteuerte Animationen im Vergleich

Durch Scrollen ausgelöste Animationen ähneln [scrollgesteuerten CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations), unterscheiden sich jedoch von ihnen:

- Durch Scrollen ausgelöste Animationen sind gewöhnliche zeitbasierte Animationen, die abgespielt werden, sobald ein Auslöser aktiv wird. Sie berücksichtigen {{cssxref("animation-delay")}} bei jedem Start der Animation und schließen jeden Durchlauf stets innerhalb der durch {{cssxref("animation-duration")}} festgelegten Zeit ab – unabhängig davon, wie schnell gescrollt wird.
- Bei scrollgesteuerten Animationen wird die normale zeitbasierte Animationstimeline durch eine scrollbasierte Timeline ersetzt. Dadurch läuft die Animation vorwärts oder rückwärts, wenn Sie zum Anfang beziehungsweise Ende des Inhalts scrollen; schnelleres Scrollen führt zu einer schnelleren Animation. Scrollgesteuerte Animationen ignorieren die Eigenschaften `animation-duration` und `animation-delay`.

## Grundlagen durch Scrollen ausgelöster Animationen

Sehen wir uns ein einfaches Beispiel an, das die Funktionsweise einer durch Scrollen ausgelösten Animation zeigt. Eine Bildunterschrift wird ein- und ausgeblendet, wenn das zugehörige Bild in den sichtbaren Bereich hinein- beziehungsweise aus ihm herausgescrollt wird. Dabei gilt:

- Für das Element {{htmlelement("figcaption")}} ist eine {{cssxref("@keyframes")}}-Animation festgelegt: ein Einblendeffekt. Diese Animation ist die _ausgelöste Animation_.
- Als _Animationsaktionen_ legen wir fest, dass die Animation bei _Aktivierung_ des Auslösers vorwärts abgespielt wird und die Bildunterschrift einblendet. Bei _Deaktivierung_ wird sie rückwärts abgespielt und blendet die Bildunterschrift aus.
- Die _Animationsauslöser_ werden auf dem Element `<img>` definiert. Die Aktivierung erfolgt, wenn `<img>` beginnt, in den Scrollport einzutreten; die Deaktivierung erfolgt, wenn `<img>` den Scrollport vollständig verlassen hat. Damit ist der gesamte Scrollport der _Timeline-Bereich_, `<img>` das _nachverfolgte Element_ und `<figcaption>` das animierte Element.
- Auf dem Element {{htmlelement("img")}} legen wir eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) als _Quelle des Auslösers_ fest, die mit der Funktion [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) erstellt wird.

Wenn der Inhalt nach oben oder unten gescrollt wird, beginnt die Animation der Bildunterschrift, sobald `<img>` im Scrollport erscheint. Verlässt `<img>` den Scrollport, läuft die Animation rückwärts. Dieses einfache Beispiel erzielt noch nicht den gewünschten Effekt, bietet aber einen guten Ausgangspunkt, den wir mit weiteren Funktionen verbessern können.

Das HTML enthält mehrere Absätze und dazwischen ein Element {{htmlelement("figure")}}, das `<img>` und `<figcaption>` enthält. Der Kürze halber zeigen wir nicht den vollständigen Quelltext.

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

Zunächst definieren wir mit {{cssxref("@keyframes")}} die Animation `fade-in`, die wir auf `<figcaption>` anwenden.

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

1. Mit der Kurzschreibweise {{cssxref("animation")}} wenden wir die Animation `fade-in` auf `<figcaption>` an. Ohne Auslöser würde `<figcaption>` dadurch unmittelbar beim Laden der Seite eingeblendet.
2. Mit der Eigenschaft {{cssxref("animation-trigger")}} verzögern wir den Start der Animation, bis das Element {{htmlelement("img")}} in den sichtbaren Bereich gescrollt wird. Dazu geben wir an, welches Element die Auslöser bereitstellt und welche Aktionen sie ausführen. Der Wert von `animation-trigger` umfasst:
   - Einen {{cssxref("dashed-ident")}}, `--t`. Dieser Bezeichner ist auf dem auslösenden Element als Wert der Eigenschaft {{cssxref("timeline-trigger-name")}} festgelegt.
   - Zwei Werte vom Typ {{cssxref("&lt;animation-action>")}}, die bestimmen, wie sich die Animation bei Aktivierung und Deaktivierung des Auslösers verhält (die [Animationsaktionen](#adjusting_the_animations_action)). Bei Aktivierung wird die Animation des Elements `<figcaption>` vorwärts abgespielt, bei Deaktivierung rückwärts.

```css live-sample___basic-scroll-triggered live-sample___adjust-range live-sample___set-active-range
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
}
```

Der zweite Deklarationsblock erstellt den Animationsauslöser:

1. Mit der Eigenschaft `timeline-trigger-name` weisen wir den auf `<img>` erstellten Auslösern einen identifizierenden Namen zu. Es handelt sich um denselben gestrichelten Bezeichner, auf den der Wert von `animation-trigger` des Elements `<figcaption>` verweist.
2. Mit der Eigenschaft {{cssxref("timeline-trigger-source")}} legen wir die Art des Animationsauslösers fest. Durch Angabe der Funktion [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) wird eine [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) verwendet. Ihr standardmäßiger [Aktivierungsbereich](#den_aktivierungsbereich_des_auslösers_anpassen) entspricht dem [Timeline-Bereich](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) `cover`.

```css live-sample___basic-scroll-triggered
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

Standardmäßig verfolgt die von der Funktion `view()` erstellte [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) die Position des Elements `<img>` entlang der Blockachse des nächstgelegenen übergeordneten Scroll-Containers. Das verfolgte Element – hier `<img>` – wird als **Subjekt** oder **nachverfolgtes Element** bezeichnet.

Standardmäßig werden die Auslöser aktiviert beziehungsweise deaktiviert, wenn das nachverfolgte Element in Blockrichtung zum Anfang beziehungsweise Ende des Timeline-Bereichs gescrollt wird. Dadurch wird die Animation von `<figcaption>` vorwärts beziehungsweise rückwärts abgespielt. Die Aktivierung erfolgt, wenn das nachverfolgte Element in den [**Aktivierungsbereich**](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-activation-range#description) eintritt; die Deaktivierung erfolgt, wenn es den [**aktiven Bereich**](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-active-range#description) verlässt. Ist `timeline-trigger-source` auf `view()` gesetzt, entsprechen der standardmäßige Aktivierungsbereich und der aktive Bereich `cover`. Dieser Bereich beginnt, wenn die Anfangskante des nachverfolgten Elements in den Scrollport eintritt, und endet, wenn seine Endkante den Scrollport vollständig verlassen hat.

Das Beispiel wird so dargestellt:

{{embedlivesample("basic-scroll-triggered", "100%", 500)}}

Beachten Sie, dass die Bildunterschrift eingeblendet wird, sobald ein beliebiger Teil des Bildes im Scrollport sichtbar wird – unabhängig davon, ob es von unten oder oben hineingescrollt wird. Erst wenn das gesamte Bild den Scrollport verlassen hat, beginnt das Ausblenden. Daher ist der Ausblendeffekt nicht zu sehen. Wenn Sie das Bild wieder in den sichtbaren Bereich scrollen, wird die Bildunterschrift erneut eingeblendet.

## Den Auslöser auf demselben Element erstellen

Im vorherigen Beispiel wurde der Auslöser auf dem Element `<img>` definiert, während `<figcaption>` animiert wurde. Der Auslöser kann auch auf dem animierten Element selbst definiert werden. Ändern wir das vorherige Beispiel so, dass der Auslöser auf dem animierten Element {{htmlelement("figcaption")}} erstellt wird.

Das HTML ist identisch mit dem vorherigen Beispiel. Im CSS ändert sich lediglich, auf welchem Element die Eigenschaften `timeline-trigger-*` festgelegt sind.

Diesmal sind die Eigenschaften {{cssxref("animation")}}, {{cssxref("animation-trigger")}}, {{cssxref("timeline-trigger-name")}} und {{cssxref("timeline-trigger-source")}} alle auf dem Element `<figcaption>` festgelegt. Es wird animiert, wenn es im Scrollport erscheint. Im vorherigen Beispiel war `<figcaption>` das animierte und `<img>` das nachverfolgte Element. Jetzt übernimmt die Bildunterschrift beide Rollen.

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

In diesem Fall wird `<figcaption>` eingeblendet, wenn es selbst – und nicht das Bild – erstmals in den Scrollport eintritt.

## Den Aktivierungsbereich des Auslösers anpassen

In den bisherigen Beispielen wird der Auslöser aktiviert (und `fade-in` gestartet), sobald eine Blockkante des nachverfolgten Elements an einer Seite in den Scrollport eintritt. Er wird deaktiviert (das Ausblenden beginnt: `fade-in` läuft rückwärts), wenn das Element den Scrollport an der gegenüberliegenden Seite vollständig verlassen hat. Deshalb ist das Ausblenden nie sichtbar. Der Grund dafür ist, dass bei Verwendung von `view()` als `timeline-trigger-source` sowohl der Aktivierungsbereich als auch der aktive Bereich standardmäßig `cover` entsprechen (siehe {{cssxref("timeline-range-name")}}).

Um das Ausblenden sichtbar zu machen, können wir Anfang und Ende des Aktivierungsbereichs mit {{cssxref("timeline-trigger-activation-range-start")}} beziehungsweise {{cssxref("timeline-trigger-activation-range-end")}} verschieben. Alternativ lassen sich beide Werte mit der Kurzschreibweise {{cssxref("timeline-trigger-activation-range")}} in einer einzigen Deklaration festlegen. Jede dieser Eigenschaften akzeptiert folgende Werte:

- Den Standardwert `normal`.
- Einen Wert vom Typ {{cssxref("length-percentage")}}, der einen Punkt innerhalb des Standardbereichs angibt.
- Ein {{cssxref("timeline-range-name")}}-Schlüsselwort, das einen benannten Bereich angibt.
- Einen `timeline-range-name` und einen `<length-percentage>`-Wert, die zusammen einen Punkt innerhalb des benannten Bereichs angeben.

Prozentwerte beziehen sich auf die Länge von `<timeline-range-name>`. Für unsere [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) entspricht dieser standardmäßig `cover`. Hätten wir [`scroll()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) als {{cssxref("timeline-trigger-source")}} festgelegt, würde der standardmäßige `<timeline-range-name>` `scroll` entsprechen. Weitere Informationen zu den Werten von `<timeline-range-name>` finden Sie unter [Namen von Timeline-Bereichen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

Im folgenden Beispiel wird der Auslöser bei `50%` des Bereichs `entry` aktiviert (wenn `50%` des nachverfolgten Elements über eine Blockkante des Scrollports eingetreten sind). Bei `0%` des Bereichs `exit` wird er deaktiviert (wenn `50%` des nachverfolgten Elements den Scrollport über die gegenüberliegende Blockkante verlassen haben).

```css
timeline-trigger-activation-range: entry 50% exit 0%;
```

Wenden wir dies auf unser erstes Beispiel an, damit Sie den Effekt sehen können. Unser Deklarationsblock für `img` wird wie folgt aktualisiert:

```css live-sample___adjust-range
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 50% exit 0%;
}
```

Die aktualisierte Darstellung sieht so aus:

{{embedlivesample("adjust-range", "100%", 500)}}

Die Animation von `<figcaption>` ist nun etwas nützlicher: Die Bildunterschrift wird erst eingeblendet, wenn ein erheblicher Teil von `<img>` an der Endkante des Scrollports eingetreten ist. Das Ausblenden beginnt, sobald `<img>` anfängt, den Scrollport an dessen Anfangskante zu verlassen. Wenn Sie den Inhalt wieder nach unten scrollen, wird der Auslöser erneut aktiviert und das Einblenden erfolgt wieder an der Anfangskante des Scrollports. Die Deaktivierung erfolgt erneut an dessen Endkante.

## Einen benutzerdefinierten aktiven Bereich festlegen

Der **aktive Bereich** ist der Bereich, in dem ein Auslöser nach seiner Aktivierung aktiv bleibt. Standardmäßig ist er mit dem Aktivierungsbereich identisch. In den bisherigen Beispielen war der Bereich für Aktivierung und Deaktivierung daher derselbe.

Mit den Eigenschaften {{cssxref("timeline-trigger-active-range-start")}} und {{cssxref("timeline-trigger-active-range-end")}} können Sie einen aktiven Bereich festlegen, der vom Aktivierungsbereich abweicht. Alternativ lassen sich beide Werte mit der Kurzschreibweise {{cssxref("timeline-trigger-active-range")}} in einer einzigen Deklaration festlegen.

Das kann sinnvoll sein, um einer Animation mehr Zeit zum Abschluss zu geben – beispielsweise, wenn der Animationsauslöser nur innerhalb eines kleinen Bereichs aktiviert werden, aber über einen größeren Bereich aktiv bleiben soll. Erst wenn das nachverfolgte Element den aktiven Bereich verlässt, wird der Auslöser inaktiv. Danach können Sie ihn erneut aktivieren, indem Sie das Element zurück in den Aktivierungsbereich bewegen.

Erweitern wir unsere bisherigen Beispiele, um die Wirkung des aktiven Bereichs zu zeigen. Das HTML ist gleich geblieben, außer dass wir zwei identische `<figure>`-Elemente mit den Klassen `.one` und `.two` eingefügt haben. Sie werden mithilfe von [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) nebeneinander platziert und erscheinen beziehungsweise verschwinden daher gleichzeitig im sichtbaren Bereich. In beiden Fällen ist `<img>` das nachverfolgte Element für das animierte Geschwisterelement `<figcaption>`.

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

Wir wenden wie in den vorherigen Beispielen dieselbe `animation` auf beide `<figcaption>`-Elemente an. Ihre `animation-trigger`-Werte verweisen jedoch auf zwei unterschiedliche `timeline-trigger-name`-Werte.

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

Für beide `<img>`-Elemente legen wir denselben `timeline-trigger-source` und denselben `timeline-trigger-activation-range` fest. Der `timeline-trigger-name` jedes `<img>`-Elements entspricht einem der beiden unterschiedlichen gestrichelten Bezeichner im vorherigen Codeblock. Damit steuert der auf jedem `<img>` erstellte Auslöser die Animation des jeweils zugehörigen Geschwisterelements `<figcaption>`.

Die Deklaration `timeline-trigger-activation-range: contain 40% contain 60%` bedeutet, dass der Auslöser aktiviert wird – und damit die Animation beginnt –, wenn das nachverfolgte Element einen schmalen Bereich erreicht: die mittleren `20%` des Scrollports. Verlässt das Element diesen schmalen Bereich, wird der Auslöser deaktiviert.

Standardmäßig ist der Aktivierungsbereich mit dem aktiven Bereich identisch. Für das zweite `<img>` legen wir jedoch zusätzlich einen `timeline-trigger-active-range` von `entry 50% exit 100%` fest. Dadurch wird das zweite `<figcaption>` nach dem Einblenden erst wieder ausgeblendet, wenn das zweite `<img>` bis `exit 100%` gescrollt wurde – also den Scrollport vollständig verlassen hat.

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
> Damit `timeline-trigger-active-range` eine Wirkung hat, muss der festgelegte Bereich größer sein als der `timeline-trigger-activation-range`.

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

Das Beispiel wird so dargestellt:

{{embedlivesample("set-active-range", "100%", 500)}}

Scrollen Sie die Bilder in den sichtbaren Bereich und bewegen Sie sie dann vorsichtig auf und ab. Beachten Sie, dass beide Bildunterschriften gleichzeitig eingeblendet werden, ungefähr bei einem Drittel der Höhe der eingebetteten Seite. Die erste Bildunterschrift wird etwas weiter oben ausgeblendet. Die zweite wird dagegen erst ausgeblendet, wenn sie den Scrollport vollständig verlassen hat. Das liegt daran, dass beide `<img>`-Auslöser denselben _Aktivierungsbereich_ haben, während für den zweiten ein wesentlich größerer _aktiver Bereich_ festgelegt ist.

## Die Kurzschreibweise timeline-trigger

Bisher haben wir das CSS für unsere durch Scrollen ausgelösten Animationen mit einer Mischung aus Kurz- und Einzeleigenschaften geschrieben, um die einzelnen Eigenschaften und ihre Werte verständlich zu erklären. Das ist jedoch umständlich und ausführlich. Nachdem Sie die Konzepte kennengelernt haben, können wir mit der Kurzschreibweise {{cssxref("timeline-trigger")}} eine möglichst kurze gleichwertige Variante erstellen. Wahrscheinlich werden Sie diese Kurzschreibweise in künftigen Projekten bevorzugen.

Betrachten wir als Beispiel diese Deklarationen:

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

## Die Aktion einer Animation anpassen

In allen bisherigen Beispielen dieses Leitfadens wurde die Animation `fade-in` ausgelöst, sodass die Bildunterschrift ein- und ausgeblendet wurde. Die Vorwärts- und Rückwärtswiedergabe wird durch die auf dem animierten Element festgelegte Deklaration `animation-trigger` gesteuert:

```css
animation-trigger: --t play-forwards play-backwards;
```

Die Werte `play-forwards` und `play-backwards` vom Typ {{cssxref("animation-action")}} legen fest, dass die Animation bei Aktivierung des Auslösers vorwärts und bei dessen Deaktivierung rückwärts abgespielt wird. Der erste Wert ist die Aktion bei Aktivierung, der zweite die Aktion bei Deaktivierung.

Wenn wir auf demselben Element die folgende `animation`-Deklaration festlegen:

```css
animation: fade-in 1s ease-in both;
```

läuft die Animation bei Aktivierung des Auslösers genau einmal und bei Deaktivierung genau einmal rückwärts. In unserer `animation`-Kurzschreibweise haben wir keinen {{cssxref("animation-iteration-count")}} angegeben. Daher wird der Standardwert `1` verwendet.

Weitere `animation-action`-Werte ermöglichen andere Effekte. Zum Beispiel:

- `play-once` bewirkt, dass die Animation nur einmal abgespielt wird. Nach ihrem Abschluss wird sie bei späteren Aktivierungen oder Deaktivierungen nicht erneut abgespielt.
- `play` bewirkt, dass die Animation in der Richtung abgespielt wird, in der sie zuvor lief. Dagegen beeinflussen `play-forwards` und `play-backwards` die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation: Sie setzen sie auf ihren positiven Absolutwert beziehungsweise auf diesen Absolutwert multipliziert mit `-1`. Dadurch läuft die Animation vorwärts oder rückwärts. Der Wert von {{cssxref("animation-direction")}} bleibt davon unberührt.
- `pause` hält die Animation an. Beispielsweise können Sie die Anzahl der Animationsdurchläufe auf `infinite` und den zugehörigen `animation-trigger` auf `--t play pause` setzen. So wird die Animation bei Aktivierung des Auslösers abgespielt und bei Deaktivierung angehalten.
- `reset` wirkt wie `pause`, setzt aber zusätzlich den Animationsfortschritt auf `0` zurück.

Einige dieser Werte sind für die gemeinsame Verwendung vorgesehen. `play-forwards play-backwards` eignet sich etwa, wenn die Animation je nach Endzustand in entgegengesetzter Richtung laufen soll: Ein UI-Element wird beim Erscheinen auf dem Bildschirm „hineinanimiert“ und beim Verlassen wieder „hinausanimiert“. `play pause` wird dagegen häufig verwendet, um ein Element beim Erscheinen zu animieren und die Animation anzuhalten, sobald es beginnt, den Bildschirm zu verlassen.

Sehen wir uns ein kurzes Beispiel an: Wir ändern unser erstes Beispiel so, dass `<figure>` nur einmal eingeblendet wird, sobald es vollständig in den Scrollport eingetreten ist. Danach wird es erst wieder animiert, wenn die Seite neu geladen wird.

Wir setzen die `animation-action` der Eigenschaft `animation-trigger` auf `play-once`, damit die Animation nur einmal abgespielt wird, wenn `<figure>` erstmals in den Aktivierungsbereich eintritt. Außerdem setzen wir `timeline-trigger-activation-range` auf `contain`, sodass die Animation erst abgespielt wird, wenn `<figure>` vollständig auf dem Bildschirm sichtbar ist. Da sie nur einmal läuft, soll sie nicht unbemerkt bleiben.

```css live-sample___play-once
figure {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-once;

  timeline-trigger: --t view() contain;
}
```

Das Beispiel wird so dargestellt:

{{embedlivesample("play-once", "100%", 500)}}

Wenn Sie `<figure>` zum ersten Mal in den sichtbaren Bereich scrollen, wird es eingeblendet. Danach bleibt es bei `100%` Deckkraft, unabhängig davon, wie oft Sie es im Scrollport auf und ab bewegen. Ein erneutes Einblenden ist nur möglich, wenn Sie die Seite aktualisieren (oder das `<iframe>` des eingebetteten Beispiels neu laden).

## Geltungsbereich von Auslösern

Wenn mehrere Auslöser denselben `timeline-trigger-name` verwenden, werden sie aufgrund der Art, wie der [Browser Auslöser standardmäßig ermittelt](/de/docs/Web/CSS/Reference/Properties/trigger-scope#description), dem letzten Element in der HTML-Quellreihenfolge zugeordnet, das diesen `timeline-trigger-name`-Wert besitzt. Dieses Verhalten ist vermutlich nicht erwünscht.

Enthält ein Dokument beispielsweise mehrere wiederholte Komponenten mit jeweils einer durch Scrollen ausgelösten Animation, bei der das animierte und das nachverfolgte Element verschieden sind, werden die Animationen aller animierten Elemente durch den Auslöser der letzten Komponente gesteuert. Das können Sie verhindern, indem Sie in jeder Komponente einen anderen `timeline-trigger-name` verwenden oder den Geltungsbereich des Namens auf einen Teilbaum beschränken.

Die Eigenschaft {{cssxref("trigger-scope")}} begrenzt die Sichtbarkeit – den „Geltungsbereich“ – eines `timeline-trigger-name`-Werts auf einen bestimmten Teilbaum. Dadurch kann die Animation eines Elements nur durch einen Auslöser gestartet werden, der innerhalb desselben Teilbaums erstellt wurde. Einzelheiten zur Funktionsweise und ein [Beispiel zu `trigger-scope`](/de/docs/Web/CSS/Reference/Properties/trigger-scope#examples) finden Sie auf der Referenzseite zu `trigger-scope`.

## Mehrere durch Scrollen ausgelöste Animationen

In den bisherigen Beispielen haben wir jeweils nur eine durch Scrollen ausgelöste Animation auf einem Element festgelegt. Alle in diesem Leitfaden behandelten Eigenschaften `animation-*` und `timeline-trigger-*` akzeptieren jedoch eine kommagetrennte Werteliste. Damit lassen sich mehrere Animationen durch mehrere Auslöser steuern. In diesem Abschnitt erstellen wir ein etwas komplexeres Beispiel mit mehreren durch Scrollen ausgelösten Animationen auf demselben Element.

Die Eigenschaft {{cssxref("animation-trigger")}} verhält sich beim Festlegen [mehrerer Werte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) genauso wie die Kurzschreibweise {{cssxref("animation")}} und die anderen Animationseinzeleigenschaften. Sind mehrere `animation-name`-Werte, aber nur ein `animation-trigger`-Wert festgelegt, gilt dieser für alle Animationen. Sind zwei `animation-trigger`-Werte festgelegt, werden sie der Reihe nach wiederholt, bis jeder Animation ein `animation-trigger`-Wert zugeordnet ist. Entsprechendes gilt für weitere Werte.

In diesem Beispiel wird ein Element schrittweise animiert: Beim Scrollen der Seite werden durch neue Auslöser weitere Animationen aktiviert. Zunächst gleitet das Element vom rechten Bildschirmrand herein. Anschließend wird sein Inhalt sichtbar. Danach gleitet es auf dem Bildschirm nach unten und ändert seine Hintergrundfarbe.

Das HTML ähnelt den vorherigen Beispielen. Zusätzlich enthält es am Anfang ein Element {{htmlelement("section")}} mit hervorgehobenem Inhalt sowie einige leere {{htmlelement("div")}}-Elemente zwischen den übrigen Inhalten. Auf diesen definieren wir Auslöser für die Animationen.

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

Anfangs befindet sich das hervorgehobene `<section>` außerhalb des sichtbaren Bildschirms. Unser CSS gestaltet zunächst das Element `<section>`: Wir setzen seine Eigenschaft {{cssxref("position")}} auf `fixed` und positionieren es nahe der linken oberen Ecke des Scrollports. Außerdem definieren wir die Ausgangsstile, von denen aus die Animationen beginnen und zu denen sie zurückkehren. Anschließend legen wir drei {{cssxref("animation")}}-Werte fest: Sie lassen `<section>` mit `slide-from-right` hereingleiten, machen dann mit `reveal` seinen Inhalt sichtbar und bewegen es schließlich mit `slide-down` auf dem Bildschirm nach unten, wobei sich die Hintergrundfarbe ändert. Für jede Animation legen wir zudem einen `animation-trigger` fest, damit unterschiedliche Auslöser sie aktivieren.

Der Endzustand jeder Animation soll nach seinem Erreichen bestehen bleiben. Deshalb müssen wir geeignete {{cssxref("animation-fill-mode")}}-Werte für die Animationen und `<animation-action>`-Werte für die `animation-trigger`-Werte festlegen. Für die letzte Animation mussten wir `animation-fill-mode` auf `forwards` statt auf `both` setzen, da es keinen `from`-Keyframe gibt.

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

Als Nächstes erstellen wir Auslöser auf den `<div>`-Elementen. Ihre {{cssxref("timeline-trigger-name")}}-Werte entsprechen den Bezeichnern in den `animation-trigger`-Werten des `<section>`-Elements. Dadurch wird beim Scrollen jedes Mal eine andere Animation aktiviert, wenn eines der nachverfolgten `<div>`-Elemente in den Scrollport eintritt. In diesem Fall sind die nachverfolgten Elemente unsichtbar: Sie enthalten keinen relevanten Inhalt und dienen ausschließlich als Auslöser.

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

Abschließend definieren wir mit {{cssxref("@keyframes")}} die Animationen, auf die zuvor in der Eigenschaft `animation` des Elements `<section>` verwiesen wurde.

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

Scrollen Sie vorsichtig durch das Beispiel und beobachten Sie, wie die einzelnen Animationen auf `<section>` angewendet werden, sobald das jeweilige `<div>` erreicht wird.

### Mehrere Auslöser für dieselbe Animation

Wenn Sie für ein animiertes Element Auslöser auf mehreren verschiedenen Elementen definieren möchten, die alle dieselbe Animation auslösen, müssen Sie die benannte Animation auf dem animierten Element mehrfach angeben. Anschließend weisen Sie jeder Instanz dieser Animation einen anderen Auslöser zu. Weitere Informationen finden Sie unter [Mehrere Auslöser für dieselbe Animation](/de/docs/Web/CSS/Reference/Properties/animation-trigger#multiple_triggers_for_the_same_animation).

## Siehe auch

- Modul [Auslöser für CSS-Animationen](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- Modul [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Durch Scrollen ausgelöste CSS-Animationen kommen!](https://developer.chrome.com/blog/scroll-triggered-animations) auf developer.chrome.com (2025)
