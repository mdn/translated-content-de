---
title: "ARIA: Dialog-Rolle"
slug: Web/Accessibility/ARIA/Roles/dialog_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `dialog` Rolle wird verwendet, um einen HTML-basierten Anwendungsdialog oder ein Fenster zu kennzeichnen, das Inhalte oder die Benutzeroberfläche vom Rest der Webanwendung oder Seite trennt. Dialoge werden im Allgemeinen mithilfe einer Überlagerung über den Rest des Seiteninhalts gelegt. Dialoge können entweder nicht-modal (es ist weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren) oder modal sein (nur mit dem Inhalt im Dialog kann interagiert werden).

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

Ein Dialog ist ein untergeordnetes Fenster des Hauptfensters einer Webanwendung. Für HTML-Seiten ist das Hauptanwendungsfenster das gesamte Webdokument, d.h. das `body`-Element.

Ein Dialogelement mit der `dialog` Rolle zu kennzeichnen, hilft unterstützenden Technologien, die Inhalte des Dialogs als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Das Hinzufügen von `role="dialog"` allein reicht jedoch nicht aus, um einen Dialog barrierefrei zu machen. Zusätzlich muss Folgendes erledigt werden:

- Der Dialog muss ordnungsgemäß beschriftet sein
- Die Tastaturfokussierung muss korrekt verwaltet werden

Die folgenden Abschnitte beschreiben, wie diese beiden Anforderungen erfüllt werden können.

### Beschriftung

Obwohl es nicht erforderlich ist, dass der Dialog selbst Fokus empfangen kann, muss er dennoch beschriftet werden. Die dem Dialog gegebene Beschriftung liefert kontextuelle Informationen für die interaktiven Steuerelemente im Dialog. Mit anderen Worten dient die Beschriftung des Dialogs als Gruppierungsbeschriftung für die darin befindlichen Steuerelemente (ähnlich wie ein `<legend>`-Element eine Gruppierungsbeschriftung für die Steuerelemente innerhalb eines `<fieldset>`-Elements bereitstellt).

Wenn ein Dialog bereits eine sichtbare Titelleiste hat, kann der Text in dieser Leiste verwendet werden, um den Dialog selbst zu beschriften. Der beste Weg, dies zu erreichen, ist die Verwendung des Attributs [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) für das `role="dialog"` Element. Darüber hinaus kann, falls der Dialog zusätzlichen beschreibenden Text neben dem Dialogtitel enthält, dieser Text mithilfe des Attributs [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) mit dem Dialog verknüpft werden. Dieser Ansatz wird im folgenden Code-Snippet gezeigt:

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
> Bedenken Sie, dass der Titel und der beschreibende Text eines Dialogs nicht fokussierbar sein müssen, um von Bildschirmlesern im Nicht-Virtuellen-Modus wahrgenommen zu werden. Die Kombination aus der ARIA-Dialogrolle und Beschriftungstechniken sollte den Bildschirmleser dazu bringen, die Informationen des Dialogs anzukündigen, wenn der Fokus darauf verschoben wird.

### Erforderliche JavaScript-Funktionen

#### Fokussverwaltung

Ein Dialog hat spezielle Anforderungen, wie die Tastaturfokussierung verwaltet werden sollte:

- Dialoge sollten immer mindestens ein fokussierbares Steuerelement haben. Bei vielen Dialogen gibt es einen Button wie "Schließen", "OK" oder "Abbrechen". Zusätzlich zu dem benötigten Steuerelement können Dialoge beliebig viele fokussierbare Elemente enthalten, sogar ganze Formulare oder andere Container-Widgets wie Registerkarten.
- Wenn der Dialog auf dem Bildschirm erscheint, sollte die Tastaturfokussierung (die Kontrolle hängt vom Zweck des Dialogs ab) auf das standardmäßige fokussierbare Element im Dialog verschoben werden. Bei Dialogen, die nur eine grundlegende Nachricht bereitstellen, könnte es ein "OK"-Button sein. Bei Dialogen, die ein Formular enthalten, könnte es das erste Feld im Formular sein.
- Nachdem der Dialog geschlossen wurde, sollte die Tastaturfokussierung zurück zu der Position verschoben werden, an der sie sich befand, bevor sie in den Dialog verschoben wurde. Andernfalls kann der Fokus auf den Anfang der Seite fallen.
- Für die meisten Dialoge wird erwartet, dass sich die Tabulatorreihenfolge des Dialogs _im Kreis schließt_, was bedeutet, dass, wenn Benutzer durch die fokussierbaren Elemente im Dialog tabben, das erste fokussierbare Element fokussiert wird, nachdem das letzte erreicht wurde. Mit anderen Worten sollte die Tabulatorreihenfolge innerhalb und durch den Dialog enthalten sein.
- Falls der Dialog verschoben oder in der Größe verändert werden kann, stellen Sie sicher, dass diese Aktionen sowohl von Tastaturbenutzern als auch von Mausnutzern ausgeführt werden können. Ebenso müssen spezielle Funktionen wie Werkzeugleisten oder Kontextmenüs im Dialog für Tastaturbenutzer zugänglich und bedienbar sein.
- Dialoge können modal oder nicht-modal sein. Wenn ein _modaler_ Dialog auf dem Bildschirm erscheint, ist es nicht möglich, mit irgendwelchen Seiteninhalten außerhalb des Dialogs zu interagieren. Mit anderen Worten wird die Hauptanwendungs-Benutzeroberfläche oder der Seiteninhalt als vorübergehend deaktiviert betrachtet, solange der modale Dialog angezeigt wird. Bei _nicht-modalen_ Dialogen ist es immer noch möglich, mit Inhalten außerhalb des Dialogs zu interagieren, während der Dialog angezeigt wird. Beachten Sie, dass es für nicht-modale Dialoge eine globale Tastenkombination geben muss, die es erlaubt, den Fokus zwischen geöffneten Dialogen und der Hauptseite zu bewegen.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Dialog zu beschriften. Oft ist der Wert des `aria-labelledby`-Attributs die ID des Elements, das den Dialog betitelt.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Inhalte des Dialogs zu beschreiben.

### Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologie

Wenn die `dialog` Rolle verwendet wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Barrierefreiheits-API des Betriebssystems als Dialog darstellen.

Wenn der Dialog korrekt beschriftet ist und der Fokus auf ein Element (oft ein interaktives Element, wie z.B. ein Button) im Dialog bewegt wird, sollten Bildschirmleser die zugängliche Rolle des Dialogs, den Namen und optional die Beschreibung zusammen mit dem fokussierten Element ankündigen.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien mit dieser Technik umgehen sollten, können variieren, und die Reihenfolge der Ankündigungen kann je nach verwendeter unterstützender Technologie unterschiedlich sein. Die oben bereitgestellten Informationen stellen eine dieser Meinungen dar und können sich ändern, wenn die Spezifikation definiert wird.

## Beispiele

### Ein Dialog mit einem Formular

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
> Obwohl es möglich ist, Tastaturbenutzer daran zu hindern, den Fokus auf Elemente außerhalb des Dialogs zu bewegen, können Bildschirmleser-Benutzer dennoch in der Lage sein, mit ihrem virtuellen Cursor auf diesen Inhalt zuzugreifen.
> Es ist wichtig für Entwickler sicherzustellen, dass Inhalte außerhalb des modalen Dialogs für alle Benutzer unzugänglich sind, solange der modale Dialog aktiv ist.

## Spezifikationen

{{Specifications}}

Demnächst verfügbar

## Siehe auch

- [ARIA: alertdialog Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'Das HTML <code>&lt;dialog&gt;</code> Element')}}
