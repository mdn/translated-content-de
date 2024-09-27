---
title: "Element: DOMMouseScroll-Ereignis"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

Das DOM `DOMMouseScroll`-Ereignis wird asynchron ausgelöst, wenn das Mausrad oder ein ähnliches Gerät betätigt wird und die kumulierte Scroll-Menge seit dem letzten Ereignis mehr als 1 Zeile oder 1 Seite beträgt. Es wird durch das [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Interface dargestellt. Dieses Ereignis wurde nur von Firefox implementiert. Sie sollten stattdessen das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwenden.

Wenn Sie die Standardaktion von Mausradereignissen verhindern möchten, genügt es nicht, nur dieses Ereignis in Gecko zu behandeln, da, wenn die Scroll-Menge eines nativen Mausradereignisses weniger als 1 Zeile (oder weniger als 1 Seite bei einer Seitenscrolleinstellung des Systems) beträgt, andere Mausradereignisse ohne dieses Ereignis ausgelöst werden können.

Ab Gecko 17 (Firefox 17) müssen Sie `preventDefault()` auf `wheel`-Ereignisse anwenden, die für jedes native Ereignis ausgelöst werden müssen.

Verwenden Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, wenn verfügbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

Das Ereignis hat nur eine zusätzliche Eigenschaft über die Standardereignisse hinaus.

### detail

Die `detail`-Eigenschaft beschreibt das Scrollen genauer, wobei positive Werte eine Abwärtsbewegung und negative Werte eine Aufwärtsbewegung anzeigen.

Wenn das Ereignis das Scrollen um eine Seite nach oben darstellt, beträgt der Wert von `detail` -32768. Wenn das Ereignis das Scrollen um eine Seite nach unten anzeigt, beträgt der Wert +32768. Jeder andere Wert stellt die Anzahl der zu scrollenden Zeilen dar, wobei die Richtung durch das Vorzeichen des Wertes angezeigt wird.

> [!NOTE]
> Vertrauenswürdige Ereignisse werden niemals mit einem Wert von 0 für `detail` gesendet.

Vertrauenswürdige Ereignisse werden nie mit dem Wert 0 ausgelöst.

> [!NOTE]
> Wenn die nativen Mausradereignisse der Plattform nur Scrollabstände in Pixeln bereitstellen oder wenn die Geschwindigkeit vom Benutzer angepasst werden kann, wird der Wert unter Verwendung der Zeilenhöhe des nächsten scrollbaren Vorfahrenelements des Ereignisziels berechnet. Wenn die Schriftgröße dieses Elements kleiner ist als `mousewheel.min_line_scroll_amount`, wird der Wert dieser Präferenz als Zeilenhöhe verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
- Gecko's Legacy-Pixel-Scrollereignis: `MozMousePixelScroll`
- Legacy-Mausradereignis in nicht-Gecko-Browsern: `mousewheel`
- Standardisiertes Mausradereignis: `wheel`
