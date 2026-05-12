---
title: Verwenden der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 7313aa9ef71bdfcd7ddb2fa4247b0600ce0e6542
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie, wie die [View Transition API](/de/docs/Web/API/View_Transition_API) funktioniert, wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst sowie wie man aktive Ansichtsübergänge manipuliert. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Prozess des Ansichtsübergangs

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt vom Typ des Ansichtsübergangs ab:
   - Im Fall von gleichen Dokumentübergängen (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die Änderung des Ansichts-DOMs auslösen würde, als Rückruf an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Fall von Dokumentübergreifenden Übergängen (MPAs) wird ein Ansichtsübergang durch die Initiierung der Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen sich im selben Ursprung befinden und dem Ansichtsübergang zustimmen, indem sie eine {{cssxref("@view-transition")}} At-Regel in ihrem CSS mit einem `navigation` Deskriptor von `auto` enthalten.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (beispielsweise, zurückgegeben von `startViewTransition()` im Fall von gleichen Dokumentübergängen (SPA)). Das `ViewTransition`-Objekt enthält mehrere Versprechen, die es Ihnen erlauben, Code in Reaktion auf verschiedene Teile des Ansichtsübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuern von Ansichtsübergängen mit JavaScript](#steuern_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API statische Bild**schnappschüsse** von Elementen, die ein {{cssxref("view-transition-name")}} deklariert haben.
3. Die Ansichtsänderung tritt ein:
   - Im Fall von gleichen Dokumentübergängen (SPAs) wird der Rückruf, der an `startViewTransition()` übergeben wurde, aufgerufen, was dazu führt, dass das DOM verändert wird.

     Wenn der Rückruf erfolgreich ausgeführt wurde, wird das [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) Versprechen erfüllt, sodass Sie auf die DOM-Aktualisierung reagieren können.

   - Im Fall von dokumentübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst "Live"-Schnappschüsse (das heißt, interaktive DOM-Bereiche) von der neuen Ansicht.

   An diesem Punkt ist der Ansichtsübergang bereit, gestartet zu werden, und das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)-Versprechen wird erfüllt, sodass Sie darauf reagieren können, indem Sie beispielsweise eine benutzerdefinierte JavaScript-Animation anstelle der Standardeinstellung ausführen.

5. Die Schnappschüsse der alten Seite animieren "heraus", während die neuen Ansichtsschnappschüsse "hinein" animieren. Standardmäßig animieren die alten Ansichtsschnappschüsse von {{cssxref("opacity")}} 1 zu 0, und die neuen Ansichtsschnappschüsse animieren von `opacity` 0 zu 1, was einen Überblendeffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, werden die Schnappschüsse zerstört und das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)-Versprechen wird erfüllt, was Ihnen die Möglichkeit gibt zu reagieren. Falls notwendig, können Sie einen Ansichtsübergang daran hindern, seinen beendeten Zustand zu erreichen, bis ein angegebener [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) mit der Methode [`ViewTransition.waitUntil()`](/de/docs/Web/API/ViewTransition/waitUntil) aufgelöst wird.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitsstatus](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel wenn das Dokument von einem Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Ein Exkurs zu Schnappschüssen

Es ist erwähnenswert, dass, wenn wir über Ansichtsübergänge sprechen, wir häufig den Begriff _Schnappschuss_ verwenden, um sich auf einen Teil der Seite zu beziehen, der ein `view-transition-name` darauf deklariert hat. Diese Abschnitte werden separat von anderen Teilen der Seite animiert, die unterschiedliche `view-transition-name` Werte haben. Während der Prozess des Animierens eines Schnappschusses über einen Ansichtsübergang tatsächlich zwei separate Schnappschüsse beinhaltet—einen des alten und einen des neuen UI-Zustandes—verwenden wir zur Vereinfachung den Begriff Schnappschuss, um auf den gesamten Seitenbereich zu verweisen.

Der Schnappschuss des alten UI-Zustandes ist ein statisches Bild, sodass der Benutzer nicht mit ihm interagieren kann, während es "heraus" animiert.

Der Schnappschuss des neuen UI-Zustandes ist ein interaktiver DOM-Bereich, sodass der Benutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während er "hinein" animiert.

### Der Pseudo-Elementbaum des Ansichtsübergangs

Um die Erstellung der ausgehenden und eingehenden Übergangsanimationen zu handhaben, konstruiert die API einen Pseudo-Elementbaum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Fall von gleichen Dokumentübergängen (SPAs) wird der Pseudo-Elementbaum im Dokument zur Verfügung gestellt. Im Fall von dokumentübergreifenden Übergängen (MPAs) wird der Pseudo-Elementbaum nur im Zieldokument zur Verfügung gestellt.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Ansichtsübergangsoverlays, das alle Ansichtsübergangsgruppen enthält und über allen anderen Seiteninhalten liegt.
- Eine {{cssxref("::view-transition-group()")}} fungiert als Container für jeden Ansichtsübergangsschnappschuss. Das `root`-Argument gibt den Standardschnappschuss an — die Ansichtsübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Schnappschuss des {{cssxref(":root")}}-Elements, weil die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das obige zurücksetzen und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Schnappschuss des alten Seitenelements ab, und {{cssxref("::view-transition-new()")}} zielt auf den Live-Schnappschuss des neuen Seitenelements ab. Beide werden als ersetzte Inhalte gerendert, in derselben Art und Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen zu zielen, indem auf jedem ein anderes {{cssxref("view-transition-name")}} gesetzt wird. In solchen Fällen wird für jedes ein `::view-transition-group()` erstellt. Sehen Sie [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen anzupassen, die Pseudo-Elemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} jeweils mit Ihren Animationen ansprechen.

## Erstellen eines einfachen Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie man einen einfachen Ansichtsübergang sowohl im SPA- als auch im MPA-Fall erstellt.

### Einfacher SPA-Ansichtsübergang

Eine SPA kann Funktionalität beinhalten, neue Inhalte abzurufen und das DOM als Antwort auf ein Ereignis irgendeiner Art zu aktualisieren, zum Beispiel wenn ein Navigationslink angeklickt wird oder ein Update vom Server gesendet wird.

Unser [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine grundlegende Bildergalerie. Wir haben eine Serie von {{htmlelement("a")}}-Elementen, die Miniatur-{{htmlelement("img")}}-Elemente enthalten, die dynamisch mittels JavaScript generiert werden. Wir haben auch ein {{htmlelement("figure")}}-Element, das ein {{htmlelement("figcaption")}} und ein `<img>` enthält, welches die Bilder in voller Größe anzeigt.

Wenn ein Thumbnail angeklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, was bewirkt, dass das Bild in voller Größe und die dazugehörige Bildunterschrift im `<figure>` angezeigt werden. Wir haben dies in eine `updateView()`-Funktion gekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen den angezeigten Bildern zu handhaben. Unterstützende Browser zeigen die Änderung von alten zu neuen Bildern und Bildunterschriften als sanftes Überblenden (den Standard-Ansichtsübergang). Es funktioniert auch in nicht unterstützenden Browsern, jedoch ohne die schöne Animation.

### Einfacher MPA-Ansichtsübergang

Beim Erstellen eines dokumentübergreifenden (MPA) Ansichtsübergangs ist der Prozess sogar einfacher als bei SPAs. Kein JavaScript ist erforderlich, da das Update der Ansicht durch eine dokumentübergreifende, gleicher Herkunft Navigation statt durch eine JavaScript-initiierte DOM-Änderung ausgelöst wird. Um einen einfachen MPA-Ansichtsübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}} At-Regel im CSS sowohl für das aktuelle als auch für das Zieldokument angeben, um sie zu optieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese At-Regel in Aktion und demonstriert zusätzlich, wie man [die ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des Ansichtsübergangs anpasst.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen gleich-originären Dokumenten erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die View Transitions Pseudo-Elemente haben standardmäßig angewendete [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert sind).

Die meisten Erscheinungsübergänge haben eine standardmäßige sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge haben eine sanfte Skalierungsanimation angewendet.
- `position` und `transform` Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen auf jede gewünschte Weise mit regulärem CSS ändern — zielen Sie die "von"-Animation mit {{cssxref("::view-transition-old()")}} an und die "zu"-Animation mit {{cssxref("::view-transition-new()")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen anvisieren, in Fällen, wo Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der Standarduser-Agent-Styling, werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code abzusichern — `::view-transition-group()` animiert ebenfalls und Sie könnten mit unterschiedlichen Dauern für die `group`/`image-pair` Pseudo-Elemente gegenüber den `old` und `new` Pseudo-Elementen enden.

Im Fall von dokumentübergreifenden (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn in beiden einschließen.

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, jedoch geht die Anpassung einen Schritt weiter, definiert benutzerdefinierte Animationen und wendet sie auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente an. Das Ergebnis ist, dass der standardmäßige Übergang von Überblenden durch einen "Wisch nach oben" Übergang beim Navigieren ersetzt wird:

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

Standardmäßig werden alle unterschiedlichen Elemente, die sich während der Ansichtsaktualisierung ändern, mit derselben Animation überblendet. Wenn Sie möchten, dass einige Elemente anders als die Standard-`root`-Animation animiert werden, können Sie sie unter Verwendung der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel werden in unserem [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente mit einem `view-transition-name` von `figure-caption` versehen, um sie in Bezug auf Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, wird der erzeugte Pseudo-Elementbaum nun so aussehen:

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

Das Vorhandensein des zweiten Sets von Pseudo-Elementen ermöglicht es, separate Ansichtsübergangsstile nur auf die `<figcaption>` anzuwenden. Die verschiedenen alten und neuen Ansichtserfassungen werden getrennt voneinander behandelt.

Der folgende Code wendet eine benutzerdefinierte Animation nur auf die `<figcaption>` an:

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Reihe anderer Stile hinzugefügt, um sie an Ort und Stelle zu halten und zu verhindern, dass sich das Standardstyling in unsere benutzerdefinierten Animationen einmischt.

> [!NOTE]
> Sie können `*` als den Bezeichner in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente zu zielen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name` Werte

Die Eigenschaft `view-transition-name` kann einen einzigartigen {{cssxref("custom-ident")}} Wert annehmen, der jeder Bezeichner sein kann, der nicht als Schlüsselwort fehlinterpretiert würde. Der Wert von `view-transition-name` für jedes gerenderte Element muss einzigartig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Es kann auch Schlüsselwortwerte annehmen von:

- `none`: Verursacht, dass das Element nicht an einem separaten Schnappschuss teilnimmt, es sei denn, es hat ein Elternelement mit einem gesetzten `view-transition-name`, in welchem Fall es als Teil dieses Elements aufgenommen wird.
- `match-element`: Setzt automatisch einzigartige `view-transition-name` Werte auf alle ausgewählten Elemente.

### Nutzung der Standard-Animationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als das Obige produzierte. Unser endgültiger `<figcaption>` Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten sanft skaliert. Wir mussten nur eine feste `height` auf beiden Zuständen setzen, um es zum Laufen zu bringen.

> [!NOTE]
> [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Beispiele zur Anpassung.

## Steuern von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Promise-Mitglieder enthält, die Sie JavaScript als Antwort auf verschiedene Zustände des erreichten Übergangs einsetzen lassen. Zum Beispiel wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudo-Elementbaum erstellt wurde und die Animation starten soll, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, wenn die Animation fertig ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann folgendermaßen zugegriffen werden:

1. Über die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition). Dies bietet eine konsistente Möglichkeit, auf den aktiven Ansichtsübergang in jedem Kontext zuzugreifen, ohne sich Gedanken machen zu müssen, es später zum einfachen Zugriff zu speichern.
2. Im Fall von gleichen Dokumentübergängen (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den mit dem Übergang verbundenen `ViewTransition` zurück.
3. Im Fall von dokumentübergreifenden (MPA) Übergängen:
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf den `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Zieldokument-Historieeinträge enthält.
     > [!NOTE]
     > Wenn die Navigation irgendwo in der Weiterleitungskette eine URL mit anderer Herkunft hat, gibt die Eigenschaft `activation` `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder wenn ein frisches Dokument aus dem Netzwerk geladen oder ein Dokument (entweder vom {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}) aktiviert wird. Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf den `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Schauen wir uns etwas Beispielcode an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter gleicher Dokumentübergang (SPA)

Das folgende JavaScript könnte verwendet werden, um einen kreisförmigen Übergangsansichtsübergang zu erstellen, der von der Position des Mauszeigers des Benutzers beim Klicken ausgeht, wobei die Animation durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass sich die alten und neuen Ansichten in irgendeiner Weise überblenden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt hineinzulassen):

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

### Ein JavaScript-gesteuerter benutzerdefinierter dokumentübergreifender Übergang (MPA)

Das [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Reihe von Team-Profilseiten und demonstriert, wie die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet werden, um die ausgehenden und eingehenden Animationen eines dokumentübergreifenden Ansichtsübergangs basierend auf den "von" und "zu" URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignislistener sieht wie folgt aus. Dieser setzt Ansichtsübergangsnamen auf die Elemente auf der ausgehenden Seite, die auf die Profilseiten verweisen. Beim Navigieren von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen nur für das verlinkte Element bereitgestellt, das in jedem Fall angeklickt wird.

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
> Wir entfernen die `view-transition-name` Werte nach der Erstellung von Schnappschüssen in jedem Fall. Wenn wir sie gesetzt lassen würden, würden sie im bei der Navigation im {{Glossary("bfcache", "bfcache")}} gespeicherten Seitenzustand bestehen bleiben. Wenn dann die Zurück-Taste gedrückt würde, würde der `pagereveal` Ereignis-Handler der Seite, zu der zurück navigiert wird, versuchen, dieselben `view-transition-name` Werte auf verschiedene Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignislistener sieht wie folgt aus. Dieser funktioniert auf ähnliche Weise wie der `pageswap` Ereignislistener, obwohl zu beachten ist, dass wir hier die "zu" Animation anpassen, für die Seiten-Elemente auf der neuen Seite.

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

Bevor ein dokumentübergreifender Übergang ausgeführt wird, wollen Sie idealerweise darauf warten, dass der Zustand der Seite stabilisiert ist, indem Sie sich auf {{Glossary("Render_blocking", "Render-Blocking")}} verlassen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt sind.
3. Das HTML, das für den ersten Anblick des Users auf der Seite sichtbar ist, wurde geparst, sodass es konsequent rendert.

Stile sind standardmäßig render-blockiert, es sei denn, sie wurden dynamisch über ein Skript zum Dokument hinzugefügt. Sowohl Skripte als auch dynamisch hinzugefügte Stile können durch das [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) Attribut render-blockiert werden.

Um sicherzustellen, dass Ihr initiales HTML geparst wurde und immer konsistent rendert, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element beinhalten Sie die folgenden Attribute:

- `rel="expect"`, um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um einige HTML-Elemente auf der Seite zu render-blocken.
- `href="#element-id"`, um die ID des Elements anzugeben, das Sie render-blocken möchten.
- `blocking="render"`, um das angegebene HTML zu render-blocken.

> [!NOTE]
> Um ein Render-Blocking zu erreichen, müssen die `script`, `link` und `style` Elemente mit `blocking="render"` im `head` des Dokuments sein.

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

Das Ergebnis ist, dass das Rendern des Dokuments blockiert wird, bis das führende Inhalts-`<div>` geparst ist, was einen konsistenten Ansichtsübergang sicherstellt.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel könnten Sie das Rendern auf einer kleineren Menge an Inhalten blockieren wollen, wenn die Seite auf einem Gerät mit kleinem Bildschirm geladen wird, als auf einem Gerät mit großem Bildschirm. Dies macht Sinn — auf einem Mobilgerät wird weniger Inhalt sichtbar sein, wenn die Seite erstmals geladen wird, als im Fall eines Desktops.

Dies könnte mit folgendem HTML erreicht werden:

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
