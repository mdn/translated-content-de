---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Beschreibt verschiedene Kriterien zum Filtern von URLs. Wenn alle in den Eigenschaften des Filters angegebenen Kriterien mit der URL übereinstimmen, wird der Filter als übereinstimmend angesehen. Filter werden oft API-Methoden in einem [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters zur Verfügung gestellt. Zum Beispiel können [webNavigation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation)-Listener mit einem Filter hinzugefügt werden, der ein Objekt mit einer einzelnen `url`-Eigenschaft ist, die ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters ist, z.B. `{url:[UrlFilter, UrlFilter, …]}`. Wenn ein Filter innerhalb des Arrays von UrlFilters übereinstimmt, gilt dies als Übereinstimmung für das Array. Effektiv werden die innerhalb eines einzelnen Filters angegebenen Kriterien UND-verknüpft, während alle einzelnen Filter innerhalb eines Arrays ODER-verknüpft sind.

Alle Kriterien sind groß-/kleinschreibungsempfindlich.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

Beachten Sie jedoch, dass diese beiden letzten Muster nicht mit der letzten Komponente des Hostnamens übereinstimmen, da am Ende des Hostnamens kein impliziter Punkt hinzugefügt wird. Zum Beispiel würde `"org."` `https://borg.com` entsprechen, aber nicht `https://example.org`. Um diese Muster zu erfassen, verwenden Sie `hostSuffix`.

- `hostContains` {{optional_inline}}

  - : `string`. Entspricht, wenn der [Hostname](/de/docs/Web/API/HTMLAnchorElement/hostname) der URL (ohne Protokoll oder Port – siehe `schemes` und `ports`) den angegebenen String enthält.

    - Um zu testen, ob eine Hostname-Komponente mit "foo" beginnt, verwenden Sie `".foo"`. Dies entspricht `www.foobar.com` und `foo.com`, weil ein impliziter Punkt am Anfang des Hostnamens hinzugefügt wird.
    - Um zu testen, ob eine Hostname-Komponente mit "foo" endet, verwenden Sie `"foo."`.
    - Um zu testen, ob eine Hostname-Komponente genau "foo" entspricht, verwenden Sie `".foo."`.

- `hostEquals` {{optional_inline}}

  - : `string`. Entspricht, wenn der Hostname der URL einem angegebenen String entspricht.

    - Beispiel: `"www.example.com"` entspricht `http://www.example.com` und `https://www.example.com/`, aber nicht `http://example.com/`.

- `hostPrefix` {{optional_inline}}
  - : `string`. Entspricht, wenn der Hostname der URL mit einem angegebenen String beginnt.
- `hostSuffix` {{optional_inline}}

  - : `string`. Entspricht, wenn der Hostname der URL mit einem angegebenen String endet.

    - Beispiel: `".example.com"` entspricht `http://www.example.com/`, aber nicht `http://example.com/`.
    - Beispiel: `"example.com"` entspricht sowohl `http://www.example.com/` als auch `http://fakeexample.com/`.

- `pathContains` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL einen angegebenen String enthält.
- `pathEquals` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL einem angegebenen String entspricht.
- `pathPrefix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL mit einem angegebenen String beginnt.
- `pathSuffix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL mit einem angegebenen String endet.
- `queryContains` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfragensegment der URL einen angegebenen String enthält.
- `queryEquals` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfragensegment der URL einem angegebenen String entspricht.
- `queryPrefix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfragensegment der URL mit einem angegebenen String beginnt.
- `querySuffix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfragensegment der URL mit einem angegebenen String endet.
- `urlContains` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragmentbezeichner) einen angegebenen String enthält. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlEquals` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragmentbezeichner) einem angegebenen String entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlMatches` {{optional_inline}}

  - : `string`. Entspricht, wenn die URL (ohne Fragmentbezeichner) einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.

    - Zum Beispiel: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` entspricht `https://mozilla.org/`, `https://developer.mozilla.org/`, aber nicht `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL ohne Abfragensegment und Fragmentbezeichner einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlPrefix` {{optional_inline}}

  - : `string`. Entspricht, wenn die URL (ohne Fragmentbezeichner) mit einem angegebenen String beginnt. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.

    - Beispiel: `"https://developer"` entspricht `https://developer.mozilla.org/` und `https://developers.facebook.com/`.

- `urlSuffix` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragmentbezeichner) mit einem angegebenen String endet. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen. Beachten Sie, dass ein implizierter Schrägstrich "/" nach dem Host hinzugefügt wird, sodass `"com/"` `https://example.com` entspricht, aber `"com"` nicht.
- `schemes` {{optional_inline}}

  - : `array` of `string`. Entspricht, wenn das Schema der URL einem der im Array angegebenen Schemen entspricht. Da Schemen immer in Kleinbuchstaben konvertiert werden, sollte dies immer in Kleinbuchstaben angegeben werden, da es sonst nie übereinstimmt.

    - Beispiel: `["https"]` wird nur HTTPS-URLs entsprechen.

- `ports` {{optional_inline}}

  - : `array` von (`integer` or (`array` von `integer`)). Ein Array, das ganze Zahlen und Arrays von ganzen Zahlen enthalten kann. Ganze Zahlen werden als Portnummern interpretiert, während Arrays von ganzen Zahlen als Portbereiche interpretiert werden. Entspricht, wenn der Port der URL einer beliebigen Portnummer entspricht oder in einem der Bereiche enthalten ist.

    - Zum Beispiel: `[80, 443, [1000, 1200]]` entspricht allen Anfragen auf den Ports 80, 443 und im Bereich 1000-1200.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-UrlFilter)-API von Chromium. Diese Dokumentation ist aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code abgeleitet.
