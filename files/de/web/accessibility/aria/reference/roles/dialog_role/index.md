---
title: "ARIA: dialog-Rolle"
short-title: dialog
slug: Web/Accessibility/ARIA/Reference/Roles/dialog_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `dialog`-Rolle wird verwendet, um einen HTML-basierten Anwendungsdialog oder ein Fenster zu markieren, das den Inhalt oder die Benutzeroberfläche vom Rest der Webanwendung oder Seite trennt. Dialoge werden im Allgemeinen über den Rest des Seiteninhalts mithilfe einer Überlagerung platziert. Dialoge können entweder nicht-modal (es ist immer noch möglich, mit Inhalten außerhalb des Dialogs zu interagieren) oder modal sein (nur mit dem Inhalt im Dialog kann interagiert werden).

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

Ein Dialog ist ein untergeordnetes Fenster des Primärfensters einer Webanwendung. Für HTML-Seiten ist das Primärfenster der Anwendung das gesamte Webdokument, d.h. das Body-Element.

Das Markieren eines Dialogelements mit der `dialog`-Rolle hilft unterstützenden Technologien, den Inhalt des Dialogs als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Das Hinzufügen von `role="dialog"` allein ist jedoch nicht ausreichend, um einen Dialog zugänglich zu machen. Zusätzlich muss Folgendes beachtet werden:

- Der Dialog muss ordnungsgemäß beschriftet sein
- Der Tastaturfokus muss korrekt verwaltet werden

Die folgenden Abschnitte beschreiben, wie diese beiden Anforderungen erfüllt werden können.

### Beschriftung

Auch wenn es nicht erforderlich ist, dass der Dialog selbst den Fokus erhalten kann, muss er dennoch beschriftet werden. Die dem Dialog gegebene Beschriftung liefert kontextuelle Informationen für die interaktiven Steuerelemente im Dialog. Mit anderen Worten, die Beschriftung des Dialogs fungiert als Gruppierungsetikett für die darin befindlichen Steuerelemente (ähnlich wie ein `<legend>`-Element ein Gruppierungsetikett für die Steuerelemente innerhalb eines `<fieldset>`-Elements bereitstellt).

Wenn ein Dialog bereits über eine sichtbare Titelleiste verfügt, kann der darin enthaltene Text zur Beschriftung des Dialogs selbst verwendet werden. Der beste Weg, dies zu erreichen, ist die Verwendung des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attributs auf dem `role="dialog"`-Element. Darüber hinaus, wenn der Dialog zusätzlichen beschreibenden Text neben dem Dialogtitel enthält, kann dieser Text mit dem Dialog unter Verwendung des [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attributs verknüpft werden. Dieser Ansatz wird im folgenden Code-Snippet gezeigt:

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
> Beachten Sie, dass der Titel und der Beschreibungstext eines Dialogs nicht fokussierbar sein müssen, damit sie von Bildschirmlesern im nicht-virtuellen Modus wahrgenommen werden können. Die Kombination der ARIA-Dialogrolle und der Beschriftungstechniken sollte den Bildschirmleser veranlassen, die Informationen des Dialogs anzukündigen, wenn der Fokus darauf verschoben wird.

### Erforderliche JavaScript-Funktionen

#### Fokusverwaltung

Ein Dialog hat bestimmte Anforderungen an die Verwaltung des Tastaturfokus:

- Dialoge sollten immer mindestens ein fokussierbares Steuerelement haben. Bei vielen Dialogen gibt es einen Button wie "Schließen", "OK" oder "Abbrechen". Zusätzlich zu dem erforderlichen Steuerelement können Dialoge beliebig viele fokussierbare Elemente enthalten, sogar ganze Formulare oder andere Container-Widgets wie Tabs.
- Wenn der Dialog auf dem Bildschirm erscheint, sollte der Tastaturfokus (dessen Steuerung vom Zweck des Dialogs abhängt) auf das standardmäßig fokussierbare Steuerelement im Dialog verschoben werden. Bei Dialogen, die nur eine grundlegende Nachricht anzeigen, könnte es ein "OK"-Button sein. Bei Dialogen, die ein Formular enthalten, könnte es das erste Feld im Formular sein.
- Nachdem der Dialog geschlossen wurde, sollte der Tastaturfokus zurück an die Stelle verschoben werden, an der er war, bevor er in den Dialog verschoben wurde. Andernfalls kann der Fokus an den Anfang der Seite fallen.
- Für die meisten Dialoge wird erwartet, dass die Tabulatorreihenfolge im Dialog _umwickelt_, was bedeutet, dass, wenn der Benutzer durch die fokussierbaren Elemente im Dialog tabbt, das erste fokussierbare Element fokussiert wird, nachdem das letzte erreicht wurde. Mit anderen Worten, die Tabulatorreihenfolge sollte innerhalb und vom Dialog eingeschlossen sein.
- Wenn der Dialog verschoben oder in der Größe verändert werden kann, stellen Sie sicher, dass diese Aktionen sowohl von Tastatur- als auch von Mausbenutzern ausführbar sein müssen. Ebenso, wenn ein Dialog spezielle Funktionen wie Symbolleisten oder Kontextmenüs bereitstellt, müssen diese für Tastaturbenutzer erreichbar und bedienbar sein.
- Dialoge können modal oder nicht-modal sein. Wenn ein _modaler_ Dialog auf dem Bildschirm erscheint, ist es nicht möglich, mit irgendwelchen Seiteninhalten außerhalb des Dialogs zu interagieren. Mit anderen Worten, die Hauptanwendungsschnittstelle oder der Seiteninhalt wird als vorübergehend deaktiviert betrachtet, solange der modale Dialog angezeigt wird. Bei _nicht-modalen_ Dialogen ist es immer noch möglich, mit Inhalten außerhalb des Dialogs zu interagieren, während der Dialog angezeigt wird. Beachten Sie, dass es für nicht-modale Dialoge eine globale Tastenkombination geben muss, die es ermöglicht, den Fokus zwischen den geöffneten Dialogen und der Hauptseite zu verschieben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Dialog zu beschriften. Oft wird der Wert des `aria-labelledby`-Attributs die ID des Elements sein, das den Dialog betitelt.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um den Inhalt des Dialogs zu beschreiben.

### Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `dialog`-Rolle verwendet wird, sollte der Benutzeragent Folgendes tun:

- Das Element als Dialog in der Zugänglichkeits-API des Betriebssystems freigeben.

Wenn der Dialog korrekt beschriftet ist und der Fokus auf ein Element (oft ein interaktives Element wie ein Button) im Dialog verschoben wird, sollten Bildschirmleser die zugängliche Rolle, den Namen und optional die Beschreibung des Dialogs ankündigen, zusammen mit der Ankündigung des fokussierten Elements.

> [!NOTE]
> Es kann unterschiedliche Meinungen darüber geben, wie unterstützende Technologien mit dieser Technik umgehen sollten, und die Reihenfolge der Ankündigungen kann je nach verwendeter unterstützender Technologie variieren. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern, wenn die Spezifikation definiert wird.

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

### Hinweise

> [!NOTE]
> Während es möglich ist, Tastaturbenutzer daran zu hindern, den Fokus auf Elemente außerhalb des Dialogs zu verschieben, können Bildschirmleserbenutzer dennoch zu diesem Inhalt navigieren, indem sie den virtuellen Cursor ihres Bildschirmlesers verwenden.
> Es ist wichtig, dass Entwickler sicherstellen, dass der Inhalt außerhalb des modalen Dialogs für alle Benutzer unzugänglich ist, solange der modale Dialog aktiv ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: alertdialog-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'Das HTML <code>&lt;dialog&gt;</code>-Element')}}
