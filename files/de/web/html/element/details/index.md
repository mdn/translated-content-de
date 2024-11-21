---
title: "<details>: Das Details-Offenlegungselement"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<details>`**-[HTML](/de/docs/Web/HTML)-Element erstellt ein Offenlegungs-Widget, bei dem Informationen nur sichtbar sind, wenn das Widget in einen "offenen" Zustand umgeschaltet wird. Ein Zusammenfassungs- oder Bezeichnungstext muss mit dem {{HTMLElement("summary")}} Element bereitgestellt werden.

Ein Offenlegungs-Widget wird normalerweise auf dem Bildschirm mit einem kleinen Dreieck angezeigt, das sich dreht (oder verdreht), um den Status offen/geschlossen anzuzeigen, mit einem Etikett neben dem Dreieck. Der Inhalt des `<summary>` Elements wird als Etikett für das Offenlegungs-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

Ein `<details>` Widget kann in einem von zwei Zuständen sein. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und das Etikett innerhalb `<summary>` an (oder eine vom {{Glossary("user_agent", "User-Agent")}} definierte Standardzeichenfolge, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, "dreht" es sich auf, um seinen Inhalt zu enthüllen. Der übliche Gebrauch eines Dreiecks, das sich dreht oder verdreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum diese manchmal "Twisty" genannt werden.

Sie können CSS verwenden, um das Offenlegungs-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie sein [`open`](#open) Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Methode, um den Übergang zwischen geöffnetem und geschlossenem Zustand zu animieren.

Standardmäßig ist das Widget im geschlossenen Zustand nur hoch genug, um das Offenlegungsdreieck und die Zusammenfassung anzuzeigen. Wenn es geöffnet ist, erweitert es sich, um die darin enthaltenen Details anzuzeigen.

Vollständig standardskonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}} Element an. Sie können dies oder das {{cssxref("::marker")}} Pseudo-Element verwenden, um [das Offenlegungs-Widget anzupassen](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses Boolean-Attribut gibt an, ob die Details – d.h. der Inhalt des `<details>` Elements – derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut existiert, oder verborgen, wenn dieses Attribut fehlt. Standardmäßig fehlt dieses Attribut, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, weil dieses Attribut boolean ist.

- `name`

  - : Dieses Attribut ermöglicht, dass mehrere `<details>` Elemente verbunden werden, wobei jeweils nur ein Element geöffnet sein kann. Dies erlaubt Entwicklern, UI-Funktionen wie Akkordeons ohne Skripting einfach zu erstellen.

    Das `name` Attribut gibt einen Gruppennamen an – geben Sie mehreren `<details>` Elementen denselben `name` Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>` Elemente kann gleichzeitig geöffnet sein – das Öffnen eines schließt ein anderes. Wenn mehreren gruppierten `<details>` Elementen das `open` Attribut gegeben wird, wird nur das erste in der Quellenreihenfolge als geöffnet dargestellt.

    > **Note:** `<details>` Elemente müssen nicht benachbart zueinander im Quellcode sein, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen von HTML-Elementen unterstützten Ereignissen, unterstützt das `<details>` Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis, das an das `<details>` Element gesendet wird, wenn sich dessen Zustand zwischen offen und geschlossen ändert. Es wird _nach_ der Zustandsänderung gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, so dass nur eines gesendet wird.

Sie können einen Ereignislistener für das `toggle` Ereignis verwenden, um zu erkennen, wann das Widget den Zustand ändert:

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## Beispiele

### Ein einfaches Offenlegungselement

Dieses Beispiel zeigt ein grundlegendes `<details>` Element mit einem `<summary>`.

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("A_basic_disclosure_example", 650, 150)}}

### Ein offenes Offenlegungsfeld erstellen

Um das `<details>` Feld im geöffneten Zustand zu starten, fügen Sie das Boolean `open` Attribut hinzu:

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Mehrere benannte Offenlegungsfelder

Wir fügen mehrere `<details>` Felder ein, alle mit demselben Namen, sodass jeweils nur eines geöffnet sein kann:

```html
<details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="reqs">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

Versuchen Sie, alle Offenlegungs-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich alle anderen automatisch.

### Anpassung des Erscheinungsbildes

Nun lassen Sie uns etwas CSS anwenden, um das Erscheinungsbild des Offenlegungsfeldes anzupassen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

Dieses CSS erstellt ein Aussehen, das einem Registerkarten-Interface ähnelt, bei dem durch Klicken auf die Registerkarte der Inhalt angezeigt wird.

Der Selektor `details[open]` kann verwendet werden, um das Element zu gestalten, das geöffnet ist.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

Siehe die Seite {{htmlelement("summary")}} für ein [Beispiel zur Anpassung des Offenlegungs-Widgets](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, Abschnittswurzel, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}} Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließendem Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("summary")}}
