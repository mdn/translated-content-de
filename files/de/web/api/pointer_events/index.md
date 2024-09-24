---
title: Zeigereignisse
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil des heutigen Webinhalts geht davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeigeeingabegeräten unterstützen, wie z.B. Stifte/Stylus und Touch-Oberflächen, sind Erweiterungen der bestehenden Zeigegeräte-Ereignismodelle erforderlich. _[Zeigereignisse](#zeigereignis)_ adressieren dieses Bedürfnis.

Zeigereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie wurden entwickelt, um ein einziges DOM-Ereignismodell zu schaffen, das Zeigeeingabegeräte wie Maus, Stift/Stylus oder Touch (wie ein oder mehrere Finger) verarbeitet.

Der _[Zeiger](#zeiger)_ ist ein hardwareunabhängiges Gerät, das auf eine spezifische Menge von Bildschirmkoordinaten zielen kann. Ein einzelnes Ereignismodell für Zeiger zu haben, kann die Erstellung von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung unabhängig von der Hardware des Benutzers bieten. Bei Szenarien, in denen eine gerätespezifische Handhabung gewünscht ist, definiert Zeigereignisse eine {{domxref("PointerEvent.pointerType","pointerType")}} Eigenschaft, um den Gerätetyp zu inspizieren, der das Ereignis erzeugt hat.

Die Ereignisse, die benötigt werden, um generische Zeigereingaben zu verarbeiten, sind analog zu {{domxref("MouseEvent","Mausereignissen", "", 1)}} (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, etc.). Folglich sind die Zeigereignistypen absichtlich ähnlich zu den Maustypen.

Darüber hinaus enthält ein Zeigereignis die üblichen Eigenschaften, die in Mausereignissen vorhanden sind (Client-Koordinaten, Ziel-Element, Tastenstatus, etc.) zusätzlich zu neuen Eigenschaften für andere Formen der Eingabe: Druck, Kontaktgeometrie, Neigung, etc. Tatsächlich erbt die {{domxref("PointerEvent")}} Schnittstelle alle Eigenschaften der {{domxref("MouseEvent")}}, was somit die Migration von Inhalten von Maus- zu Zeigereignissen erleichtert.

## Terminologie

### Aktiver Tastenstatus

Der Zustand, wenn ein _[Zeiger](#zeiger)_ einen vom Null-Wert abweichenden Wert für die `buttons` Eigenschaft hat. Zum Beispiel im Fall eines Stifts, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder zumindest eine Taste gedrückt ist, während er schwebt.

### Aktiver Zeiger

Jedes _[Zeiger](#zeiger)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er noch weitere Ereignisse erzeugen kann. Zum Beispiel wird ein Stift, der sich in einem gedrückten Zustand befindet, als aktiv betrachtet, da er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Sensorgerät mit einer Oberfläche, das Kontakt erkennen kann. Am häufigsten ist das Sensorgerät ein berührungsempfindlicher Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erkennen kann. Einige Sensorgeräte können die Nähe des Eingabegeräts erkennen, und der Zustand wird als Schweben bezeichnet, ähnlich wie bei einer Maus.

### Treffertest

Der Prozess, den der Browser verwendet, um ein Ziel-Element für ein Zeigereignis zu bestimmen. In der Regel wird dies bestimmt, indem der Standort des Zeigers und auch das visuelle Layout von Elementen in einem Dokument auf dem Bildschirmmedium berücksichtigt werden.

### Zeiger

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf ein bestimmtes Koordinatenpaar (oder Satz von Koordinaten) auf einem Bildschirm zielen können. Beispiele für _Zeiger_ Eingabegeräte sind Maus, Stift/Stylus und Berührungskontakte.

### Zeigererfassung

Die Zeigererfassung ermöglicht es, die Ereignisse für einen Zeiger auf ein bestimmtes Element umzuleiten, abweichend vom normalen Ergebnis des Treffertests am Standort des Zeigers. Weitere Informationen finden Sie in [Zeiger erfassen](#erfassen_des_zeigers).

> **Note:** _Zeigererfassung_ unterscheidet sich von [_Zeigersperre_](/de/docs/Web/API/Pointer_Lock_API), die physisch verhindert, dass der Zeiger einen Bereich verlässt.

### Zeigereignis

Ein DOM {{domxref("PointerEvent","Ereignis")}}, das für einen _[Zeiger](#zeiger)_ ausgelöst wird.

## Schnittstellen

Die primäre Schnittstelle ist die {{domxref("PointerEvent")}} Schnittstelle, die einen {{domxref("PointerEvent.PointerEvent","Konstruktor")}} sowie mehrere Ereignistypen und zugehörige globale Ereignishandler hat.

Der Standard enthält auch einige Erweiterungen der {{domxref("Element")}} und {{domxref("Navigator")}} Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen der einzelnen Schnittstellen und Eigenschaften.

### PointerEvent Schnittstelle

Die {{domxref("PointerEvent")}} Schnittstelle erweitert die {{domxref("MouseEvent")}} Schnittstelle und hat die folgenden Eigenschaften.

- {{ domxref('PointerEvent.altitudeAngle', 'altitudeAngle')}} {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen einer Achse eines Umformers (einem Zeiger oder Stylus) und der XY-Ebene eines Gerätes.
- {{ domxref('PointerEvent.azimuthAngle', 'azimuthAngle')}} {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der YZ-Ebene und der Ebene, die sowohl die Achse des Umformers (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung des Zeigegeräts, das das `PointerEvent` erzeugt.
- {{ domxref('PointerEvent.pointerId','pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{ domxref('PointerEvent.width','width')}} {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{ domxref('PointerEvent.height','height')}} {{ReadOnlyInline}}
  - : die Höhe (Magnitude auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{ domxref('PointerEvent.pressure','pressure')}} {{ReadOnlyInline}}
  - : der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erfassen kann, jeweils.
- {{ domxref('PointerEvent.tangentialPressure','tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Barrel-Druck oder Zylinderbeanspruchung) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position des Steuergeräts ist.
- {{ domxref('PointerEvent.tiltX','tiltX')}} {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der YZ-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift) als auch die Y-Achse enthält.
- {{ domxref('PointerEvent.tiltY','tiltY')}} {{ReadOnlyInline}}
  - : der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der XZ-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift) als auch die X-Achse enthält.
- {{ domxref('PointerEvent.twist','twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift) um seine Hauptachse im Uhrzeigersinn in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{ domxref('PointerEvent.pointerType','pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- {{ domxref('PointerEvent.isPrimary','isPrimary')}} {{ReadOnlyInline}}
  - : Zeigt an, ob der Zeiger den primären Zeiger dieses Zeigertyps repräsentiert.

### Ereignistypen und globale Ereignishandler

Zeigereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignisgegenstücke haben (`down`, `up`, `move`, `over`, `out`, `enter`, und `leave`).

Untenstehend finden Sie eine kurze Beschreibung der einzelnen Ereignistypen.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref('Element/pointerover_event', 'pointerover')}}                                       | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                             |
| {{domxref('Element/pointerenter_event', 'pointerenter')}}                                     | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest)-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Ergebnis eines `pointerdown` Ereignisses von einem Gerät, das keine Schwebung unterstützt (siehe `pointerdown`).                                                                                |
| {{domxref('Element/pointerdown_event', 'pointerdown')}}                                       | Wird ausgelöst, wenn ein Zeiger _aktuellen Tastenstatus_ erreicht.                                                                                                                                                                                                                                                                               |
| {{domxref('Element/pointermove_event', 'pointermove')}}                                       | Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerstatus nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                              |
| {{domxref('Element/pointerup_event', 'pointerup')}}                                           | Wird ausgelöst, wenn ein Zeiger nicht mehr im _aktuellen Tastenstatus_ ist.                                                                                                                                                                                                                                                                       |
| {{domxref('Element/pointercancel_event', 'pointercancel')}}                                   | Ein Browser löst dieses Ereignis aus, wenn er entscheidet, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel wenn das zugehörige Gerät deaktiviert ist).                                                                                                                                                                         |
| {{domxref('Element/pointerout_event', 'pointerout')}}                                         | Wird aus mehreren Gründen ausgelöst, einschließlich: Zeiger wird aus den [Treffertest](#treffertest)-Grenzen eines Elements bewegt; Auslösen des `pointerup` Ereignisses für ein Gerät, das keine Schwebung unterstützt (siehe `pointerup`); nach dem Auslösen des `pointercancel` Ereignisses (siehe `pointercancel`); wenn ein Stift die Schwebereichweite verlässt, die vom Digitalisierer erkannt werden kann. |
| {{domxref('Element/pointerleave_event', 'pointerleave')}}                                     | Wird ausgelöst, wenn ein Zeiger aus den [Treffertest](#treffertest)-Grenzen eines Elements bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stylus die Schwebereichweite verlässt, die vom Digitalisierer erkannt werden kann.                                                                                                                                         |
| {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}} {{experimental_inline}}     | Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine `pointerdown` oder `pointerup` Ereignisse auslösen.                                                                                                                                                                                                                                                  |
| {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}                           | Wird ausgelöst, wenn ein Element Zeigererfassung erhält.                                                                                                                                                                                                                                                                                                   |
| {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}                         | Wird nach dem Freigeben der Zeigererfassung für einen Zeiger ausgelöst.                                                                                                                                                                                                                                                                                  |

### Elementerweiterungen

Es gibt drei Erweiterungen der {{domxref("Element")}} Schnittstelle:

- {{domxref("Element.hasPointerCapture()","hasPointerCapture()")}}
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, die Zeigererfassung für den vom gegebenen Zeiger ID identifizierten Zeiger hat.
- {{domxref("Element.releasePointerCapture()","releasePointerCapture()")}}
  - : Gibt die _Zeigererfassung_ frei, die zuvor für ein bestimmtes Zeigereignis eingestellt wurde.
- {{domxref("Element.setPointerCapture()","setPointerCapture()")}}
  - : Bezeichnet ein spezifisches Element als das _Erfassungsziel_ zukünftiger Zeigereignisse.

### Navigator Erweiterung

Die {{domxref("Navigator.maxTouchPoints")}} Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu ermitteln, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für grundlegende Verwendung der Zeigereignisschnittstellen.

### Registrierung von Ereignishandlern

Dieses Beispiel registriert einen Handler für jeden Ereignistyp für das gegebene Element.

```html
<div id="target">Berühren Sie mich…</div>
```

```js
function over_handler(event) {}
function enter_handler(event) {}
function down_handler(event) {}
function move_handler(event) {}
function up_handler(event) {}
function cancel_handler(event) {}
function out_handler(event) {}
function leave_handler(event) {}
function rawupdate_handler(event) {}
function gotcapture_handler(event) {}
function lostcapture_handler(event) {}

function init() {
  const el = document.getElementById("target");
  // Zeigereignishandler registrieren
  el.onpointerover = over_handler;
  el.onpointerenter = enter_handler;
  el.onpointerdown = down_handler;
  el.onpointermove = move_handler;
  el.onpointerup = up_handler;
  el.onpointercancel = cancel_handler;
  el.onpointerout = out_handler;
  el.onpointerleave = leave_handler;
  el.onpointerrawupdate = rawupdate_handler;
  el.ongotpointercapture = gotcapture_handler;
  el.onlostpointercapture = lostcapture_handler;
}

document.addEventListener("DOMContentLoaded", init);
```

### Ereigniseigenschaften

Dieses Beispiel zeigt das Zugreifen auf alle Eigenschaften eines Zeigereignisses.

```html
<div id="target">Berühren Sie mich…</div>
```

```js
const id = -1;

function process_id(event) {
  // Prozessieren dieses Ereignisses basierend auf der ID des Ereignisses
}
function process_mouse(event) {
  // Verarbeiten des Mauszeigereignisses
}
function process_pen(event) {
  // Verarbeiten des Stiftzeigereignisses
}
function process_touch(event) {
  // Verarbeiten des Berührungszeigereignisses
}
function process_tilt(tiltX, tiltY) {
  // Neigungsdaten-Handler
}
function process_pressure(pressure) {
  // Druck-Handler
}
function process_non_primary(event) {
  // Nicht-primärer Handler
}

function down_handler(ev) {
  // Berechnen der Kontaktfläche des Berührungspunkts
  const area = ev.width * ev.height;

  // Vergleichen der gespeicherten ID mit der ID dieses Ereignisses und entsprechend verarbeiten
  if (id === ev.identifier) process_id(ev);

  // Den entsprechenden Zeigertyp-Handler aufrufen
  switch (ev.pointerType) {
    case "mouse":
      process_mouse(ev);
      break;
    case "pen":
      process_pen(ev);
      break;
    case "touch":
      process_touch(ev);
      break;
    default:
      console.log(`pointerType ${ev.pointerType} wird nicht unterstützt`);
  }

  // Den Neigungshandler aufrufen
  if (ev.tiltX !== 0 && ev.tiltY !== 0) process_tilt(ev.tiltX, ev.tiltY);

  // Den Druck-Handler aufrufen
  process_pressure(ev.pressure);

  // Wenn dieses Ereignis nicht primär ist, den nicht-primären Handler aufrufen
  if (!ev.isPrimary) process_non_primary(ev);
}

function init() {
  const el = document.getElementById("target");
  // Pointerdown-Handler registrieren
  el.onpointerdown = down_handler;
}

document.addEventListener("DOMContentLoaded", init);
```

## Bestimmen des primären Zeigers

In manchen Szenarien kann es mehrere Zeiger geben (zum Beispiel ein Gerät mit sowohl einem Touchscreen als auch einer Maus) oder ein Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der mehrere Fingertipps unterstützt). Die Anwendung kann die {{domxref("PointerEvent.isPrimary","isPrimary")}} Eigenschaft verwenden, um einen Hauptzeiger im Satz der _aktiven Zeiger_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher wird sie immer der primäre Zeiger sein. Bei einer Berührungseingabe wird ein Zeiger als primär betrachtet, wenn der Benutzer den Bildschirm berührt hat, während keine anderen aktiven Berührungen vorhanden waren. Bei Stift- und Stylus-Eingaben wird ein Zeiger als primär betrachtet, wenn der Stift des Benutzers den Bildschirm ursprünglich berührt hat, während keine anderen aktiven Stifte den Bildschirm berührten.

## Bestimmen des Tastenstatus

Einige Zeigergeräte (wie Maus und Stift) unterstützen mehrere Tasten, und die Tastenanschläge können _verkettet_ sein (z.B. Drücken einer zusätzlichen Taste, während eine andere Taste auf dem Zeigergerät bereits gedrückt ist).

Um den Zustand der Tastenanschläge zu bestimmen, verwenden Zeigereignisse die {{domxref("MouseEvent.button","button")}} und {{domxref("MouseEvent.buttons","buttons")}} Eigenschaften der {{domxref("MouseEvent")}} Schnittstelle (von der {{domxref("PointerEvent")}} erbt).

Die folgende Tabelle bietet die Werte von `button` und `buttons` für die verschiedenen Gerätestatus.

| Gerätestatus                                                                        | button | buttons |
| ----------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten noch Berührung/Stiftkontakte ändern sich seit dem letzten Ereignis      | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten, Stiftbewegung beim Schweben ohne gedrückte Tasten | —      | `0`     |
| Linke Maus, Berührungskontakt, Stiftkontakt                                          | `0`    | `1`     |
| Mittlere Maus                                                                        | `1`    | `4`     |
| Rechte Maus, Stift-Fass-Taste                                                        | `2`    | `2`     |
| X1 (zurück) Maus                                                                     | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                   | `4`    | `16`    |
| Stift-Radierer-Taste                                                                 | `5`    | `32`    |

> [!NOTE]
> Die `button` Eigenschaft zeigt eine Änderung im Zustand der Taste an. Wie im Fall von Berührungen, wenn mehrere Ereignisse mit einem Ereignis auftreten, haben alle den gleichen Wert.

## Erfassen des Zeigers

Die Zeigererfassung ermöglicht es, dass Ereignisse für ein bestimmtes {{domxref("PointerEvent","Zeigereignis", "", 1)}} auf ein bestimmtes Element umgeleitet werden, abweichend vom normalen [Treffertest](#treffertest) am Standort des Zeigers. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigereignisse erhält, selbst wenn der Kontakt des Zeigergeräts das Element verlässt (zum Beispiel durch Scrollen oder Ziehen).

Die Zeigererfassung wird dazu führen, dass das Ziel alle nachfolgenden Zeigereignisse so erfasst, als ob sie über dem erfassenden Ziel auftreten würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung eingestellt ist.
Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf das Element aufgerufen, wenn ein `pointerdown` Ereignis ausgelöst wird. Die Erfassung kann manuell freigegeben werden, indem man {{domxref('element.releasePointerCapture')}} auf das Ziel-Element aufruft, oder sie wird implizit nach einem `pointerup` oder `pointercancel` Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM bewegen müssen, dann stellen Sie sicher, `setPointerCapture()` **nach den DOM-Bewegungen** aufzurufen, damit `setPointerCapture()` es nicht aus den Augen verliert. Zum Beispiel, wenn Sie `Element.append()` verwenden müssen, um ein Element woanders hin zu verschieben, dann stellen Sie sicher, `setPointerCapture()` darauf nur nach dem Aufruf von `Element.append()` aufzurufen.

Das folgende Beispiel zeigt die Zeigererfassung, die auf ein Element gesetzt wird.

```html
<div id="target">Berühren Sie mich…</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("target");
  // Element 'target' wird weitere Ereignisse erhalten/erfassen
  el.setPointerCapture(ev.pointerId);
}

function init() {
  const el = document.getElementById("target");
  el.onpointerdown = downHandler;
}

document.addEventListener("DOMContentLoaded", init);
```

Das folgende Beispiel zeigt, wie eine Zeigererfassung freigegeben wird (wenn ein {{domxref("Element/pointercancel_event", "pointercancel")}} Ereignis auftritt. Der Browser macht dies automatisch, wenn ein {{domxref("Element/pointerup_event", "pointerup")}} oder {{domxref("Element/pointercancel_event", "pointercancel")}} Ereignis auftritt.

```html
<div id="target">Berühren Sie mich…</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("target");
  // Element "target" wird weitere Ereignisse erhalten/erfassen
  el.setPointerCapture(ev.pointerId);
}

function cancelHandler(ev) {
  const el = document.getElementById("target");
  // Zeigererfassung freigeben
  el.releasePointerCapture(ev.pointerId);
}

function init() {
  const el = document.getElementById("target");
  // Pointerdown und Pointercancel-Handler registrieren
  el.onpointerdown = downHandler;
  el.onpointercancel = cancelHandler;
}

document.addEventListener("DOMContentLoaded", init);
```

## touch-action CSS-Eigenschaft

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um zu spezifizieren, ob der Browser sein Standardverhalten (_native_) für Berührungen (wie Zoomen oder Verschieben) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden, außer: nicht-ersetzte Inline-Elemente, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standard-Berührungsverhalten (auf die angegebene Region) anzuwenden, und der Wert `none` deaktiviert das Standard-Berührungsverhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die in der angegebenen Region beginnen, nur für das horizontale und vertikale Scrollen sind, entsprechend. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur als Scrollen und Zoomen betrachten kann.

Im folgenden Beispiel wird das Standard-Berührungsverhalten des Browsers für das `div` Element deaktiviert.

```html
<html lang="en">
  <body>
    <div style="touch-action:none;">Can't touch this…</div>
  </body>
</html>
```

Im folgenden Beispiel wird das Standard-Berührungsverhalten für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird beim Berühren des `target`-Elements nur die horizontale Richtung verschoben.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Zeigereignisschnittstellen Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf zeigerfähigen Geräten zu schaffen, ist die Realität, dass der Großteil der heutigen Webinhalte nur für die Arbeit mit Maus-Eingaben entwickelt wurde. Folglich, selbst wenn ein Browser Zeigereignisse unterstützt, muss der Browser weiterhin Mausereignisse verarbeiten, damit Inhalte, die nur Maus-Eingaben voraussetzen, unverändert funktionieren. Idealerweise muss eine zeigerfähige Anwendung keine Maus-Eingaben explizit verarbeiten. Aufgrund der Notwendigkeit des Browsers, Mausereignisse zu verarbeiten, können jedoch einige Kompatibilitätsprobleme auftreten, die behandelt werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion zwischen Zeigereignissen und Mausereignissen sowie die Auswirkungen auf Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben zu Mausereignissen abbilden, um Kompatibilität mit mausbasierenden Inhalten zu gewährleisten_. Diese Abbildung von Ereignissen wird als _Kompatibilitätsmausereignisse_ bezeichnet. Autoren können die Erzeugung bestimmter Kompatibilitätsmausereignisse verhindern, indem sie das Pointerdown-Ereignis abbrechen. Beachten Sie jedoch:

- Mausereignisse können nur verhindert werden, wenn der Zeiger nach unten zeigt.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Tasten) können keine Mausereignisse verhindern.
- Die `mouseover`, `mouseout`, `mouseenter`, und `mouseleave` Ereignisse werden niemals verhindert (auch wenn der Zeiger nach unten zeigt).

## Best Practices

Hier sind einige _Best Practices_, die bei der Verwendung von Zeigereignissen zu beachten sind:

- Minimieren Sie die Menge der Arbeit, die in Ereignishandlern ausgeführt wird.
- Fügen Sie die Ereignishandler zu einem spezifischen Ziel-Element hinzu (anstatt zum gesamten Dokument oder Knoten höher in der Dokumentstruktur).
- Das Ziel-Element (Knoten) sollte groß genug sein, um die größte Kontaktfläche (typischerweise eine Fingerberührung) aufzunehmen. Wenn das Zielgebiet zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS {{cssxref("touch-action")}}-Eigenschaft im Rahmen der [Pointer Events](https://w3c.github.io/pointerevents/) Spezifikation definiert, haben derzeit jedoch eine begrenzte Implementierungsunterstützung.

## Siehe auch

### Demos und Beispiele

- [Touch/Pointer Tests und Demos (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

### Community

- [Pointer Events Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC Kanal](irc://irc.w3.org:6667/)

### Verwandte Themen und Ressourcen

- [Touch Events Standard](https://www.w3.org/TR/touch-events/)
