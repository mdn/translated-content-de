---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die **`HTMLOutputElement`**-Schnittstelle stellt Eigenschaften und Methoden (zusätzlich zu den von {{domxref("HTMLElement")}} geerbten) für die Manipulation des Layouts und der Darstellung von {{HTMLElement("output")}}-Elementen zur Verfügung.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil {{domxref("HTMLElement")}}._

- {{domxref("HTMLOutputElement.defaultValue")}}
  - : Ein String, der den Standardwert des Elements darstellt, zunächst der leere String.
- {{domxref("HTMLOutputElement.form")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLFormElement")}}-Element, das das mit dem Steuerungselement verbundene Formular anzeigt und das [`form`](/de/docs/Web/HTML/Element/output#form)-HTML-Attribut widerspiegelt, falls es definiert ist.
- {{domxref("HTMLOutputElement.htmlFor")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMTokenList")}}, das das [`for`](/de/docs/Web/HTML/Element/output#for)-HTML-Attribut widerspiegelt und eine Liste von IDs anderer Elemente im selben Dokument enthält, die zum berechneten `value` beitragen (oder diesen anderweitig beeinflussen).
- {{domxref("HTMLOutputElement.labels")}} {{ReadOnlyInline}}
  - : Eine {{domxref("NodeList")}} von {{HTMLElement("label")}}-Elementen, die mit dem Element verbunden sind.
- {{domxref("HTMLOutputElement.name")}}
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/output#name)-HTML-Attribut widerspiegelt und den Namen für das Steuerungselement enthält, der mit den Formulardaten übermittelt wird.
- {{domxref("HTMLOutputElement.type")}} {{ReadOnlyInline}}
  - : Der String "`output`".
- {{domxref("HTMLOutputElement.validationMessage")}} {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder es seine Einschränkungen erfüllt.
- {{domxref("HTMLOutputElement.validity")}} {{ReadOnlyInline}}
  - : Ein {{domxref("ValidityState")}}, das die Gültigkeitszustände repräsentiert, in denen sich dieses Element befindet.
- {{domxref("HTMLOutputElement.value")}}
  - : Ein String, der den Wert der Inhalte der Elemente darstellt. Verhält sich wie die {{domxref("Node.textContent")}}-Eigenschaft.
- {{domxref("HTMLOutputElement.willValidate")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Immer `false` für `HTMLOutputElement`-Objekte.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil {{domxref("HTMLElement")}}._

- {{domxref("HTMLOutputElement.checkValidity()")}}
  - : Überprüft die Gültigkeit des Elements und gibt einen booleschen Wert zurück, der das Prüfergebnis anzeigt.
- {{domxref("HTMLOutputElement.reportValidity()")}}
  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, löst sie ein {{domxref("HTMLInputElement/invalid_event", "invalid")}}-Ereignis am Element aus und gibt `false` zurück; wenn keine Probleme vorliegen, gibt sie `true` zurück.

    Wenn das Problem gemeldet wird, kann der Benutzeragent das Element fokussieren und die Scroll-Position des Dokuments ändern oder eine andere Aktion ausführen, die das Element der Aufmerksamkeit des Benutzers zuwendet. Benutzeragenten können mehr als eine Einschränkungsverletzung melden, wenn dieses Element gleichzeitig unter mehreren Problemen leidet. Wenn das Element nicht gerendert wird, kann der Benutzeragent stattdessen den Fehler für das laufende Skript melden, anstatt den Benutzer zu benachrichtigen.

- {{domxref("HTMLOutputElement.setCustomValidity()")}}
  - : Legt eine benutzerdefinierte Gültigkeitsnachricht für das Element fest. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

## Modi

Dieses Element verhält sich in einem von zwei Modi: _Standard_-Modus und _Wert_-Modus.

### Standardmodus

Zunächst befindet sich das Element im Standardmodus, wodurch der Inhalt des Elements sowohl den Wert des Elements als auch dessen Standardwert darstellt.

Wenn sich das Element im Standardmodus befindet, wenn die Nachfahren des Elements in irgendeiner Weise geändert werden, wird die `defaultValue`-Eigenschaft auf den Wert der {{domxref("Node.textContent","textContent")}}-Eigenschaft gesetzt.

Das Zurücksetzen des Formulars versetzt das Element in den Standardmodus und setzt die {{domxref("Node.textContent","textContent")}}-Eigenschaft auf den Wert der `defaultValue`-Eigenschaft.

### Wertmodus

Das Element wechselt in den Wertmodus, wenn die Inhalte der `value`-Eigenschaft gesetzt werden. Die `value`-Eigenschaft verhält sich ansonsten wie die {{domxref("Node.textContent","textContent")}}-Eigenschaft. Wenn sich das Element im Wertmodus befindet, ist der Standardwert nur über die `defaultValue`-Eigenschaft zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("output")}}.
