---
title: "<details>: Das Details-Offenlegungselement"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: aee844b529ac0cc6ac6bc480b92fc2eea78c3292
---

{{HTMLSidebar}}

Das **`<details>`** [HTML](/de/docs/Web/HTML)-Element erstellt ein Offenlegungs-Widget, in dem Informationen nur sichtbar sind, wenn das Widget in den "offenen" Zustand umgeschaltet wird. Eine Zusammenfassung oder Bezeichnung muss mithilfe des {{HTMLElement("summary")}}-Elements bereitgestellt werden.

Ein Offenlegungs-Widget wird typischerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das rotiert (oder sich dreht), um den offenen/geschlossenen Status anzuzeigen, mit einer Bezeichnung neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Bezeichnung für das Offenlegungs-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die `<summary>`.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

Ein `<details>`-Widget kann sich in einem von zwei Zuständen befinden. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und die Bezeichnung innerhalb von `<summary>` an (oder eine {{Glossary("user_agent", "User-Agent")}}-definierte Standardzeichenfolge, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, "dreht" es sich auf und zeigt seinen Inhalt an. Die übliche Verwendung eines Dreiecks, das rotiert oder sich dreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum diese manchmal als "Twisty" bezeichnet werden.

Sie können CSS verwenden, um das Offenlegungs-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie das [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, den Übergang zwischen offen und geschlossen zu animieren.

Standardmäßig zeigt das Widget im geschlossenen Zustand nur die Offenlegungsdreieck und die Zusammenfassung an. Im offenen Zustand wird es erweitert, um die enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies oder das {{cssxref("::marker")}}-Pseudo-Element verwenden, um das [Offenlegungs-Widget anzupassen](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses Boolean-Attribut zeigt an, ob die Details — also der Inhalt des `<details>`-Elements — derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut existiert, oder verborgen, wenn dieses Attribut fehlt. Standardmäßig ist dieses Attribut nicht vorhanden, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details zu verbergen. `open="false"` macht die Details sichtbar, da dieses Attribut Boolean ist.

- `name`

  - : Dieses Attribut ermöglicht die Verbindung mehrerer `<details>`-Elemente, wobei jeweils nur eines geöffnet sein kann. Dies ermöglicht es Entwicklern, UI-Funktionalitäten wie Akkordeons ohne Scripting einfach zu erstellen.

    Das `name`-Attribut gibt einen Gruppennamen an — geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Es kann immer nur eines der gruppierten `<details>`-Elemente geöffnet sein – das Öffnen eines führt dazu, dass ein anderes geschlossen wird. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellreihenfolge geöffnet gerendert.

    > **Hinweis:** `<details>`-Elemente müssen nicht benachbart zueinander im Quelltext sein, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen von HTML-Elementen unterstützten Ereignissen unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, das immer dann an das `<details>`-Element gesendet wird, wenn sich sein Zustand zwischen offen und geschlossen ändert. Es wird _nachdem_ der Zustand geändert wurde, gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle`-Ereignis verwenden, um zu erkennen, wann das Widget seinen Zustand ändert:

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

### Ein einfaches Offenlegungsbeispiel

Dieses Beispiel zeigt ein einfaches `<details>`-Element mit einem `<summary>`.

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

{{EmbedLiveSample("A_simple_disclosure_example", 650, 150)}}

### Erstellen einer offenen Offenlegungsbox

Um die `<details>`-Box im offenen Zustand zu starten, fügen Sie das Boolean `open`-Attribut hinzu:

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

### Mehrere benannte Offenlegungsboxen

Wir fügen mehrere `<details>`-Boxen ein, alle mit demselben Namen, sodass jeweils nur eine geöffnet sein kann:

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

Versuchen Sie, alle Offenlegungs-Widgets zu öffnen. Wenn Sie eines öffnen, werden alle anderen automatisch geschlossen.

### Anpassung des Erscheinungsbilds

Nun wenden wir etwas CSS an, um das Erscheinungsbild der Offenlegungsbox anzupassen.

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

Dieses CSS erstellt ein Erscheinungsbild ähnlich einer Registerkarten-Schnittstelle, bei der durch Klicken auf die Registerkarte der Inhalt angezeigt wird.

Der Selektor `details[open]` kann verwendet werden, um das geöffnete Element zu gestalten.

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

Sehen Sie sich die {{htmlelement("summary")}} Seite für ein [Beispiel zur Anpassung des Offenlegungs-Widgets](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon) an.

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
          >Flussinhalt</a
        >, Abschnittswurzel, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Ausschluss</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
