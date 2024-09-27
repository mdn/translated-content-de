---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Beschreibt verschiedene Kriterien zum Filtern von URLs. Wenn alle der im Filter angegebenen Kriterien mit der URL übereinstimmen, dann passt der Filter. Filter werden häufig als [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters an API-Methoden übergeben. Zum Beispiel können [webNavigation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation)-Listener mit einem Filter hinzugefügt werden, der ein Objekt mit einer einzelnen `url`-Eigenschaft ist, die ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters ist, z.B. `{url:[UrlFilter, UrlFilter, …]}`. Wenn ein Filter innerhalb des Array von UrlFilters übereinstimmt, dann wird dies als Übereinstimmung für das Array betrachtet. Effektiv werden die in einem einzelnen Filter angegebenen Kriterien mit AND verknüpft, während alle einzelnen Filter innerhalb eines Arrays mit OR verknüpft werden.

Alle Kriterien sind groß- und kleinschreibungssensitiv.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

Bitte beachten Sie jedoch, dass diese letzten beiden Muster nicht mit der letzten Komponente des Hostnamens übereinstimmen, da am Ende des Hostnamens kein impliziter Punkt hinzugefügt wird. So wird zum Beispiel `"org."` `https://borg.com` treffen, aber nicht `https://example.org`. Um diese Muster zu treffen, verwenden Sie `hostSuffix`.

- `hostContains` {{optional_inline}}

  - : `string`. Passt, wenn der [Hostname](/de/docs/Web/API/HTMLAnchorElement/hostname) der URL (ohne Protokoll oder Port – siehe `schemes` und `ports`) den angegebenen String enthält.

    - Um zu prüfen, ob eine Hostname-Komponente mit "foo" beginnt, verwenden Sie `".foo"`. Dies passt zu `www.foobar.com` und `foo.com`, da ein impliziter Punkt am Anfang des Hostnamens hinzugefügt wird.
    - Um zu prüfen, ob eine Hostname-Komponente mit "foo" endet, verwenden Sie `"foo."`.
    - Um zu prüfen, ob eine Hostname-Komponente genau "foo" entspricht, verwenden Sie `".foo."`.

- `hostEquals` {{optional_inline}}

  - : `string`. Passt, wenn der Hostname der URL mit einem angegebenen String übereinstimmt.

    - Beispiel: `"www.example.com"` passt zu `http://www.example.com` und `https://www.example.com/`, aber nicht zu `http://example.com/`.

- `hostPrefix` {{optional_inline}}
  - : `string`. Passt, wenn der Hostname der URL mit einem angegebenen String beginnt.
- `hostSuffix` {{optional_inline}}

  - : `string`. Passt, wenn der Hostname der URL mit einem angegebenen String endet.

    - Beispiel: `".example.com"` passt zu `http://www.example.com/`, aber nicht zu `http://example.com/`.
    - Beispiel: `"example.com"` passt zu `http://www.example.com/` und `http://fakeexample.com/`.

- `pathContains` {{optional_inline}}
  - : `string`. Passt, wenn das Pfadsegment der URL einen angegebenen String enthält.
- `pathEquals` {{optional_inline}}
  - : `string`. Passt, wenn das Pfadsegment der URL einem angegebenen String entspricht.
- `pathPrefix` {{optional_inline}}
  - : `string`. Passt, wenn das Pfadsegment der URL mit einem angegebenen String beginnt.
- `pathSuffix` {{optional_inline}}
  - : `string`. Passt, wenn das Pfadsegment der URL mit einem angegebenen String endet.
- `queryContains` {{optional_inline}}
  - : `string`. Passt, wenn das Abfrage-Segment der URL einen angegebenen String enthält.
- `queryEquals` {{optional_inline}}
  - : `string`. Passt, wenn das Abfrage-Segment der URL einem angegebenen String entspricht.
- `queryPrefix` {{optional_inline}}
  - : `string`. Passt, wenn das Abfrage-Segment der URL mit einem angegebenen String beginnt.
- `querySuffix` {{optional_inline}}
  - : `string`. Passt, wenn das Abfrage-Segment der URL mit einem angegebenen String endet.
- `urlContains` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragment-Identifier) einen angegebenen String enthält. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlEquals` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragment-Identifier) einem angegebenen String entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlMatches` {{optional_inline}}

  - : `string`. Passt, wenn die URL (ohne Fragment-Identifier) einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.

    - Zum Beispiel: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` passt zu `https://mozilla.org/`, `https://developer.mozilla.org/`, aber nicht zu `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Passt, wenn die URL ohne Abfrage-Segment und Fragment-Identifier einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlPrefix` {{optional_inline}}

  - : `string`. Passt, wenn die URL (ohne Fragment-Identifier) mit einem angegebenen String beginnt. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.

    - Beispiel: `"https://developer"` passt zu `https://developer.mozilla.org/` und `https://developers.facebook.com/`.

- `urlSuffix` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragment-Identifier) mit einem angegebenen String endet. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen. Beachten Sie, dass nach dem Host ein impliziter Schrägstrich "/" hinzugefügt wird, sodass `"com/"` zu `https://example.com` passt, aber `"com"` nicht.
- `schemes` {{optional_inline}}

  - : `array` von `string`. Passt, wenn das Schema der URL einem der in dem Array angegebenen Schemas entspricht. Da Schemas immer in Kleinbuchstaben konvertiert werden, sollte dies immer in Kleinbuchstaben angegeben werden, sonst passt es nie.

    - Beispiel: `["https"]` passt nur zu HTTPS-URLs.

- `ports` {{optional_inline}}

  - : `array` von (`integer` oder (`array` von `integer`)). Ein Array, das Ganzzahlen und Arrays von Ganzzahlen enthalten kann. Ganzzahlen werden als Portnummern interpretiert, während Arrays von Ganzzahlen als Portbereich interpretiert werden. Passt, wenn der Port der URL zu einer der Portnummern passt oder in einem der Bereiche enthalten ist.

    - Zum Beispiel: `[80, 443, [1000, 1200]]` passt zu allen Anfragen auf den Ports 80, 443 und im Bereich 1000-1200.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-UrlFilter) API. Diese Dokumentation ist abgeleitet von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
