---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Beschreibt verschiedene Kriterien zum Filtern von URLs. Wenn alle in den Eigenschaften des Filters angegebenen Kriterien mit der URL übereinstimmen, dann passt der Filter. Filter werden häufig in einer [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters an API-Methoden übergeben. Zum Beispiel können [webNavigation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation)-Listener mit einem Filter hinzugefügt werden, der ein Objekt mit einer einzigen `url`-Eigenschaft ist, die ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters ist, z. B. `{url:[UrlFilter, UrlFilter, …]}`. Wenn ein Filter innerhalb des Arrays von UrlFilters übereinstimmt, wird er als Übereinstimmung für das Array betrachtet. Effektiv werden die in einem einzelnen Filter angegebenen Kriterien miteinander AND-verknüpft, während alle einzelnen Filter innerhalb eines Arrays OR-verknüpft sind.

Alle Kriterien sind groß-/kleinschreibungssensitiv.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

Beachten Sie jedoch, dass diese letzten beiden Muster nicht mit der letzten Komponente des Hostnamens übereinstimmen, da am Ende des Hostnamens kein implizierter Punkt hinzugefügt wird. So passt zum Beispiel `"org."` zu `https://borg.com`, aber nicht zu `https://example.org`. Um diese Muster zu matchen, verwenden Sie `hostSuffix`.

- `hostContains` {{optional_inline}}

  - : `string`. Passt, wenn der [Hostname](/de/docs/Web/API/HTMLAnchorElement/hostname) der URL (ohne Protokoll oder Port – siehe `schemes` und `ports`) den angegebenen String enthält.

    - Um zu testen, ob eine Hostname-Komponente mit "foo" beginnt, verwenden Sie `".foo"`. Dies passt zu `www.foobar.com` und `foo.com`, da am Anfang des Hostnamens ein implizierter Punkt hinzugefügt wird.
    - Um zu testen, ob eine Hostname-Komponente mit "foo" endet, verwenden Sie `"foo."`.
    - Um zu testen, ob eine Hostname-Komponente genau mit "foo" übereinstimmt, verwenden Sie `".foo."`.

- `hostEquals` {{optional_inline}}

  - : `string`. Passt, wenn der Hostname der URL mit einem angegebenen String übereinstimmt.

    - Beispiel: `"www.example.com"` passt zu `http://www.example.com` und `https://www.example.com/`, aber nicht zu `http://example.com/`.

- `hostPrefix` {{optional_inline}}
  - : `string`. Passt, wenn der Hostname der URL mit einem angegebenen String beginnt.
- `hostSuffix` {{optional_inline}}

  - : `string`. Passt, wenn der Hostname der URL mit einem angegebenen String endet.

    - Beispiel: `".example.com"` passt zu `http://www.example.com/`, aber nicht zu `http://example.com/`.
    - Beispiel: `"example.com"` passt zu `http://www.example.com/`, und `http://fakeexample.com/`.

- `pathContains` {{optional_inline}}
  - : `string`. Passt, wenn der Pfad der URL einen angegebenen String enthält.
- `pathEquals` {{optional_inline}}
  - : `string`. Passt, wenn der Pfad der URL mit einem angegebenen String übereinstimmt.
- `pathPrefix` {{optional_inline}}
  - : `string`. Passt, wenn der Pfad der URL mit einem angegebenen String beginnt.
- `pathSuffix` {{optional_inline}}
  - : `string`. Passt, wenn der Pfad der URL mit einem angegebenen String endet.
- `queryContains` {{optional_inline}}
  - : `string`. Passt, wenn der Abfrageabschnitt der URL einen angegebenen String enthält.
- `queryEquals` {{optional_inline}}
  - : `string`. Passt, wenn der Abfrageabschnitt der URL mit einem angegebenen String übereinstimmt.
- `queryPrefix` {{optional_inline}}
  - : `string`. Passt, wenn der Abfrageabschnitt der URL mit einem angegebenen String beginnt.
- `querySuffix` {{optional_inline}}
  - : `string`. Passt, wenn der Abfrageabschnitt der URL mit einem angegebenen String endet.
- `urlContains` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragmentbezeichner) einen angegebenen String enthält. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlEquals` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragmentbezeichner) mit einem angegebenen String übereinstimmt. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlMatches` {{optional_inline}}

  - : `string`. Passt, wenn die URL (ohne Fragmentbezeichner) einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.

    - Zum Beispiel: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` passt zu `https://mozilla.org/`, `https://developer.mozilla.org/`, aber nicht zu `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Passt, wenn die URL ohne Abfrageabschnitt und Fragmentbezeichner einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlPrefix` {{optional_inline}}

  - : `string`. Passt, wenn die URL (ohne Fragmentbezeichner) mit einem angegebenen String beginnt. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.

    - Beispiel: `"https://developer"` passt zu `https://developer.mozilla.org/` und `https://developers.facebook.com/`.

- `urlSuffix` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragmentbezeichner) mit einem angegebenen String endet. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen. Beachten Sie, dass hinter dem Host ein implizierter Schrägstrich "/" hinzugefügt wird, sodass `"com/"` zu `https://example.com` passt, aber `"com"` nicht.
- `schemes` {{optional_inline}}

  - : `array` von `string`. Passt, wenn das Schema der URL mit einem der im Array angegebenen Schemata übereinstimmt. Da Schemata immer in Kleinbuchstaben umgewandelt werden, sollte dies immer in Kleinbuchstaben angegeben werden, da es sonst nie übereinstimmt.

    - Beispiel: `["https"]` wird nur HTTPS-URLs entsprechen.

- `ports` {{optional_inline}}

  - : `array` von (`integer` oder (`array` von `integer`)). Ein Array, das Ganzzahlen und Arrays von Ganzzahlen enthalten kann. Ganzzahlen werden als Portnummern interpretiert, während Arrays von Ganzzahlen als Portbereiche interpretiert werden. Passt, wenn der Port der URL mit einer der Portnummern übereinstimmt oder in einem der Bereiche enthalten ist.

    - Zum Beispiel: `[80, 443, [1000, 1200]]` entspricht allen Anfragen auf den Ports 80, 443 und im Bereich 1000-1200.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-UrlFilter) API. Diese Dokumentation stammt von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
