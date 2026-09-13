---
title: "Window: top-Eigenschaft"
short-title: top
slug: Web/API/Window/top
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Gibt eine Referenz auf das oberste Fenster in der Fensterhierarchie zurück.

## Wert

Die Referenz auf das oberste Fenster.

## Hinweise

Während die [`window.parent`](/de/docs/Web/API/Window/parent)-Eigenschaft das unmittelbare Elternfenster des aktuellen Fensters zurückgibt, liefert `window.top` das oberste Fenster in der Hierarchie der Fensterobjekte.

Diese Eigenschaft ist besonders nützlich, wenn Sie es mit einem Fenster zu tun haben, das sich in einem Unterrahmen eines oder mehrerer übergeordneter Fenster befindet und Sie auf das oberste Rahmen-Set zugreifen möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
