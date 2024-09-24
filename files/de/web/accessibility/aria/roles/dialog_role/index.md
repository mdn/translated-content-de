---
title: "ARIA: dialog-Rolle"
slug: Web/Accessibility/ARIA/Roles/dialog_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `dialog` wird verwendet, um einen HTML-basierten Anwendungsdialog oder ein Fenster zu kennzeichnen, das Inhalt oder UI vom Rest der Webanwendung oder Seite trennt. Dialoge werden in der Regel über den Rest des Seiteninhalts mithilfe eines Overlays platziert. Dialoge können entweder nicht-modal (es ist weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren) oder modal sein (nur mit dem Inhalt im Dialog kann interagiert werden).

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

## Beschreibung

Ein Dialog ist ein untergeordnetes Fenster des Hauptfensters einer Webanwendung. Für HTML-Seiten ist das Hauptanwendungsfenster das gesamte Webdokument, d.h. das body-Element.

Ein Dialogelement mit der Rolle `dialog` zu kennzeichnen, hilft assistiver Technologie, den Inhalt des Dialogs als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Das Hinzufügen von `role="dialog"` allein ist jedoch nicht ausreichend, um einen Dialog zugänglich zu machen. Darüber hinaus muss Folgendes getan werden:

- Der Dialog muss richtig beschriftet sein.
- Die Tastaturfokussierung muss korrekt verwaltet werden.

Die folgenden Abschnitte beschreiben, wie diese beiden Anforderungen erfüllt werden können.

### Beschriftung

Obwohl es nicht erforderlich ist, dass der Dialog selbst den Fokus erhalten kann, muss er dennoch beschriftet werden. Die dem Dialog gegebene Beschriftung liefert kontextuelle Informationen für die interaktiven Steuerelemente im Dialog. Mit anderen Worten, die Beschriftung des Dialogs fungiert als Gruppierungsbeschriftung für die Steuerelemente darin (ähnlich wie ein `<legend>`-Element eine Gruppierungsbeschriftung für die Steuerelemente in einem `<fieldset>`-Element bereitstellt).

Wenn ein Dialog bereits eine sichtbare Titelleiste hat, kann der Text in dieser Leiste verwendet werden, um den Dialog selbst zu beschriften. Der beste Weg, dies zu erreichen, ist durch die Verwendung des Attributs [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) am `role="dialog"`-Element. Darüber hinaus kann, wenn der Dialog zusätzlichen beschreibenden Text neben dem Dialogtitel enthält, dieser Text mit dem Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) mit dem Dialog in Verbindung gebracht werden. Dieser Ansatz wird im nachfolgenden Codeausschnitt gezeigt:

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

> [!NOTE]
> Beachten Sie, dass der Titel und der beschreibende Text eines Dialogs nicht fokussierbar sein müssen, um von Bildschirmlesern im Nicht-Virtuell-Modus wahrgenommen zu werden. Die Kombination der ARIA-Dialogrolle und der Beschriftungstechniken sollte dazu führen, dass der Bildschirmleser die Informationen des Dialogs ankündigt, wenn der Fokus hinein verlagert wird.

### Erforderliche JavaScript-Funktionen

#### Fokusverwaltung

Ein Dialog hat besondere Anforderungen an die Verwaltung des Tastaturfokus:

- Dialoge sollten immer mindestens ein fokussierbares Steuerelement haben. Für viele Dialoge wird es einen Button wie "Schließen", "OK" oder "Abbrechen" geben. Neben dem erforderlichen Steuerelement können Dialoge eine beliebige Anzahl fokussierbarer Elemente enthalten, sogar ganze Formulare oder andere Container-Widgets wie Registerkarten.
- Wenn der Dialog auf dem Bildschirm erscheint, sollte der Tastaturfokus (dessen Steuerung vom Zweck des Dialogs abhängt) auf das standardmäßig fokussierbare Steuerelement im Dialog verschoben werden. Für Dialoge, die nur eine grundlegende Nachricht bereitstellen, könnte es ein "OK"-Button sein. Für Dialoge, die ein Formular enthalten, könnte es das erste Feld im Formular sein.
- Nachdem der Dialog geschlossen wurde, sollte der Tastaturfokus wieder dorthin verschoben werden, wo er war, bevor er in den Dialog verschoben wurde. Andernfalls kann der Fokus an den Anfang der Seite fallen.
- Für die meisten Dialoge wird erwartet, dass sich die Tabulatorreihenfolge des Dialogs _schließt_, was bedeutet, dass der erste fokussierbare Punkt fokussiert wird, nachdem der letzte erreicht wurde. Mit anderen Worten, die Tabulatorreihenfolge sollte innerhalb und durch den Dialog enthalten sein.
- Wenn der Dialog verschoben oder in der Größe geändert werden kann, stellen Sie sicher, dass diese Aktionen sowohl von Tastaturnutzern als auch von Maussnutzern ausführbar sein müssen. Ebenso, wenn ein Dialog spezielle Funktionen wie Werkzeugleisten oder Kontextmenüs bietet, müssen diese für Tastaturnutzer erreichbar und bedienbar sein.
- Dialoge können modal oder nicht-modal sein. Wenn ein _modaler_ Dialog auf dem Bildschirm erscheint, ist es nicht möglich, mit irgendeinem Seiteninhalt außerhalb des Dialogs zu interagieren. Mit anderen Worten, die Hauptanwendungs-UI oder der Seiteninhalt wird als vorübergehend deaktiviert betrachtet, solange der modale Dialog angezeigt wird. Für _nicht-modale_ Dialoge ist es immer noch möglich, mit Inhalten außerhalb des Dialogs zu interagieren, während der Dialog angezeigt wird. Beachten Sie, dass es für nicht-modale Dialoge eine globale Tastenkombination geben muss, die erlaubt, den Fokus zwischen geöffneten Dialogen und der Hauptseite zu verschieben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Dialog zu beschriften. Oft wird der Wert des `aria-labelledby`-Attributs die id des Elements sein, das den Dialog betitelt.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um den Inhalt des Dialogs zu beschreiben.

### Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die Rolle `dialog` verwendet wird, sollte der Benutzeragent Folgendes tun:

- Das Element als Dialog in der Zugänglichkeits-API des Betriebssystems darstellen.

Wenn der Dialog korrekt beschriftet ist und der Fokus auf ein Element (oft ein interaktives Element wie ein Button) im Dialog verschoben wird, sollten Bildschirmleser die zugängliche Rolle, den Namen und optional die Beschreibung des Dialogs sowie das fokussierte Element ankündigen.

> [!NOTE]
> Meinungen darüber, wie Hilfstechnologien diese Technik behandeln sollten, können variieren, und die Reihenfolge der Ankündigungen kann je nach verwendeter Hilfstechnologie unterschiedlich sein. Die oben bereitgestellte Information ist eine dieser Meinungen und kann sich ändern, wenn die Spezifikation definiert wird.

## Beispiele

### Ein Dialog, der ein Formular enthält

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Subscription Form</h2>
  <p id="dialog1Desc">We will not share this information with third parties.</p>
  <form>
    <p>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" />
    </p>
    <p>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" />
    </p>
    <p>
      <label for="interests">Interests</label>
      <textarea id="interests"></textarea>
    </p>
    <p>
      <input type="checkbox" id="autoLogin" name="autoLogin" />
      <label for="autoLogin">Auto-login?</label>
    </p>
    <p>
      <input type="submit" value="Save Information" />
    </p>
  </form>
</div>
```

#### Funktionierende Beispiele

- [jQuery-UI Dialog](https://jqueryui.com/dialog/)

### Anmerkungen

> [!NOTE]
> Während es möglich ist, Tastaturnutzern zu verhindern, den Fokus auf Elemente außerhalb des Dialogs zu verschieben, können Bildschirmlesernutzer möglicherweise dennoch mit ihrem virtuellen Cursor zu diesem Inhalt navigieren.
> Es ist wichtig für Entwickler sicherzustellen, dass der Inhalt außerhalb des modalen Dialogs für alle Benutzer unzugänglich ist, solange der modale Dialog aktiv ist.

## Spezifikationen

{{Specifications}}

Demnächst

## Siehe auch

- [ARIA: alertdialog-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'Das HTML <code>&lt;dialog&gt;</code>-Element')}}
