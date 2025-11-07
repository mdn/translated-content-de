---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 011212609ed5fa7cf7e7994fc974d1bbab90c68e
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie man Ansichtenübergänge erstellt und die Übergangsanimationen anpasst, sowie wie man aktive Ansichtenübergänge manipuliert. Dies umfasst Ansichtenübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Ansichtenübergangsprozess

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtenübergang funktioniert:

1. Ein Ansichtenübergang wird ausgelöst. Wie dies erfolgt, hängt von der Art des Ansichtenübergangs ab:
   - Im Falle von Übergängen im selben Dokument (SPAs) wird ein Ansichtenübergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung der Ansichtsauslösung verursachen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Falle von dokumentübergreifenden Übergängen (MPAs) wird ein Ansichtenübergang ausgelöst, indem die Navigation zu einem neuen Dokument initiiert wird. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen demselben Ursprung angehören und sich durch Einfügen einer {{cssxref("@view-transition")}}-Regel in ihrem CSS mit einem `navigation`-Deskriptor von `auto` für den Ansichtenübergang anmelden.
     > [!NOTE]
     > Ein aktiver Ansichtenübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel, die von `startViewTransition()` im Falle von Übergängen im selben Dokument (SPA) zurückgegeben wird). Das `ViewTransition`-Objekt enthält mehrere Versprechen, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Ansichtenübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuern von Ansichtenübergängen mit JavaScript](#steuern_von_ansichtenübergängen_mit_javascript).
2. Auf der aktuellen (alten) Ansicht erfasst die API statische Bild-**Schnappschüsse** von Elementen, die einen {{cssxref("view-transition-name")}} deklariert haben.
3. Die Ansichtsänderung tritt ein:
   - Im Falle von Übergängen im selben Dokument (SPAs) wird der an `startViewTransition()` übergebene Callback aufgerufen, was dazu führt, dass sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Versprechen [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, was es Ihnen ermöglicht, auf die Aktualisierung des DOMs zu reagieren.

   - Im Falle von dokumentübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen den aktuellen und den Zieldokumenten.

4. Die API erfasst "Live"-Schnappschüsse (d.h. interaktive DOM-Regionen) aus der neuen Ansicht.

   An diesem Punkt ist der Ansichtenübergang dabei zu starten, und das Versprechen [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, was es Ihnen ermöglicht, als Reaktion zum Beispiel eine benutzerdefinierte JavaScript-Animation statt der Standardanimation auszuführen.

5. Die alten Ansichtsschnappschüsse animieren "hinaus", während die neuen Ansichtsschnappschüsse "hinein" animieren. Standardmäßig animieren die alten Ansichtsschnappschüsse von {{cssxref("opacity")}} 1 auf 0 und die neuen Ansichtsschnappschüsse von `opacity` 0 auf 1, was einen Kreuzblenden-Effekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das Versprechen [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, was es Ihnen ermöglicht, zu reagieren.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtenübergang vollständig übersprungen.

### Ein Exkurs zu Schnappschüssen

Es lohnt sich zu erwähnen, dass wir beim Sprechen über Ansichtenübergänge den Begriff _Schnappschuss_ verwenden, um einen Teil der Seite zu bezeichnen, auf dem ein `view-transition-name` deklariert ist. Diese Abschnitte werden separat von anderen Teilen der Seite mit unterschiedlichen `view-transition-name`-Werten animiert. Während der Prozess der Animation eines Schnappschusses durch einen Ansichtenübergang tatsächlich zwei separate Schnappschüsse umfasst – einen der alten und einen der neuen Benutzeroberflächenzustand – verwenden wir "Schnappschuss" der Einfachheit halber, um den gesamten Bereich der Seite zu bezeichnen.

Der Schnappschuss des alten Benutzeroberflächenzustands ist ein statisches Bild, sodass der Benutzer nicht damit interagieren kann, während er "hinaus" animiert.

Der Schnappschuss des neuen Benutzeroberflächenzustands ist eine interaktive DOM-Region, sodass der Benutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während er "hinein" animiert.

### Der Ansichtenübergangs-Pseudoelementbaum

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudoelementbaum mit folgender Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Falle von Übergängen im selben Dokument (SPAs) wird der Pseudoelementbaum im Dokument verfügbar gemacht. Im Falle von dokumentübergreifenden Übergängen (MPAs) wird der Pseudoelementbaum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel der Ansichtenübergangsüberlagerung, die alle Ansichtenübergangsgruppen enthält und über allen anderen Seiteninhalten sitzt.
- Ein {{cssxref("::view-transition-group()")}} fungiert als Container für jeden Ansichtenübergangsschnappschuss. Das `root`-Argument gibt den Standardschnappschuss an – die Ansichtenübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Schnappschuss des {{cssxref(":root")}}-Elements, da die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Seien Sie jedoch darauf gefasst, dass Seitenautoren dies ändern können, indem sie das obige zurücksetzen und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Schnappschuss des alten Seitenelements ab, und {{cssxref("::view-transition-new()")}} zielt auf den Live-Schnappschuss des neuen Seitenelements ab. Beide werden als ersetzte Inhalte dargestellt, ähnlich wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestaltet werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtenübergangsanimationen zu zielen, indem auf jedem ein anderes {{cssxref("view-transition-name")}} gesetzt wird. In solchen Fällen wird für jedes eines `::view-transition-group()` erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen anzupassen, die Pseudoelemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} respektive mit Ihren Animationen anvisieren.

## Erstellen eines grundlegenden Ansichtenübergangs

Dieser Abschnitt veranschaulicht, wie man einen grundlegenden Ansichtenübergang in beiden Fällen, SPA und MPA, erstellt.

### Grundlegender SPA-Ansichtenübergang

Eine SPA kann Funktionalität enthalten, um neuen Inhalt abzurufen und das DOM als Reaktion auf ein Ereignis zu aktualisieren, beispielsweise wenn ein Navigationslink angeklickt wird oder ein Update vom Server eingespielt wird.

Unser [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine grundlegende Bildergalerie. Wir haben eine Reihe von {{htmlelement("a")}}-Elementen, die Thumbnail-{{htmlelement("img")}}-Elemente enthalten, die dynamisch mit JavaScript generiert werden. Wir haben auch ein {{htmlelement("figure")}}-Element, das ein {{htmlelement("figcaption")}} und ein `<img>` enthält, welches die Bilder in Originalgröße der Galerie darstellt.

Wenn ein Thumbnail angeklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, was dazu führt, dass das Bild in Originalgröße und die zugehörige Beschriftung im `<figure>` angezeigt werden. Wir haben dies in eine Funktion `updateView()` gekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

Dieser Code reicht aus, um den Übergang zwischen den angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Beschriftungen als sanfte Überblendung (der Standardansichtenübergang). Es funktioniert auch in nicht unterstützenden Browsern, jedoch ohne die schöne Animation.

### Grundlegender MPA-Ansichtenübergang

Wenn Sie einen dokumentübergreifenden (MPA) Ansichtenübergang erstellen, ist der Prozess noch einfacher als bei SPAs. Es ist kein JavaScript erforderlich, da die Ansichtsaktualisierung von einer dokumentübergreifenden Navigation mit demselben Ursprung und nicht von einer durch JavaScript initiierten DOM-Änderung ausgelöst wird. Um einen grundlegenden MPA-Ansichtenübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}}-Regel in das CSS sowohl für das aktuelle als auch das Zieldokument aufnehmen, um sie zu aktivieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie man die [ausgehenden und eingehenden Animationen](#anpassen_der_animationen) des Ansichtenübergangs anpassen kann.

> [!NOTE]
> Derzeit können MPA-Ansichtenübergänge nur zwischen Dokumenten mit demselben Ursprung erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen der Animationen

Die Pseudoelemente der View Transitions haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) beschrieben sind).

Die meisten Erscheinungsübergänge erhalten standardmäßig eine sanfte Crossfade-Animation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge erhalten eine sanfte Skalierungsanimation.
- `position`- und `transform`-Übergänge erhalten eine sanfte Bewegungsanimation.

Sie können die Standardanimationen in jeder gewünschten Weise mit regulärem CSS ändern — zielen Sie mit {{cssxref("::view-transition-old()")}} auf die "von"-Animation und mit {{cssxref("::view-transition-new()")}} auf die "zu"-Animation.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie in Fällen, in denen Sie möchten, dass sie auf `::view-transition-old()` und `::view-transition-new()` angewendet werden, den `::view-transition-group()` mit solchen Stilen anvisieren. Aufgrund der Pseudoelementhierarchie und der Standardbenutzeragent-Styling werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Möglichkeit, Ihren Code abzusichern – `::view-transition-group()` animiert ebenfalls und Sie könnten unterschiedliche Dauern für die `group`/`image-pair`-Pseudoelemente im Vergleich zu den `old`- und `new`-Pseudoelementen haben.

Im Falle von dokumentübergreifenden (MPA) Übergängen müssen die Pseudoelemente nur im Zieldokument enthalten sein, damit der Ansichtenübergang funktioniert. Wenn Sie den Ansichtenübergang in beide Richtungen verwenden möchten, müssen Sie ihn in beiden aufnehmen.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, geht aber noch einen Schritt weiter, indem benutzerdefinierte Animationen definiert und auf die Pseudoelemente `::view-transition-old(root)` und `::view-transition-new(root)` angewendet werden. Das Ergebnis ist, dass die Standardüberblendung durch einen "Wischen nach oben"-Übergang bei der Navigation ersetzt wird:

```css
/* Create a custom animation */

@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Apply the custom animation to the old and new page states */

::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

## Verschiedene Animationen für verschiedene Elemente

Standardmäßig werden alle verschiedenen Elemente, die sich während der Ansichtsaktualisierung ändern, mit derselben Animation übergangen. Wenn Sie möchten, dass einige Elemente anders animiert werden als die Standard-`root`-Animation, können Sie sie mithilfe der Eigenschaft {{cssxref("view-transition-name")}} trennen. Beispielsweise werden in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) den {{htmlelement("figcaption")}}-Elementen ein `view-transition-name` von `figure-caption` zugewiesen, um sie in Bezug auf Ansichtenübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der generierte Pseudoelementbaum jetzt so aus:

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

Das Vorhandensein des zweiten Satzes von Pseudoelementen ermöglicht es, eine separate Ansichtenübergangsgestaltung nur auf das `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Ansichtserfassungen werden separat voneinander behandelt.

Der folgende Code wendet nur auf das `<figcaption>` eine benutzerdefinierte Animation an:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und auf die Pseudoelemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie an derselben Stelle zu halten und zu verhindern, dass die Standardgestaltung unsere benutzerdefinierten Animationen beeinträchtigt.

> [!NOTE]
> Sie können `*` als Kennung in einem Pseudoelement verwenden, um alle Schnappschusspseudoelemente anzusprechen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name`-Werte

Die Eigenschaft `view-transition-name` kann einen einzigartigen {{cssxref("custom-ident")}} Wert annehmen, der jeder Bezeichner sein kann, der nicht als Schlüsselwort fehlinterpretiert werden würde. Der Wert von `view-transition-name` für jedes gerenderte Element muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Es kann auch Schlüsselwertkennungen annehmen:

- `none`: Verursacht, dass das Element nicht an einem separaten Schnappschuss teilnimmt, es sei denn, es hat ein Elternelement mit einem gesetzten `view-transition-name`, in welchem Fall es als Teil dieses Elements als Schnappschuss erfasst wird.
- `match-element`: Setzt automatisch einzigartige `view-transition-name`-Werte auf alle ausgewählten Elemente.

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher war und ein schöneres Ergebnis als das obenstehende produzierte. Unser letztendlicher `<figcaption>`-Ansichtenübergang sah so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer glatten Skalierung überblendet. Wir mussten lediglich eine feste `height` auf beiden Zuständen setzen, um es funktionsfähig zu machen.

> [!NOTE]
> [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuern von Ansichtenübergängen mit JavaScript

Ein Ansichtenübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Übergangszustände auszuführen. Beispielsweise wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudoelementbaum erstellt und die Animation kurz vor dem Start steht, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation beendet ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann folgendermaßen zugegriffen werden:

1. Über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) Eigenschaft. Dies bietet eine konsistente Möglichkeit, auf den aktiven Ansichtenübergang in jedem Kontext zuzugreifen, ohne dass Sie sich darum kümmern müssen, ihn für einen späteren einfachen Zugriff zu speichern.
2. Im Falle von Übergängen im selben Dokument (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den mit dem Übergang verbundenen `ViewTransition` zurück.
3. Im Falle von dokumentübergreifenden (MPA) Übergängen:
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Das Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf den `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Zieldokumentverlaufseinträge enthält.
     > [!NOTE]
     > Wenn die Navigation irgendwo in der Weiterleitungskette eine cross-origin URL hat, gibt die Eigenschaft `activation` `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}). Das Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent))) bietet Zugriff auf den `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Lassen Sie uns einige Beispielcodes betrachten, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein von JavaScript gesteuerter benutzerdefinierter Übergang im selben Dokument (SPA)

Das folgende JavaScript könnte verwendet werden, um einen kreisförmigen Ansichtenübergang zu erstellen, der von der Position des Benutzercursors beim Klicken ausgeht, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

```js
// Store the last click event
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Create a transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root's new view
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alte und neue Ansichtszustände in irgendeiner Weise ineinander übergehen (der neue Zustand "wischt" direkt über den alten Zustand und nicht durch Übergang):

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

### Ein von JavaScript gesteuerter benutzerdefinierter dokumentübergreifender (MPA) Übergang

Das [Verzeichnis der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Sammlung von Teamprofilseiten und zeigt, wie die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse genutzt werden, um die hinausgehenden und eingehenden Animationen eines dokumentübergreifenden Ansichtenübergangs basierend auf den "von" und "zu" URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignislistener sieht folgendermaßen aus. Dies setzt Ansichtenübergangsnamen auf den Elementen der ausgehenden Seite, die zu den Profilseiten verlinken. Bei der Navigation von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen bereitgestellt, die jeweils nur für das verlinkte Element gelten, das angeklickt wird.

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Wir entfernen die `view-transition-name` Werte, nachdem die Schnappschüsse in jedem Fall erstellt wurden. Wenn wir sie gesetzt lassen würden, würden sie im gespeicherten Seitenzustand im {{Glossary("bfcache", "bfcache")}} nach der Navigation bestehen bleiben. Wenn dann die Zurück-Taste gedrückt würde, würde der `pagereveal`-Ereignis-Handler der Seite, zu der zurücknavigiert wird, versuchen, dieselben `view-transition-name` Werte auf anderen Elementen zu setzen. Wenn mehrere Elemente denselben `view-transition-name` Wert gesetzt haben, wird der Ansichtenübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener sieht folgendermaßen aus. Dies funktioniert auf ähnliche Weise wie der `pageswap`-Ereignis-Listener, wobei jedoch zu beachten ist, dass wir hier die "zu"-Animation für Seiteninhalte auf der neuen Seite anpassen.

```js
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## Stabilisierung des Seitenzustands, um dokumentübergreifende Übergänge konsistent zu machen

Bevor Sie einen dokumentübergreifenden Übergang ausführen, sollten Sie idealerweise warten, bis sich der Seitenzustand stabilisiert, indem Sie auf {{Glossary("Render_blocking", "Render-Blocking")}} setzen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet wurden.
2. Kritische Skripte geladen und ausgeführt wurden.
3. Das HTML, das für die anfängliche Ansicht des Benutzers der Seite sichtbar ist, analysiert wurde, sodass es konsistent gerendert wird.

Stile werden standardmäßig render-blockiert, es sei denn, sie werden dynamisch über ein Skript zum Dokument hinzugefügt. Sowohl Skripte als auch dynamisch hinzugefügte Stile können mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) render-blockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und immer konsistent gerendert wird, bevor die Übergangsanimation läuft, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element fügen Sie die folgenden Attribute ein:

- `rel="expect"`, um anzuzeigen, dass Sie dieses `<link>`-Element verwenden möchten, um das Rendern einiger HTML-Inhalte auf der Seite zu blockieren.
- `href="#element-id"`, um die ID des Elements anzugeben, dessen Rendern Sie blockieren möchten.
- `blocking="render"`, um das angegebene HTML-Rendering zu blockieren.

> [!NOTE]
> Um das Rendering zu blockieren, müssen sich `script`, `link` und `style` Elemente mit `blocking="render"` im `head` des Dokuments befinden.

Lassen Sie uns sehen, wie dies mit einem Beispiel-HTML-Dokument aussieht:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async src="layout.js" blocking="render"></script>

    <!-- Use rel="expect" and blocking="render" to ensure the
         #lead-content element is visible and fully parsed before
         activating the transition -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>Page title</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">The first section</section>
      <section>The second section</section>
    </div>
  </body>
</html>
```

Das Ergebnis ist, dass das Dokument-Rendering blockiert wird, bis das führende Inhalts-`<div>` analysiert wurde, was einen konsistenten Ansichtenübergang sicherstellt.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Beispielsweise möchten Sie möglicherweise das Rendering auf einer kleineren Menge von Inhalten blockieren, wenn die Seite auf einem Gerät mit schmalem Bildschirm geladen wird, als auf einem Breitbildgerät. Das macht Sinn – auf einem Mobilgerät wird weniger Inhalt sichtbar sein, wenn die Seite erstmals geladen wird, als im Fall eines Desktops.

Dies könnte mit dem folgenden HTML erreicht werden:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (width > 640px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (width <= 640px)" />
```
