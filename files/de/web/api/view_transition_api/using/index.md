---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst sowie wie aktive Ansichtsübergänge manipuliert werden können. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Prozess des Ansichtsübergangs

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt von der Art des Ansichtsübergangs ab:
   - Im Falle von Same-Document-Übergängen (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die DOM-Änderung auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Bei Cross-Document-Übergängen (MPAs) wird ein Ansichtsübergang durch die Initiierung der Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen sich im gleichen Ursprung befinden und in den Ansichtsübergang einwilligen, indem sie in ihrem CSS eine {{cssxref("@view-transition")}} at-Regel mit einem `navigation` Deskriptor von `auto` enthalten.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel zurückgegeben von `startViewTransition()` im Falle von Same-Document (SPA) Übergängen). Das `ViewTransition`-Objekt enthält mehrere Versprechen, die Ihnen erlauben, Code als Antwort auf verschiedene Teile des Ansichtsübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuerung von Ansichtsübergängen mit JavaScript](#steuerung_von_ansichtsübergängen_mit_javascript).
2. Im aktuellen (alten Seiten-) Ansicht erfasst die API statische Bild-**Schnappschüsse** von Elementen, die eine {{cssxref("view-transition-name")}} deklariert haben.
3. Der Ansichtswechsel findet statt:

   - Bei Same-Document-Übergängen (SPAs) wird der Callback, der an `startViewTransition()` übergeben wurde, aufgerufen, wodurch sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Versprechen [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, was Ihnen ermöglicht, auf die DOM-Aktualisierung zu reagieren.

   - Bei Cross-Document-Übergängen (MPAs) erfolgt die Navigation zwischen den aktuellen und Zieldokumenten.

4. Die API erfasst "Live"-Schnappschüsse (das bedeutet, interaktive DOM-Bereiche) aus der neuen Ansicht.

   An diesem Punkt steht der Ansichtsübergang kurz bevor und das Versprechen [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, was Ihnen ermöglicht, anstelle der Standardeinstellung eine benutzerdefinierte JavaScript-Animation auszuführen.

5. Die alten Seiten-Schnappschüsse animieren "heraus", während die neuen Ansichts-Schnappschüsse "hinein" animieren. Standardmäßig animieren die alten Ansichts-Schnappschüsse von {{cssxref("opacity")}} 1 auf 0 und die neuen Ansichts-Schnappschüsse von `opacity` 0 auf 1, was einen Überblendeffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das Versprechen [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, was Ihnen ermöglicht, zu reagieren.

> [!NOTE]
> Wenn der [Seitensichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `versteckt` ist (zum Beispiel wenn das Dokument durch ein Fenster verdeckt wird, der Browser minimiert ist oder ein anderes Browsertab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Ein Hinweis zu Schnappschüssen

Es ist erwähnenswert, dass wir beim Sprechen über Ansichtsübergänge üblicherweise den Begriff _Schnappschuss_ verwenden, um sich auf einen Teil der Seite zu beziehen, der eine `view-transition-name` deklariert hat. Diese Abschnitte werden separat von anderen Teilen der Seite mit unterschiedlichen `view-transition-name`-Werten animiert. Während der Prozess der Animation eines Schnappschusses über einen Ansichtsübergang tatsächlich zwei separate Schnappschüsse umfasst - einen des alten und einen des neuen UI-Zustands - verwenden wir den Begriff Schnappschuss, um den gesamten Seitenbereich der Einfachheit halber zu bezeichnen.

Der Schnappschuss des alten UI-Zustands ist ein statisches Bild, sodass der Benutzer nicht damit interagieren kann, während es "heraus" animiert.

Der Schnappschuss des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Benutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während es "hinein" animiert.

### Der pseudo-element Baum des Ansichtsübergangs

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudo-Element-Baum mit folgender Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Falle von Same-Document-Übergängen (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Im Falle von Cross-Document-Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel der Ansichtsübergangs-Überlagerung, die alle Ansichtsübergangsgruppen enthält und oberhalb aller anderen Seiteninhalte liegt.
- Eine {{cssxref("::view-transition-group()")}} fungiert als Container für jeden Ansichtsübergangs-Schnappschuss. Das `root`-Argument spezifiziert den Standard-Schnappschuss — die Ansichtsübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Schnappschuss des {{cssxref(":root")}} Elements, da die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das Obige entfernen und `view-transition-name: root` auf ein anderes Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Schnappschuss des alten Seitenelements ab, und {{cssxref("::view-transition-new()")}} zielt auf den Live-Schnappschuss des neuen Seitenelements ab. Beide werden als ersetzter Inhalt gerendert, auf die gleiche Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, unterschiedliche DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen zu targetieren, indem man ihnen jeweils unterschiedliche {{cssxref("view-transition-name")}} zuweist. In solchen Fällen wird für jedes eine `::view-transition-group()` erstellt. Sehen Sie [Unterschiedliche Animationen für verschiedene Elemente](#unterschiedliche_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen anzupassen, die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudo-Elemente mit Ihren Animationen targetieren.

## Erstellen eines grundlegenden Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie man einen grundlegenden Ansichtsübergang erstellt, sowohl im SPA- als auch im MPA-Fall.

### Grundlegender SPA-Ansichtsübergang

Eine SPA kann Funktionalität beinhalten, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis jedweder Art zu aktualisieren, zum Beispiel wenn ein Navigationslink angeklickt wird oder ein Update vom Server empfangen wird.

Unser [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine grundlegende Bildergalerie. Wir haben eine Serie von {{htmlelement("a")}}-Elementen, die Miniatur-{{htmlelement("img")}}-Elemente enthalten, die dynamisch mit JavaScript generiert werden. Wir haben auch ein {{htmlelement("figure")}}-Element, das eine {{htmlelement("figcaption")}} und ein `<img>` enthält, welche die Bilder der Galerie in voller Größe anzeigen.

Wenn auf ein Miniaturbild geklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, wodurch das Bild in voller Größe und die zugehörige Legende innerhalb des `<figure>` angezeigt werden. Wir haben dies in eine `updateView()` Funktion gekapselt, die die View Transition API nur dann aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Legenden als sanfte Überblendung (den Standardansichtsübergang) an. Es wird auch in nicht-unterstützenden Browsern funktionieren, jedoch ohne die schöne Animation.

### Grundlegender MPA-Ansichtsübergang

Wenn Sie einen Cross-Document (MPA) Ansichtsübergang erstellen, ist der Prozess noch einfacher als für SPAs. Es ist kein JavaScript erforderlich, da die Ansichtsaktualisierung durch eine Cross-Document-Navigation mit gleichem Ursprung ausgelöst wird, anstatt durch eine JavaScript-initierte DOM-Änderung. Um einen grundlegenden MPA-Ansichtsübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}} at-Regel im CSS sowohl für die aktuellen als auch für die Zieldokumente spezifizieren, um diese zu aktivieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese at-Regel in Aktion und demonstriert zusätzlich, wie Sie die [ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des Ansichtsübergangs anpassen können.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen Dokumenten mit gleichem Ursprung erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die View Transitions Pseudo-Elemente haben Standard-[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), die angewendet werden (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert sind).

Die meisten Erscheinungsüberblendungen erhalten die oben erwähnte standardmäßige sanfte Überblendungsanimation. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge erhalten eine sanfte Skalierungsanimation.
- `position` und `transform` Übergänge erhalten eine sanfte Bewegungsanimation.

Sie können die Standardanimationen in beliebiger Weise mit regulärem CSS ändern – targetieren Sie die "from" Animation mit {{cssxref("::view-transition-old()")}} und die "to" Animation mit {{cssxref("::view-transition-new()")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, das `::view-transition-group()` mit solchen Stilen zu targetieren, wenn Sie diese auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der Standard-Benutzer-Agent-Stilierung, werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu sichern - `::view-transition-group()` animiert ebenfalls und Sie könnten am Ende unterschiedliche Dauern für die `group`/`image-pair` Pseudo-Elemente gegenüber den `old` und `new` Pseudo-Elementen haben.

Im Falle von Cross-Document (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn in beiden enthalten.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben genannte CSS, geht jedoch einen Schritt weiter in der Anpassung und definiert benutzerdefinierte Animationen, die auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente angewendet werden. Das Ergebnis ist, dass der Standardüberblendungsübergang durch einen "swipe up" Übergang ersetzt wird, wenn die Navigation erfolgt:

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

## Unterschiedliche Animationen für verschiedene Elemente

Standardmäßig werden alle verschiedenen Elemente, die sich während der Ansichtsaktualisierung ändern, mit der gleichen Animation übergangslos dargestellt. Wenn Sie möchten, dass einige Elemente anders als die Standard-`root`-Animation animiert werden, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel, in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/), werden die {{htmlelement("figcaption")}}-Elemente mit einem `view-transition-name` von `figure-caption` versehen, um sie von dem Rest der Seite in Bezug auf Ansichtsübergänge zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der generierte Pseudo-Element-Baum jetzt so aus:

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

Die Existenz des zweiten Satzes von Pseudo-Elementen ermöglicht es, separate Ansichtsübergang-Stylings nur auf das `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Ansichtsaufnahmen werden separat voneinander behandelt.

Der folgende Code wendet eine benutzerdefinierte Animation nur auf das `<figcaption>` an:

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Anzahl anderer Stile auf beide hinzugefügt, um sie am gleichen Ort zu halten und die Standard-Stilisierung davon abzuhalten, mit unseren benutzerdefinierten Animationen zu interferieren.

> [!NOTE]
> Sie können `*` als Identifikator in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente zu targetieren, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name` Werte

Die `view-transition-name`-Eigenschaft kann einen eindeutigen {{cssxref("custom-ident")}} Wert annehmen, der jeder Bezeichner sein kann, der nicht als Schlüsselwort fehlinterpretiert werden würde. Der Wert von `view-transition-name` für jedes gerenderte Element muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit den gleichen `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Es kann auch Schlüsselwortwerte annehmen von:

- `none`: Führt dazu, dass das Element nicht an einem separaten Schnappschuss teilnimmt, es sei denn, es hat ein Elternelement mit einem `view-transition-name` gesetzt, in diesem Fall wird es als Teil dieses Elements fotografiert.
- `match-element`: Setzt automatisch eindeutige `view-transition-name` Werte auf alle ausgewählten Elemente.

### Nutzung der Standard-Animation Styles

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als oben erzeugte. Unser endgültiger `<figcaption>` Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Das funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer glatten Skalierung übergeht. Wir mussten nur eine feste `height` in beiden Zuständen setzen, um es zum Laufen zu bringen.

> [!NOTE] > [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuerung von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des erreichten Übergangs auszuführen. Zum Beispiel wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudo-Element-Baum erstellt und die Animation kurz vor dem Start steht, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Die `ViewTransition` kann wie folgt aufgerufen werden:

1. Über die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition). Dies bietet eine konsistente Möglichkeit, um in jedem Kontext auf den aktiven Ansichtsübergang zuzugreifen, ohne sich Sorgen machen zu müssen, ihn für einen späteren einfachen Zugriff speichern zu müssen.
2. Im Fall von Same-Document (SPA) Übergängen gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) die `ViewTransition` zurück, die mit dem Übergang verbunden ist.
3. Im Fall von Cross-Document (MPA) Übergängen:
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Das Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) sowie eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Ziel-Dokumentverlaufs-Einträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine Cross-Origin-URL in der Umleitungskette hat, gibt die `activation`-Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}). Das Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Lassen Sie uns ein Beispielcode anschauen, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter Same-Document (SPA) Übergang

Das folgende JavaScript könnte verwendet werden, um eine kreisförmige Enthüllung-Ansichtsübergang zu erstellen, die von der Position des Benutzer-Cursors bei Klick ausgeht, mit Animation, die durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichts-Zustände in irgendeiner Weise ineinander übergehen (der neue Zustand "wischt" direkt über den alten Zustand, anstatt hineinzutransitionieren):

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

### Ein JavaScript-gesteuerter benutzerdefinierter Cross-Document (MPA) Übergang

Das [List of Chrome DevRel team members](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet einen grundlegenden Satz von Teamprofilseiten und demonstriert, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet, um die ausgehenden und eingehenden Animationen eines Cross-Document Ansichtsübergangs basierend auf den "from" und "to" URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis-Listener sieht wie folgt aus. Dies setzt Ansichtsübergangsnamen auf den Elementen der ausgehenden Seite, die zu den Profilerseiten linken. Wenn man von der Startseite zu einer Profilseite navigiert, werden benutzerdefinierte Animationen _nur_ für das verlinkte Element zur Verfügung gestellt, das in jedem Fall geklickt wird.

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
> Wir entfernen die `view-transition-name` Werte, nachdem in jedem Fall Schnappschüsse gemacht wurden. Wenn wir sie gesetzt ließen, würden sie im Seitenzustand, der beim Navigieren im {{Glossary("bfcache", "bfcache")}} gespeichert wird, bestehen bleiben. Wenn dann die Zurück-Taste gedrückt würde, würde der `pagereveal` Ereignis-Handler der Seite, zu der zurück navigiert wird, versuchen, die gleichen `view-transition-name` Werte auf andere Elemente zu setzen. Wenn mehrere Elemente den gleichen `view-transition-name` gesetzt haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener sieht wie folgt aus. Dies funktioniert auf ähnliche Weise wie der `pageswap` Ereignis-Listener, obwohl man bedenken sollte, dass wir hier die "to" Animation für Seitenelemente auf der neuen Seite anpassen.

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

## Stabilisierung des Seitenzustands, um Cross-Document-Übergänge konsistent zu machen

Bevor Sie einen Cross-Document-Übergang ausführen, sollten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist, indem Sie {{Glossary("Render_blocking", "render blocking")}} verwenden, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML für die erste Ansicht des Benutzers auf der Seite geparst wurde, sodass es konsistent gerendert wird.

Stile werden standardmäßig gerendert blockiert, es sei denn, sie werden dynamisch über Skript dem Dokument hinzugefügt. Sowohl Skripte als auch dynamisch hinzugefügte Stile können mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) Attribut gerendert blockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML geparst wurde und immer konsistent gerendert wird, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element fügen Sie die folgenden Attribute ein:

- `rel="expect"` um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um einige HTML auf der Seite zu blockieren.
- `href="#element-id"` um die ID des Elements anzugeben, das blockiert werden soll.
- `blocking="render"` um das spezifizierte HTML zu blockieren.

> [!NOTE]
> Um Rendering zu blockieren, müssen `script`, `link` und `style` Elemente mit `blocking="render"` im `head` des Dokuments sein.

Lassen Sie uns betrachten, wie dies mit einem Beispiel-HTML-Dokument aussieht:

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

Das Ergebnis ist, dass die Dokumentwiedergabe blockiert wird, bis der führende Inhalt `<div>` analysiert wurde, was einen konsistenten Ansichtsübergang sicherstellt.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut an `<link rel="expect">` Elementen angeben. Zum Beispiel möchten Sie vielleicht das Rendering einer kleineren Menge an Inhalten blockieren, wenn die Seite auf einem schmalen Bildschirmgerät geladen wird, als auf einem breiten Bildschirmgerät. Das macht Sinn — auf einem Mobilgerät wird weniger Inhalt sichtbar sein, wenn die Seite geladen wird, als bei einem Desktop.

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
