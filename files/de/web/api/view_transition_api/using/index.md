---
title: Verwenden der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 3114d1b72a4d46d314caa7f73f775a1f6f7407dc
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie man View-Transitionen erstellt und die Übergangsanimationen anpasst sowie wie man aktive View-Transitionen manipuliert. Dies umfasst View-Transitionen sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Prozess der View-Transition

Lassen Sie uns den Prozess durchgehen, bei dem eine View-Transition funktioniert:

1. Eine View-Transition wird ausgelöst. Wie dies erfolgt, hängt von der Art der View-Transition ab:
   - Im Fall von Übergängen im selben Dokument (SPAs) wird eine View-Transition ausgelöst, indem die Funktion, die die DOM-Änderung der View auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird, oder [`element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) im Fall von [elementbezogenen View-Transitionen](/de/docs/Web/API/View_Transition_API/Using_element-scoped).
   - Bei Übergängen über Dokumente hinweg (MPAs) wird eine View-Transition ausgelöst, indem die Navigation zu einem neuen Dokument initiiert wird. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen sich in derselben Origin befinden und müssen sich für die View-Transition über eine {{cssxref("@view-transition")}} Regel in ihrem CSS mit einem `navigation` Deskriptor von `auto` anmelden.
     > [!NOTE]
     > Eine aktive View-Transition hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel zurückgegeben von `startViewTransition()` im Fall von Übergängen im selben Dokument (SPA)). Das `ViewTransition`-Objekt enthält mehrere Versprechen, die es Ihnen ermöglichen, Code als Reaktion auf das Erreichen verschiedener Teile des View-Transitionsprozesses auszuführen. Siehe [Steuerung von View-Transitionen mit JavaScript](#steuerung_von_view-transitionen_mit_javascript) für weitere Informationen.
2. Auf der aktuellen (alten) Ansicht erfasst die API statische Bild**schnappschüsse** von Elementen, die eine nicht-`none` deklarierte {{cssxref("view-transition-name")}} in ihrem View-Transition-Bereich haben. Standardmäßig ist der Bereich beim Dokumenten-Umfang die gesamte Ansicht, und beim Element-Umfang das Element auf dem `startViewTransition()` aufgerufen wird und alle seine Nachkommen.
3. Die Ansicht ändert sich:
   - Im Fall von Übergängen im selben Dokument (SPAs) wird der Callback, der an `startViewTransition()` übergeben wird, aufgerufen, was dazu führt, dass sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, erfüllt sich das [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) Versprechen, was Ihnen ermöglicht, auf die Aktualisierung des DOMs zu reagieren.

   - Bei Übergängen über Dokumente hinweg (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst "Live"-Schnappschüsse (d.h. interaktive DOM-Bereiche) von der neuen Ansicht.

   Zu diesem Zeitpunkt steht die View-Transition kurz vor der Ausführung, und das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) Versprechen erfüllt sich, was Ihnen ermöglicht, zum Beispiel eine benutzerdefinierte JavaScript-Animation anstelle der Standardeinstellungen auszuführen.

5. Die alten Schnappschüsse animieren "heraus", während die neuen Schnappschüsse "hinein" animieren. Standardmäßig animieren die alten Schnappschüsse von {{cssxref("opacity")}} 1 auf 0 und die neuen Schnappschüsse von `opacity` 0 auf 1, was einen Überblendeffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, werden die Schnappschüsse zerstört, und das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) Versprechen erfüllt sich und ermöglicht Ihnen zu reagieren. Falls erforderlich, können Sie eine View-Transition daran hindern, ihren fertigen Zustand zu erreichen, bis ein bestimmtes [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) mithilfe der Methode [`ViewTransition.waitUntil()`](/de/docs/Web/API/ViewTransition/waitUntil) aufgelöst wird.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während ein Aufruf von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird die View-Transition vollständig übersprungen.

### Ein Hinweis zu Schnappschüssen

Es ist erwähnenswert, dass beim Sprechen über View-Transitionen der Begriff _Schnappschuss_ häufig verwendet wird, um sich auf einen Teil des Bereichs zu beziehen, der eine `view-transition-name` deklariert hat. Diese Abschnitte werden separat von anderen Bereichen des Bereichs mit verschiedenen `view-transition-name` Werten animiert. Während der Prozess der Animation eines Schnappschusses über eine View-Transition tatsächlich zwei separate Schnappschüsse umfasst – einen des alten und einen des neuen UI-Zustands – verwenden wir der Einfachheit halber den Begriff Schnappschuss für beide.

Der Schnappschuss des alten UI-Zustands ist ein statisches Bild, sodass der Benutzer nicht damit interagieren kann, während es "heraustourniert".

Der Schnappschuss des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Benutzer mit dem neuen Inhalt interagieren kann, während es "hineintourniert".

### Der View-Transition-Pseudoelement-Baum

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudoelement-Baum mit folgender Struktur:

```plain
root
  ├─ ::view-transition
  │  └─ ::view-transition-group(root)
  │     └─ ::view-transition-image-pair(root)
  │        ├─ ::view-transition-old(root)
  │        └─ ::view-transition-new(root)
  ├─ head
  └─ body
     └─ …
```

Im Fall von Übergängen im selben Dokument (SPAs) wird der Pseudoelement-Baum im Dokument verfügbar gemacht. Bei dokumentenspezifischen View-Transitionen ist das Wurzelelement das `<html>` Element. Bei elementbezogenen View-Transitionen ist das Wurzelelement das Element, auf das `startViewTransition()` aufgerufen wurde.

Im Fall von Übergängen über Dokumente hinweg (MPAs) wird der Pseudoelement-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel der View-Transitions-Überlagerung, die alle View-Transitions-Gruppen enthält und über allen anderen Seiteninhalten sitzt.
- Ein {{cssxref("::view-transition-group()")}} fungiert als Container für jeden View-Transition-Schnappschuss. Das `root`-Argument spezifiziert den Standardschnappschuss – die View-Transition-Animation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Schnappschuss des {{cssxref(":root")}} Elements, da die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das obige zurücksetzen und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Schnappschuss der alten Ansicht und {{cssxref("::view-transition-new()")}} zielt auf den Live-Schnappschuss der neuen Ansicht. Beide rendern als ersetzter Inhalt, ähnlich wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit verschiedenen benutzerdefinierten View-Transitions-Animationen zu bearbeiten, indem auf jedem ein anderes {{cssxref("view-transition-name")}} gesetzt wird. In solchen Fällen wird für jedes ein `::view-transition-group()` erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, um die ausgehenden und eingehenden Animationen anzupassen, müssen Sie die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelemente mit Ihren Animationen ansprechen.

## Erstellen einer grundlegenden View-Transition

Dieser Abschnitt verdeutlicht, wie man eine grundlegende View-Transition sowohl im SPA- als auch im MPA-Fall erstellt.

### Grundlegende SPA-View-Transition

Eine SPA kann Funktionalitäten einschließen, um neue Inhalte abzurufen und das DOM als Reaktion auf eine Art von Ereignis zu aktualisieren, wie das Klicken auf einen Navigationslink oder das Abrufen eines Updates vom Server.

Unser [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine einfache Bildergalerie. Wir haben eine Reihe von {{htmlelement("a")}} Elementen, die Thumbnail-{{htmlelement("img")}}-Elemente enthalten, die dynamisch mit JavaScript generiert werden. Wir haben auch ein {{htmlelement("figure")}} Element, das ein {{htmlelement("figcaption")}} und ein `<img>` enthält und die Bilder der vollen Größe anzeigt.

Wenn ein Thumbnail angeklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, was dazu führt, dass das Bild in voller Größe und die zugehörige Bildunterschrift im `<figure>` angezeigt wird. Wir haben dies in eine `updateView()` Funktion gekapselt, die die View-Transition-API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code genügt, um den Übergang zwischen angezeigten Bildern zu behandeln. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Bildunterschriften als sanften Überblendeffekt (den Standard-View-Transition) an. In nicht unterstützenden Browsern funktioniert er immer noch, jedoch ohne die schöne Animation.

### Grundlegende MPA-View-Transition

Beim Erstellen einer Übergangs-View über Dokumente hinweg (MPA) ist der Prozess noch einfacher als bei SPAs. Kein JavaScript ist erforderlich, da die Ansicht aktualisiert wird, indem eine navigation zwischen Dokumenten der gleichen Origin anstatt einer JavaScript-initiierten DOM-Änderung ausgelöst wird. Um eine grundlegende MPA-View-Transition zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}} Regel in das CSS für sowohl das aktuelle als auch das Zieldokument einfügen, um sie anzumelden, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie man [die ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) der View-Transition anpassen kann.

> [!NOTE]
> Derzeit können MPA-View-Transitionen nur zwischen Dokumenten der gleichen Origin erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die Pseudoelemente der View-Transitions haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) angewendet (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert beschrieben sind).

Die meisten Darstellungstransitionen erhalten eine standardmäßige sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Transitionen haben eine sanfte Skalierungsanimation angewendet.
- `position` und `transform` Transitionen haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen nach Belieben mit regulärem CSS ändern – zielen Sie die "von"-Animation mit {{cssxref("::view-transition-old()")}} und die "zu"-Animation mit {{cssxref("::view-transition-new()")}} an.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, das `::view-transition-group()` mit solchen Style zu zielen in Fällen, in denen Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudoelement-Hierarchie und der Standardbenutzer-Agenten-Styling werden die Style von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu sichern — `::view-transition-group()` animiert auch und es könnte passieren, dass Sie unterschiedliche Dauer für die `group`/`image-pair` Pseudoelemente und die `old` und `new` Pseudoelemente haben.

Im Fall von Übergängen über Dokumente hinweg (MPA) müssen die Pseudoelemente nur im Zieldokument enthalten sein, damit die View-Transition funktioniert. Wenn Sie die View-Transition in beide Richtungen verwenden möchten, müssen Sie sie in beiden enthalten.

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben erwähnte CSS, geht jedoch einen Schritt weiter und definiert benutzerdefinierte Animationen und wendet sie auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudoelemente an. Das Ergebnis ist, dass die Standardüberblendungs-Transition durch eine "Hochwischen"-Transition ersetzt wird, wenn die Navigation erfolgt:

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

Standardmäßig werden alle unterschiedlichen Elemente, die während des View-Updates geändert werden, mit derselben Animation übergangsweise behandelt. Wenn Sie möchten, dass einige Elemente anders als die Standardanimation `root` animiert werden, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel, in unserem [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) werden die {{htmlelement("figcaption")}} Elemente mit einem `view-transition-name` von `figure-caption` versehen, um sie in Bezug auf View-Transitionen vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS wird der generierte Pseudoelement-Baum nun so aussehen:

```plain
html
  ├─ ::view-transition
  |  ├─ ::view-transition-group(root)
  │  │  └─ ::view-transition-image-pair(root)
  │  │     ├─ ::view-transition-old(root)
  │  │     └─ ::view-transition-new(root)
  |  └─ ::view-transition-group(figure-caption)
  │     └─ ::view-transition-image-pair(figure-caption)
  │        ├─ ::view-transition-old(figure-caption)
  │        └─ ::view-transition-new(figure-caption)
  ├─ head
  └─ body
     └─ …
```

Das Vorhandensein des zweiten Satzes von Pseudoelementen ermöglicht es, separates View-Transition-Styling nur auf das `<figcaption>` anzuwenden. Die verschiedenen alten und neuen View-Erfassungen werden getrennt voneinander behandelt.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudoelemente angewendet. Wir haben auch eine Reihe anderer Styles zu beiden hinzugefügt, um sie an der gleichen Stelle zu halten und zu verhindern, dass das Standardstyling unsere benutzerdefinierten Animationen stört.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudoelement verwenden, um alle Snapshot-Pseudoelemente zu zielen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name` Werte

Die Eigenschaft `view-transition-name` kann einen einzigartigen {{cssxref("custom-ident")}} Wert annehmen, der ein beliebiger Bezeichner sein kann, der nicht als Schlüsselwort missinterpretiert würde. Der Wert von `view-transition-name` für jedes gerenderte Element muss einzigartig sein. Wenn zwei gerenderte Elemente den gleichen `view-transition-name` zur gleichen Zeit haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und die Transition wird übersprungen.

Es kann auch Schlüsselwortwerte von:

- `none`: Bewirkt, dass das Element nicht an einem separaten Schnappschuss teilnimmt, es sei denn, es hat ein Elternelement mit einem `view-transition-name` gesetzt, in welchem Fall es als Teil dieses Elements erfasst wird.
- `match-element`: Setzt automatisch einzigartige `view-transition-name` Werte auf alle ausgewählten Elemente.

### Nutzen der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher und ein schöneres Ergebnis produzierte als die obige. Unsere endgültige `<figcaption>` View-Transition sah am Ende so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einem sanften Skalieren übergeht. Wir mussten lediglich eine feste `height` in beiden Zuständen festlegen, damit es funktioniert.

> [!NOTE]
> [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Beispiele zur Anpassung.

## Steuerung von View-Transitionen mit JavaScript

Eine View-Transition hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Versprechensmitglieder enthält und Ihnen ermöglicht, JavaScript als Reaktion auf verschiedene Zustände der Transition auszuführen. Zum Beispiel, erfüllt sich [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) sobald der Pseudoelementbaum erstellt wurde und die Animation kurz vor dem Start steht, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) sich erfüllt, sobald die Animation beendet ist, und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Die `ViewTransition` kann wie folgt zugegriffen werden:

1. Über die [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)/[`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) Eigenschaft. Dies bietet eine konsistente Möglichkeit, in jedem Kontext auf die aktive View-Transition zuzugreifen, ohne sich darum kümmern zu müssen, sie für einen späteren einfachen Zugriff zu speichern.
2. Im Fall von Übergängen im selben Dokument (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) die `ViewTransition` zurück, die mit der Transition verbunden ist.
3. Im Fall von Übergängen über Dokumente hinweg (MPA):
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft sowie eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Zieldokumentverlaufselemente enthält.
     > [!NOTE]
     > Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitungskette hat, gibt die `activation` Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument zuerst gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf das `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Lassen Sie uns einen Blick auf einige Beispielcodes werfen, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Eine JavaScript-gesteuerte benutzerdefinierte Übergangsformat in einem Dokument (SPA)

Das folgende JavaScript könnte verwendet werden, um eine kreisförmige Enthüllungs-View-Transition zu erstellen, die von der Position des Benutzercursors beim Klicken ausgeht, mit Animation bereitgestellt von der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichtsstatus in irgendeiner Weise ineinander übergehen (der neue Status "wischt" direkt über den alten Status, anstatt hineintourniert zu werden):

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

### Eine JavaScript-gesteuerte benutzerdefinierte Übergangsformat über Dokumente hinweg (MPA)

Die [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet ein grundlegendes Set von Teamprofilseiten und zeigt, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet, um die ausgehenden und eingehenden Animationen einer über Dokumente hinweggehenden View-Transition basierend auf den "von" und "zu" URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignislistener sieht wie folgt aus. Dies setzt View-Transition-Namen auf die Elemente auf der ausgehenden Seite, die zu den Profilseiten verlinken. Wenn von der Startseite zu einer Profilseite navigiert wird, werden benutzerdefinierte Animationen _nur_ für das verknüpfte Element bereitgestellt, das in jedem Fall angeklickt wird.

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
> Wir entfernen die `view-transition-name` Werte, nachdem die Schnappschüsse in jedem Fall aufgenommen wurden. Wenn wir sie gesetzt ließen, würden sie bei der Navigation im {{Glossary("bfcache", "bfcache")}} gespeicherten Seitenzustand bleiben. Wenn dann die Zurück-Schaltfläche gedrückt wird, würde der `pagereveal` Ereignis-Handler der Seite, zu der zurück navigiert wird, dann versuchen, dieselben `view-transition-name` Werte auf verschiedene Elemente zu setzen. Wenn mehrere Elemente den gleichen `view-transition-name` Wert gesetzt haben, wird die View-Transition übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignislistener sieht wie folgt aus. Dies funktioniert auf ähnliche Weise wie der `pageswap` Ereignislistener, obwohl hier zu beachten ist, dass wir die "zu" Animation anpassen, für Seitenelemente auf der neuen Seite.

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

## Stabilisierung des Seitenzustands, um über Dokumente hinweggehende Übergänge konsistent zu machen

Bevor Sie eine über Dokumente hinweggehende Transition durchführen, sollten Sie idealerweise warten, bis der Zustand der Seite stabilisiert wird, indem Sie sich auf {{Glossary("Render_blocking", "Render-Blocking")}} verlassen, um sicherzustellen, dass:

1. Kritische Styles geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML, das für die initiale Ansicht der Seite sichtbar ist, analysiert wurde, damit es konsistent gerendert wird.

Styles werden standardmäßig im Render-Prozess blockiert, es sei denn, sie werden dynamisch über Skript zum Dokument hinzugefügt. Sowohl Skripte als auch dynamisch hinzugefügte Styles können mithilfe des `blocking="render"` Attributs im Render-Prozess blockiert werden.

Um sicherzustellen, dass Ihr initiales HTML analysiert wurde und vor dem Übergang immer konsistent gerendert wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element fügen Sie die folgenden Attribute hinzu:

- `rel="expect"` um anzugeben, dass Sie dieses `<link>` Element verwenden möchten, um etwas HTML auf der Seite im Render-Prozess zu blockieren.
- `href="#element-id"` um die ID des Elements anzugeben, die Sie im Render-Prozess blockieren möchten.
- `blocking="render"` um das spezifizierte HTML im Render-Prozess zu blockieren.

> [!NOTE]
> Um das Rendering zu blockieren, müssen `script`, `link`, und `style` Elemente mit `blocking="render"` im `head` des Dokuments stehen.

Lassen Sie uns untersuchen, wie das mit einem Beispiel-HTML-Dokument aussieht:

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

Das Ergebnis ist, dass das Dokumentrendering blockiert wird, bis das führende Inhalts-`<div>` analysiert wurde, um eine konsistente View-Transition sicherzustellen.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel möchten Sie möglicherweise weniger Inhalt blockieren, wenn die Seite auf einem Gerät mit kleinem Bildschirm geladen wird, als auf einem Gerät mit großem Bildschirm. Das ergibt Sinn – auf einem Mobilgerät wird beim ersten Laden der Seite weniger Inhalt sichtbar sein als bei einem Desktop.

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
