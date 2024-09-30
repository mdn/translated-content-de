---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Beschreibt verschiedene Kriterien zum Filtern von URLs. Wenn alle in den Eigenschaften des Filters angegebenen Kriterien mit der URL übereinstimmen, wird der Filter als passend angesehen. Filter werden häufig API-Methoden als ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters bereitgestellt. Zum Beispiel können [webNavigation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation)-Listener mit einem Filter hinzugefügt werden, der ein Objekt mit einer einzigen `url` Eigenschaft ist, die ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters ist, z.B. `{url:[UrlFilter, UrlFilter, …]}`. Wenn irgendein Filter innerhalb des Arrays von UrlFilters übereinstimmt, wird dies als Übereinstimmung für das Array angesehen. Effektiv werden die in einem einzelnen Filter angegebenen Kriterien mit einem logischen UND kombiniert, während alle individuellen Filter in einem Array mit einem logischen ODER kombiniert werden.

Alle Kriterien sind schreibempfindlich.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

Beachten Sie jedoch, dass diese beiden letzten Muster nicht mit der letzten Komponente des Hostnamens übereinstimmen, da kein impliziter Punkt am Ende des Hostnamens hinzugefügt wird. So wird beispielsweise `"org."` mit `https://borg.com` übereinstimmen, aber nicht mit `https://example.org`. Um diese Muster zu treffen, verwenden Sie `hostSuffix`.

- `hostContains` {{optional_inline}}

  - : `string`. Stimmt überein, wenn der [Hostname](/de/docs/Web/API/HTMLAnchorElement/hostname) der URL (ohne Protokoll oder Port – siehe `schemes` und `ports`) den angegebenen String enthält.

    - Um zu testen, ob eine Hostname-Komponente mit "foo" beginnt, verwenden Sie `".foo"`. Dies stimmt mit `www.foobar.com` und `foo.com` überein, da ein impliziter Punkt am Anfang des Hostnamens hinzugefügt wird.
    - Um zu testen, ob eine Hostname-Komponente mit "foo" endet, verwenden Sie `"foo."`.
    - Um zu testen, ob eine Hostname-Komponente genau mit "foo" übereinstimmt, verwenden Sie `".foo."`.

- `hostEquals` {{optional_inline}}

  - : `string`. Stimmt überein, wenn der Hostname der URL mit einem angegebenen String identisch ist.

    - Beispiel: `"www.example.com"` stimmt mit `http://www.example.com` und `https://www.example.com/` überein, aber nicht mit `http://example.com/`.

- `hostPrefix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Hostname der URL mit einem angegebenen String beginnt.
- `hostSuffix` {{optional_inline}}

  - : `string`. Stimmt überein, wenn der Hostname der URL mit einem angegebenen String endet.

    - Beispiel: `".example.com"` stimmt mit `http://www.example.com/` überein, aber nicht mit `http://example.com/`.
    - Beispiel: `"example.com"` stimmt mit `http://www.example.com/` und `http://fakeexample.com/` überein.

- `pathContains` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Pfadsegment der URL einen angegebenen String enthält.
- `pathEquals` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Pfadsegment der URL mit einem angegebenen String identisch ist.
- `pathPrefix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Pfadsegment der URL mit einem angegebenen String beginnt.
- `pathSuffix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Pfadsegment der URL mit einem angegebenen String endet.
- `queryContains` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Abfrage-Segment der URL einen angegebenen String enthält.
- `queryEquals` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Abfrage-Segment der URL mit einem angegebenen String identisch ist.
- `queryPrefix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Abfrage-Segment der URL mit einem angegebenen String beginnt.
- `querySuffix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn das Abfrage-Segment der URL mit einem angegebenen String endet.
- `urlContains` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragment-Identifikator) einen angegebenen String enthält. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlEquals` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragment-Identifikator) mit einem angegebenen String identisch ist. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlMatches` {{optional_inline}}

  - : `string`. Stimmt überein, wenn die URL (ohne Fragment-Identifikator) einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.

    - Zum Beispiel: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` stimmt mit `https://mozilla.org/` und `https://developer.mozilla.org/` überein, aber nicht mit `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL ohne Abfrage-Segment und Fragment-Identifikator einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlPrefix` {{optional_inline}}

  - : `string`. Stimmt überein, wenn die URL (ohne Fragment-Identifikator) mit einem angegebenen String beginnt. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.

    - Beispiel: `"https://developer"` stimmt mit `https://developer.mozilla.org/` und `https://developers.facebook.com/` überein.

- `urlSuffix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragment-Identifikator) mit einem angegebenen String endet. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen. Beachten Sie, dass ein impliziter Schrägstrich "/" nach dem Host hinzugefügt wird, sodass `"com/"` mit `https://example.com` übereinstimmt, aber `"com"` nicht.
- `schemes` {{optional_inline}}

  - : `array` von `string`. Stimmt überein, wenn das Schema der URL mit einem der in dem Array angegebenen Schemen identisch ist. Da Schemen immer in Kleinbuchstaben konvertiert werden, sollte dies immer in Kleinbuchstaben angegeben werden, sonst wird es nie übereinstimmen.

    - Beispiel: `["https"]` stimmt nur mit HTTPS-URLs überein.

- `ports` {{optional_inline}}

  - : `array` von (`integer` oder (`array` von `integer`)). Ein Array, das ganze Zahlen und Arrays von ganzen Zahlen enthalten kann. Ganze Zahlen werden als Portnummern interpretiert, während Arrays von ganzen Zahlen als Bereich von Ports interpretiert werden. Stimmt überein, wenn der Port der URL mit einer Portnummer übereinstimmt oder in einem der Bereiche enthalten ist.

    - Zum Beispiel: `[80, 443, [1000, 1200]]` stimmt mit allen Anfragen auf den Ports 80, 443 und im Bereich 1000-1200 überein.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-UrlFilter) API von Chromium. Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
