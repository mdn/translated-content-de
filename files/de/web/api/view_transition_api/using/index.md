---
title: Verwenden der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: c1079d8b83ce25341085abe533388ba1ffe342cf
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie Sie Ansichtsübergänge erstellen und die Übergangsanimationen anpassen können und wie Sie aktive Ansichtsübergänge manipulieren können. Dies umfasst Ansichtsübergänge sowohl für DOM-Statusaktualisierungen in einer Single-Page-App (SPA) als auch für das Navigieren zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Prozess des Ansichtsübergangs

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt von der Art des Ansichtsübergangs ab:
   - Bei gleichzeitigen Dokumentenübergängen (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung des Ansichtswechsels auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Bei Übergängen zwischen Dokumenten (MPAs) wird ein Ansichtsübergang ausgelöst, indem die Navigation zu einem neuen Dokument initiiert wird. Sowohl das aktuelle als auch das Ziel-Dokument der Navigation müssen auf demselben Ursprungsort liegen und sich in den Ansichtsübergang einklinken, indem sie eine {{cssxref("@view-transition")}} at-Regel in ihrem CSS mit einem `navigation` Deskriptor von `auto` enthalten.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel zurückgegeben von `startViewTransition()` im Fall von gleichzeitigen Dokumentenübergängen (SPA)). Das `ViewTransition`-Objekt enthält mehrere Promises, die es Ihnen ermöglichen, Code als Antwort auf verschiedene Teile des Ansichtsübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuern von Ansichtsübergängen mit JavaScript](#steuern_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API statische Bild-**Schnappschüsse** von Elementen, die eine deklarierte {{cssxref("view-transition-name")}} haben.
3. Der Ansichtswechsel erfolgt:

   - Bei gleichzeitigen Dokumentenübergängen (SPAs) wird der Callback, der an `startViewTransition()` übergeben wird, aufgerufen, was dazu führt, dass sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) Promise erfüllt, was Ihnen ermöglicht, auf die Aktualisierung des DOMs zu reagieren.

   - Bei Übergängen zwischen Dokumenten (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst "Live"-Snapshops (Bedeutung: interaktive DOM-Bereiche) aus der neuen Ansicht.

   An diesem Punkt steht der Ansichtsübergang kurz davor, gestartet zu werden und das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) Promise wird erfüllt, was Ihnen erlaubt, stattdessen eine benutzerdefinierte JavaScript-Animation auszuführen.

5. Die alten Seitensnapshops animieren "aus", während die neuen Ansichten "ein" animieren. Standardmäßig animieren die alten Ansichtsschnappschüsse von {{cssxref("opacity")}} 1 zu 0 und die neuen Ansichtsschnappschüsse von `opacity` 0 zu 1, was ein Überblenden erstellt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) Promise erfüllt, was Ihnen die Möglichkeit gibt zu reagieren.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt ist, der Browser minimiert ist oder ein anderer Browsertab aktiv ist) während eines Aufrufs zu [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Eine Randbemerkung zu Schnappschüssen

Es ist erwähnenswert, dass wir, wenn wir über Ansichtsübergänge sprechen, häufig den Begriff _Snapshot_ verwenden, um sich auf einen Teil der Seite zu beziehen, der eine `view-transition-name` auf ihm erklärt hat. Diese Abschnitte werden getrennt von anderen Teilen der Seite, die unterschiedliche `view-transition-name` Werte auf ihnen gesetzt haben, animiert. Während der Prozess der Animation eines Snapshots über einen Ansichtsübergang tatsächlich zwei separate Schnappschüsse beinhaltet—einen der alten und einen der neuen UI-Zustände—verwenden wir Snapshot, um den gesamten Seitenbereich zu beschreiben, um es einfach zu halten.

Der Snapshot des alten UI-Zustands ist ein statisches Bild, sodass der Benutzer nicht mit ihm interagieren kann, während es "aus" animiert.

Der Snapshot des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Benutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während es "in" animiert.

### Der Pseudoelement-Baum des Ansichtsübergangs

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudoelement-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Fall von gleichzeitigen Dokumentenübergängen (SPAs) wird der Pseudoelement-Baum im Dokument verfügbar gemacht. Im Fall von Übergängen zwischen Dokumenten (MPAs) wird der Pseudoelement-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Overlay für Ansichtsübergänge, das alle Ansichtsübergangsgruppen enthält und über allen anderen Seiteninhalten sitzt.
- Eine {{cssxref("::view-transition-group()")}} fungiert als Container für jeden Ansichtsübergangssnapshot. Das `root`-Argument gibt den Standardsnapshot an — die Ansichtstransitionsanimation wird auf den Snapshot angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Snapshot des {{cssxref(":root")}} Elements, da die Standard-Browser-Stile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das Obige entfernen und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Snapshot des alten Seitenelements und {{cssxref("::view-transition-new()")}} zielt auf den Live-Snapshot des neuen Seitenelements. Beide rendern sich als ersetzter Inhalt, in derselben Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtstransitionsanimationen zu versehen, indem auf jedem ein anderes {{cssxref("view-transition-name")}} festgelegt wird. In solchen Fällen wird für jedes eine `::view-transition-group()` erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelemente mit Ihren Animationen gezielt ansprechen, um die ausgehenden und eingehenden Animationen anzupassen.

## Erstellen eines grundlegenden Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie Sie einen grundlegenden Ansichtsübergang erstellen, sowohl im SPA- als auch im MPA-Fall.

### Grundlegender SPA-Ansichtsübergang

Eine SPA kann eine Funktionalität enthalten, um neuen Inhalt abzurufen und das DOM als Reaktion auf ein Ereignis irgendeiner Art zu aktualisieren, wie zum Beispiel, wenn ein Navigationslink angeklickt wird oder ein Update vom Server gesendet wird.

Unser [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine grundlegende Bildergalerie. Wir haben eine Reihe von {{htmlelement("a")}} Elementen, die Thumbnail-{{htmlelement("img")}}-Elemente enthalten und dynamisch mit JavaScript generiert wurden. Wir haben auch ein {{htmlelement("figure")}}-Element, das eine {{htmlelement("figcaption")}} und ein `<img>` enthält, welches die Bilder in voller Größe der Galerie anzeigt.

Wenn ein Thumbnail angeklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, wodurch das Bild in voller Größe und seine zugehörige Beschriftung im `<figure>` angezeigt werden. Wir haben dies in eine `updateView()`-Funktion gekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu verarbeiten. Unterstützende Browser zeigen den Übergang von alten zu neuen Bildern und Beschriftungen als glattes Überblenden (die Standard-Ansichtsübergang) an. Es wird auch in nicht unterstützenden Browsern funktionieren, jedoch ohne die schöne Animation.

### Grundlegender MPA-Ansichtsübergang

Wenn Sie einen Übergang zwischen Dokumenten (MPA) erstellen, ist der Prozess sogar noch einfacher als bei SPAs. Es ist kein JavaScript erforderlich, da das Update der Ansicht durch eine gleichzeitige, gleiche Ursprung-Navigation ausgelöst wird, anstatt einer vom JavaScript initiierten DOM-Änderung. Um einen grundlegenden MPA-Ansichtsübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}} at-Regel im CSS sowohl für das aktuelle als auch für das Zieldokument angeben, um sich anzumelden, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese at-Regel in Aktion und zeigt zusätzlich, wie Sie die [ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) der Ansichtstransition anpassen können.

> [!NOTE]
> Derzeit können MPA-Ansichtstransitionen nur zwischen gleichherkunftsmäßigen Dokumenten erstellt werden, aber diese Einschränkung könnte in Zukunft gelockert werden.

## Anpassen Ihrer Animationen

Die Pseudoelemente der View Transitions haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert beschrieben sind).

Die meisten Erscheinungsübergänge erhalten eine standardmäßige sanfte Überblendanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge haben eine sanfte Scaling-Animation angewendet.
- `position`- und `transform`-Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen in jeder gewünschten Weise ändern, indem Sie reguläres CSS verwenden — zielen Sie die "von" Animation mit {{cssxref("::view-transition-old()")}} an und die "zu" Animation mit {{cssxref("::view-transition-new()")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen ansprechen, wenn Sie möchten, dass diese sowohl auf `::view-transition-old()` als auch auf `::view-transition-new()` angewendet werden. Aufgrund der Pseudoelementhierarchie und der Standard-Benutzeragentenstile, werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option zum Sicherstellen Ihres Codes — `::view-transition-group()` animiert ebenfalls und Sie könnten am Ende unterschiedliche Dauerzeiten für die `group`/`image-pair` Pseudoelemente versus die `old` und `new` Pseudoelemente haben.

Im Fall von Übergängen zwischen Dokumenten (MPA) müssen die Pseudoelemente nur im Zieldokument enthalten sein, damit der Ansichtstransition funktioniert. Wenn Sie den Ansichtstransition in beide Richtungen verwenden möchten, müssen Sie es in beiden enthalten.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obenstehende CSS, geht aber noch einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und sie auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudoelemente anwendet. Das Ergebnis ist, dass die Standard-Überblendungstransition gegen eine "hochwischen" Transition ausgetauscht wird, wenn die Navigation erfolgt:

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

Standardmäßig werden alle verschiedenen Elemente, die sich während des Ansichtsupdates ändern, mit derselben Animation überführt. Wenn Sie möchten, dass einige Elemente anders als die Standard-`root`-Animation animieren, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel haben in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente einen `view-transition-name` von `figure-caption`, um sie von dem Rest der Seite im Hinblick auf Ansichtsübergänge zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, wird der generierte Pseudoelement-Baum nun so aussehen:

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

Das Vorhandensein des zweiten Satzes Pseudoelemente ermöglicht es, dass ein separates View-Transition-Styling nur auf das `<figcaption>` angewendet wird. Die verschiedenen alten und neuen Ansichtsaufnahmen werden separat voneinander behandelt.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die Pseudoelemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie an derselben Stelle zu halten und die Standard-Styling daran zu hindern, mit unseren benutzerdefinierten Animationen zu interferieren.

> [!NOTE]
> Sie können `*` als Identifikator in einem Pseudoelement verwenden, um alle Snapshot-Pseudoelemente zu zielen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name` Werte

Die Eigenschaft `view-transition-name` kann einen einzigartigen {{cssxref("custom-ident")}} Wert annehmen, der ein beliebiger Identifikator sein kann, der nicht als Schlüsselwort missinterpretiert wird. Der Wert von `view-transition-name` für jedes gerenderte Element muss einzigartig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Es kann auch Schlüsselwortwerte annehmen von:

- `none`: Verursacht, dass das Element nicht an einem separaten Snapshot teilnimmt, es sei denn, es hat ein übergeordnetes Element mit einem festgelegten `view-transition-name`, in welchem Fall es als Teil dieses Elements aufgenommen wird.
- `match-element`: Setzt automatisch einzigartige `view-transition-name` Werte auf allen ausgewählten Elementen.

### Nutzung der Standard-Animationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als das obige produziert hat. Unser endgültiger `<figcaption>` Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, da `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einem glatten Skalierungsübergang überträgt. Wir mussten nur eine feste `height` auf beiden Zuständen setzen, um es zum Laufen zu bringen.

> **Note:** [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuern von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen erlauben, JavaScript als Antwort auf verschiedene Zustände des Übergangs auszuführen. Zum Beispiel erfüllt [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) sich, sobald der Pseudoelement-Baum erstellt wurde und die Animation kurz vor dem Start steht, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) sich erfüllt, sobald die Animation beendet ist und die neue Seitenansicht sichtbar und interaktiv für den Benutzer ist.

Das `ViewTransition` kann wie folgt zugegriffen werden:

1. Im Fall von gleichzeitigen Dokumentenübergängen (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) das `ViewTransition` zurück, das dem Übergang zugeordnet ist.
2. Im Fall von Übergängen zwischen Dokumenten (MPA):

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation kurz vor dem Entladen steht. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft sowie eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über die [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation) Eigenschaft, die den Typ der Navigation und die aktuellen sowie die Ziellesezeichen-Einträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine Cross-Origin-URL irgendwo in der Weiterleitungskette hat, gibt die `activation` Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Zurück-/Vorwärts-Cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Sehen wir uns einige Beispielcodes an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter gleichzeitiger Dokumentenübergang (SPA)

Der folgende JavaScript-Code könnte verwendet werden, um einen kreisförmigen Enthüllungsübergang zu erstellen, der von der Position des Cursors des Benutzers beim Klick aus ausgeht, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert außerdem das folgende CSS, um die Standard-CSS-Animation abzuschalten und zu verhindern, dass die alten und neuen Ansichtsstände in irgendeiner Weise überblendet werden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt ihn zu überblenden):

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

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang zwischen Dokumenten (MPA)

Das [Verzeichnis der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Gruppe von Teamprofilseiten und zeigt, wie Sie die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwenden, um die ausgehenden und eingehenden Animationen eines Übergangs zwischen Dokumenten anzupassen, basierend auf den "von" und "zu" URLs.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis-Listener sieht wie folgt aus. Dieser setzt View-Transition-Namen auf die Elemente der ausgehenden Seite, die zu den Profilseiten verlinken. Beim Navigieren von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen _nur_ für das geklickte Verknüpfungselement bereitgestellt, in jedem Fall.

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
> Wir entfernen die `view-transition-name` Werte, nachdem in jedem Fall Schnappschüsse gemacht wurden. Wenn wir sie gesetzt lassen würden, würden sie im Seitenstatus gespeichert bleiben, der beim Übergang im {{Glossary("bfcache", "bfcache")}} gespeichert wird. Wenn dann die Zurück-Taste gedrückt wird, würde der `pagereveal` Ereignis-Handler der Seite, zu der zurück navigiert wird, versuchen, dieselben `view-transition-name` Werte auf unterschiedliche Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name` haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener sieht wie folgt aus. Dieser arbeitet ähnlich wie der `pageswap` Ereignis-Listener, wobei zu beachten ist, dass wir hier die "zu" Animation anpassen, für Seitenelemente auf der neuen Seite.

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

## Stabilisierung des Seitenzustands zur Konsistenz von Übergängen zwischen Dokumenten

Vor der Ausführung eines Übergangs zwischen Dokumenten möchten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist und sich auf {{Glossary("Render_blocking", "Render-Blocking")}} verlassen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt sind.
3. Das HTML, das für die anfängliche Ansicht der Seite durch den Benutzer sichtbar ist, geparst wurde, sodass es konsistent rendert.

Stile werden standardmäßig rendert, und Skripte können mit dem [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) Attribut rendert werden.

Um sicherzustellen, dass Ihr initiales HTML geparsed wurde und immer konsistent rendert, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element enthalten Sie die folgenden Attribute:

- `rel="expect"`, um anzuzeigen, dass Sie dieses `<link>` Element verwenden möchten, um einige HTML auf der Seite rendern zu blocken.
- `href="#element-id"`, um die ID des Elements anzugeben, das Sie rendern blocken möchten.
- `blocking="render"`, um das angegebene HTML zu rendern blocken.

Lassen Sie uns erkunden, wie dies mit einem Beispiel-HTML-Dokument aussieht:

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async href="layout.js" blocking="render"></script>

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

Das Ergebnis ist, dass das Dokumentrendern blockiert ist, bis der Lead-Inhalt `<div>` geparsed wurde, wodurch ein konsistenter Ansichtsübergang sichergestellt wird.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel möchten Sie möglicherweise das Rendern einer geringeren Menge an Inhalten blockieren, wenn Sie die Seite auf einem Gerät mit schmalem Bildschirm laden als auf einem Gerät mit breitem Bildschirm. Dies macht Sinn – auf einem Mobilgerät wird weniger Inhalt sichtbar sein, wenn die Seite erstmals geladen wird, als im Fall eines Desktops.

Dies könnte mit dem folgenden HTML erreicht werden:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (min-width: 641px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (max-width: 640px)" />
```
