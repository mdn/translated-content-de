---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie, wie die [View Transition API](/de/docs/Web/API/View_Transition_API) funktioniert, wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst sowie wie man aktive Ansichtsübergänge manipuliert. Dies umfasst Ansichtsübergänge sowohl für DOM-Statusaktualisierungen in einer Single-Page-App (SPA) als auch beim Navigieren zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der View-Transition-Prozess

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt von der Art des Ansichtsübergangs ab:
   - Im Fall von Übergängen im selben Dokument (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die DOM-Änderung auslösen würde, als Rückruf an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Fall von Dokumentenübergreifenden Übergängen (MPAs) wird ein Ansichtsübergang ausgelöst, indem die Navigation zu einem neuen Dokument gestartet wird. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen auf demselben Ursprungsort sein und durch Einbeziehung einer {{cssxref("@view-transition")}} at-Regel in ihrem CSS mit einem `navigation`-Deskriptor von `auto` in den Ansichtsübergang einwilligen.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz (zum Beispiel, zurückgegeben von `startViewTransition()` im Fall von Übergängen im selben Dokument (SPA)). Das `ViewTransition`-Objekt enthält mehrere Versprechen und ermöglicht Ihnen, Code als Reaktion auf unterschiedliche Teile des Ansichtsübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuern von Ansichtsübergängen mit JavaScript](#steuern_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API statische Bild-**Schnappschüsse** von Elementen, die ein {{cssxref("view-transition-name")}} deklariert haben.
3. Die Ansichtsänderung tritt ein:
   - Im Fall von Übergängen im selben Dokument (SPAs) wird der Rückruf an `startViewTransition()` aufgerufen, was die Änderung des DOM verursacht.

     Wenn der Rückruf erfolgreich ausgeführt wurde, wird das [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone)-Versprechen erfüllt, sodass Sie auf die DOM-Aktualisierung reagieren können.

   - Im Fall von dokumentenübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst "Live"-Schnappschüsse (d.h. interaktive DOM-Bereiche) aus der neuen Ansicht.

   Zu diesem Zeitpunkt steht der Ansichtsübergang kurz davor, ausgeführt zu werden, und das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)-Versprechen wird erfüllt, sodass Sie durch das Ausführen einer benutzerdefinierten JavaScript-Animation anstelle der Standardeinstellung reagieren können.

5. Die Schnappschüsse der alten Seite animieren "aus", während die Schnappschüsse der neuen Ansicht "ein" animieren. Standardmäßig animieren die alten Ansichts-Schnappschüsse von {{cssxref("opacity")}} 1 zu 0, und die neuen Ansichts-Schnappschüsse von `opacity` 0 zu 1, was einen Überblendungseffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)-Versprechen erfüllt, sodass Sie reagieren können.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt ist, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Ein Exkurs über Schnappschüsse

Es ist erwähnenswert, dass wir beim Sprechen über Ansichtsübergänge häufig den Begriff _Schnappschuss_ verwenden, um sich auf einen Teil der Seite zu beziehen, auf dem ein `view-transition-name` deklariert ist. Diese Abschnitte werden separat von anderen Teilen der Seite mit verschiedenen `view-transition-name`-Werten auf ihnen animiert. Während der Prozess der Animation eines Schnappschusses durch einen Ansichtsübergang tatsächlich zwei separate Schnappschüsse beinhaltet — einen des alten und einen des neuen UI-Zustands — verwenden wir Schnappschuss, um den gesamten Seitenbereich einfacher zu beschreiben.

Der Schnappschuss des alten UI-Zustands ist ein statisches Bild, sodass der Benutzer nicht damit interagieren kann, während es "aus" animiert.

Der Schnappschuss des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Benutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während er "ein" animiert.

### Der Pseudo-Element-Baum des Ansichtsübergangs

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudo-Element-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Fall von Übergängen im selben Dokument (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Im Fall von dokumentenübergreifenden Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Ansichtsübergangs-Overlays, das alle Ansichtsübergangsgruppen enthält und über allen anderen Seiteninhalten liegt.
- Eine {{cssxref("::view-transition-group()")}} fungiert als Container für jeden Ansichtsübergangs-Schnappschuss. Das `root`-Argument gibt den standardmäßigen Schnappschuss an — die Ansichtsübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Schnappschuss des {{cssxref(":root")}}-Elements, da die standardmäßigen Browser-Stile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenersteller dies ändern können, indem das Obige nicht gesetzt wird und `view-transition-name: root` auf einem anderen Element gesetzt wird.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Schnappschuss des alten Seitenelements ab, und {{cssxref("::view-transition-new()")}} zielt auf den Live-Schnappschuss des neuen Seitenelements ab. Beide werden als ersetzter Inhalt gerendert, in gleicher Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen zu zielen, indem auf jedem ein anderes {{cssxref("view-transition-name")}} gesetzt wird. In solchen Fällen wird für jedes eine `::view-transition-group()` erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, um die ausgehenden und eingehenden Animationen anzupassen, müssen Sie die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudo-Elemente mit Ihren Animationen jeweils ansprechen.

## Erstellen eines grundlegenden Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie man einen grundlegenden Ansichtsübergang erstellt, sowohl im SPA- als auch im MPA-Fall.

### Grundlegender SPA-Ansichtsübergang

Eine SPA kann Funktionen enthalten, um neue Inhalte abzurufen und das DOM als Reaktion auf eine Art von Ereignis zu aktualisieren, wie z.B. ein Klick auf einen Navigationslink oder ein vom Server gepushtes Update.

Unser [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine grundlegende Bildergalerie. Wir haben eine Reihe von {{htmlelement("a")}}-Elementen, die Thumbnail-{{htmlelement("img")}}-Elemente enthalten, die dynamisch mit JavaScript generiert werden. Wir haben auch ein {{htmlelement("figure")}}-Element, das ein {{htmlelement("figcaption")}} und ein `<img>` enthält, das die Bilder in voller Größe der Galerie anzeigt.

Wenn auf ein Thumbnail geklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, was dazu führt, dass das Bild in voller Größe und seine zugehörige Bildunterschrift im `<figure>` angezeigt werden. Wir haben dies in eine `updateView()`-Funktion gekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen die Änderung von alten zu neuen Bildern und Bildunterschriften als sanfte Überblendung (der Standardansichtsübergang). In nicht unterstützenden Browsern wird es auch funktionieren, jedoch ohne die nette Animation.

### Grundlegender MPA-Ansichtsübergang

Beim Erstellen eines dokumentenübergreifenden (MPA) Ansichtsübergangs ist der Prozess sogar noch einfacher als bei SPAs. Kein JavaScript ist erforderlich, da das Aktualisieren der Ansicht durch eine dokumentenübergreifende, ursprungsidentische Navigation ausgelöst wird, anstelle einer JavaScript-gesteuerten DOM-Änderung. Um einen grundlegenden MPA-Ansichtsübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}} At-Regel im CSS sowohl für das aktuelle als auch das Zieldokument spezifizieren, um sie zu aktivieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese At-Regel in Aktion und demonstriert zusätzlich, wie man die ausgehenden und eingehenden Animationen des Ansichtsübergangs anpasst.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen ursprungsidentischen Dokumenten erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die View Transitions Pseudo-Elemente haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet, die in ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert beschrieben sind.

Die meisten Erscheinungsübergänge erhalten standardmäßig eine sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge haben eine sanfte Skalierungsanimation angewendet.
- `position`- und `transform`-Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die standardmäßigen Animationen auf jede gewünschte Weise mithilfe von regulärem CSS ändern — zielen Sie die "from"-Animation mit {{cssxref("::view-transition-old()")}} an und die "to"-Animation mit {{cssxref("::view-transition-new()")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie die `::view-transition-group()` mit solchen Stilen ansprechen, wenn Sie diese auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der Standard-Benutzeragent-Stile werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu schützen — `::view-transition-group()` animiert ebenfalls, und Sie könnten verschiedene Dauern für die `group`/`image-pair`-Pseudo-Elemente im Vergleich zu den `old`- und `new`-Pseudo-Elementen erhalten.

Im Fall von dokumentenübergreifenden (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn in beiden Dokumenten einbeziehen.

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, geht aber in der Anpassung einen Schritt weiter und definiert benutzerdefinierte Animationen, die auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente angewendet werden. Das Ergebnis ist, dass die standardmäßige Überblendungsanimation gegen eine "Swipe nach oben"-Animation ausgetauscht wird, wenn die Navigation erfolgt:

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

Standardmäßig werden alle verschiedenen Elemente, die sich während der Ansichtsaktualisierung ändern, mit derselben Animation übergeblendet. Wenn Sie möchten, dass einige Elemente anders animieren als die standardmäßige `root`-Animation, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel werden in unserem [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente mit einem `view-transition-name` von `figure-caption` versehen, um sie in Bezug auf Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet wird der erzeugte Pseudo-Element-Baum nun so aussehen:

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

Das Vorhandensein des zweiten Satzes von Pseudo-Elementen ermöglicht es, dass separate Ansichtsübergangsstile nur auf das `<figcaption>` angewendet werden. Die verschiedenen alten und neuen Ansichtserfassungen werden separat voneinander gehandhabt.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Reihe von anderen Stilen zu beiden hinzugefügt, um sie an Ort und Stelle zu halten und das standardmäßige Styling daran zu hindern, unsere benutzerdefinierten Animationen zu beeinträchtigen.

> [!NOTE]
> Sie können `*` als Identifikator in einem Pseudo-Element verwenden, um alle Snapshot-Pseudo-Elemente anzusprechen, unabhängig von welchem Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name` Werte

Die `view-transition-name`-Eigenschaft kann einen einzigartigen {{cssxref("custom-ident")}}-Wert annehmen, der jedes Identifikator sein kann, der nicht als Schlüsselwort falsch interpretiert wird. Der Wert von `view-transition-name` für jedes gerenderte Element muss einzigartig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Es kann auch Schlüsselwortwerte annehmen:

- `none`: Führt dazu, dass das Element nicht an einem separaten Schnappschuss teilnimmt, es sei denn, es hat ein übergeordnetes Element mit einem gesetzten `view-transition-name`, in welchem Fall es als Teil dieses Elements aufgenommen wird.
- `match-element`: Setzt automatisch eindeutige `view-transition-name`-Werte auf allen ausgewählten Elementen.

### Nutzung der standardmäßigen Animationsstile

Es sollte beachtet werden, dass wir auch eine andere Übergangsoption entdeckten, die einfacher ist und ein schöneres Ergebnis als das Obige produzierte. Unser endgültiger `<figcaption>`-Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer sanften Skala überblendet. Wir mussten nur eine feste `height` auf beiden Zuständen setzen, damit es funktionierte.

> [!NOTE]
> [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuern von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz, die mehrere Promise-Mitglieder enthält, mit denen Sie JavaScript als Reaktion auf verschiedene Zustände des Übergangs ausführen können. Beispielsweise erfüllt [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready), sobald der Pseudo-Element-Baum erstellt ist und die Animation kurz vor dem Start steht, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, sobald die Animation abgeschlossen ist und die neue Seitenansicht für Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann folgendermaßen abgerufen werden:

1. Im Fall von Übergängen im selben Dokument (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den `ViewTransition` zurück, der dem Übergang zugeordnet ist.
2. Im Fall von dokumentenübergreifenden (MPA) Übergängen:
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument kurz vor dem Ausladen aufgrund einer Navigation steht. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf den `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen sowie Zieldokument-Historieneinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine ursprungsübergreifende URL irgendwo in der Weiterleitungskette hat, gibt die `activation`-Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf den `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Lassen Sie uns ein Beispielcode betrachten, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang im selben Dokument (SPA)

Das folgende JavaScript könnte verwendet werden, um einen kreisförmigen Enthüllungs-Ansichtsübergang zu erzeugen, der von der Position des Cursors des Benutzers an einem Klickpunkt ausgeht, mit Animation, die von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation abzuschalten und zu verhindern, dass die alten und neuen Ansichtsstände in irgendeiner Weise überblendet werden (der neue Stand "wischt" direkt über den alten Stand):

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

### Ein JavaScript-gesteuerter benutzerdefinierter dokumentenübergreifender (MPA) Übergang

Das [List of Chrome DevRel team members](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Reihe von Team-Profilseiten und demonstriert, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet, um die ausgehenden und eingehenden Animationen eines dokumentenübergreifenden Ansichtsübergangs basierend auf den "Von"- und "Zu"-URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Event Listener sieht folgendermaßen aus. Dies setzt Ansichtstransitionsnamen auf die ausgehenden Seitenelemente, die auf die Profilseiten verlinken. Bei der Navigation von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen _nur_ für das verlinkte Element bereitgestellt, das in jedem Fall geklickt wird.

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
> Wir entfernen die `view-transition-name`-Werte, nachdem Schnappschüsse in jedem Fall aufgenommen wurden. Wenn wir sie gesetzt lassen würden, würden sie im Seitenzustand gespeichert sein, der beim Navigieren im {{Glossary("bfcache", "bfcache")}} gespeichert ist. Wenn dann die Zurück-Taste gedrückt würde, würde der `pagereveal`-Ereignishandler der zurückgekehrten Seite versuchen, dieselben `view-transition-name`-Werte auf unterschiedliche Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Event Listener sieht folgendermaßen aus. Dies funktioniert in ähnlicher Weise wie der `pageswap`-Ereignis-Listener, wobei man bedenken muss, dass wir hier die "Zu"-Animation für die Seitenelemente auf der neuen Seite anpassen.

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

## Stabilisieren des Seitenzustands zur Konsistenz bei dokumentenübergreifenden Übergängen

Vor dem Ausführen eines dokumentenübergreifenden Übergangs möchten Sie idealerweise warten, bis sich der Zustand der Seite stabilisiert, indem Sie sich auf {{Glossary("Render_blocking", "Render-Blockade")}} verlassen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt sind.
3. Das HTML für die anfängliche Ansicht der Seite des Benutzers analysiert wurde, sodass es konsistent rendert.

Stile werden standardmäßig gerendert blockiert, es sei denn, sie werden dynamisch über Skript zum Dokument hinzugefügt. Sowohl Skripte als auch dynamisch hinzugefügte Stile können mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking)-Attribut render-blockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und immer konsistent rendert, bevor die Übergangsanimation läuft, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element können Sie die folgenden Attribute einfügen:

- `rel="expect"` um anzuzeigen, dass Sie dieses `<link>` Element verwenden möchten, um das Rendern von HTML auf der Seite zu blockieren.
- `href="#element-id"` um die ID des Elements anzuzeigen, das Sie rendern blockieren möchten.
- `blocking="render"` um das angegebene HTML zu blockieren.

> [!NOTE]
> Um das Rendern zu blockieren, müssen `script`, `link` und `style` Elemente mit `blocking="render"` im `head` des Dokuments sein.

Schauen wir uns an, wie dies mit einem Beispiel-HTML-Dokument aussieht:

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

Das Ergebnis ist, dass das Dokumentrendern blockiert wird, bis der führende Inhalt `<div>` analysiert wurde, was einen konsistenten Ansichtsübergang sicherstellt.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut für `<link rel="expect">`-Elemente angeben. Zum Beispiel möchten Sie möglicherweise das Rendern auf eine kleinere Menge von Inhalten blockieren, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm als auf einem Gerät mit breitem Bildschirm laden. Dies macht Sinn — auf einem Handy wird weniger Inhalt sichtbar sein, wenn die Seite zuerst geladen wird, als im Fall eines Desktops.

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
