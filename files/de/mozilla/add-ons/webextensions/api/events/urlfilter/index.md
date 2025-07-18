---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Beschreibt verschiedene Kriterien zum Filtern von URLs. Wenn alle in den Eigenschaften des Filters angegebenen Kriterien mit der URL übereinstimmen, dann passt der Filter. Filter werden oft in einem [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters an API-Methoden übergeben. Zum Beispiel können [webNavigation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation)-Listener mit einem Filter hinzugefügt werden, der ein Objekt mit einer einzigen `url`-Eigenschaft ist, die ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters ist, z. B. `{url:[UrlFilter, UrlFilter, …]}`. Wenn ein beliebiger Filter innerhalb des Arrays von UrlFilters übereinstimmt, wird er als Übereinstimmung für das Array betrachtet. Effektiv werden die innerhalb eines einzelnen Filters angegebenen Kriterien zusammengefasst, während alle individuellen Filter innerhalb eines Arrays oder-verknüpft sind.

Alle Kriterien sind case-sensitiv.

## Typ

Werte dieses Typs sind Objekte. Sie beinhalten die folgenden Eigenschaften:

Beachten Sie jedoch, dass diese letzten beiden Muster nicht mit der letzten Komponente des Hostnamens übereinstimmen werden, da am Ende des Hostnamens kein impliziter Punkt hinzugefügt wird. Zum Beispiel wird `"org."` `https://borg.com` entsprechen, aber nicht `https://example.org`. Um diese Muster zu entsprechen, verwenden Sie `hostSuffix`.

- `hostContains` {{optional_inline}}
  - : `string`. Entspricht, wenn der [hostname](/de/docs/Web/API/HTMLAnchorElement/hostname) der URL (ohne Protokoll oder Port – siehe `schemes` und `ports`) die angegebene Zeichenfolge enthält.
    - Um zu testen, ob eine Hostnamen-Komponente mit "foo" beginnt, verwenden Sie `".foo"`. Dies entspricht `www.foobar.com` und `foo.com`, da ein impliziter Punkt am Anfang des Hostnamens hinzugefügt wird.
    - Um zu testen, ob eine Hostnamen-Komponente mit "foo" endet, verwenden Sie `"foo."`.
    - Um zu testen, ob eine Hostnamen-Komponente genau mit "foo" übereinstimmt, verwenden Sie `".foo."`.

- `hostEquals` {{optional_inline}}
  - : `string`. Entspricht, wenn der Hostname der URL einer angegebenen Zeichenfolge entspricht.
    - Beispiel: `"www.example.com"` entspricht `http://www.example.com` und `https://www.example.com/`, aber nicht `http://example.com/`.

- `hostPrefix` {{optional_inline}}
  - : `string`. Entspricht, wenn der Hostname der URL mit einer angegebenen Zeichenfolge beginnt.
- `hostSuffix` {{optional_inline}}
  - : `string`. Entspricht, wenn der Hostname der URL mit einer angegebenen Zeichenfolge endet.
    - Beispiel: `".example.com"` entspricht `http://www.example.com/`, aber nicht `http://example.com/`.
    - Beispiel: `"example.com"` entspricht `http://www.example.com/`, und `http://fakeexample.com/`.

- `pathContains` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL eine angegebene Zeichenfolge enthält.
- `pathEquals` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL einer angegebenen Zeichenfolge entspricht.
- `pathPrefix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL mit einer angegebenen Zeichenfolge beginnt.
- `pathSuffix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Pfadsegment der URL mit einer angegebenen Zeichenfolge endet.
- `queryContains` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfrage-Segment der URL eine angegebene Zeichenfolge enthält.
- `queryEquals` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfrage-Segment der URL einer angegebenen Zeichenfolge entspricht.
- `queryPrefix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfrage-Segment der URL mit einer angegebenen Zeichenfolge beginnt.
- `querySuffix` {{optional_inline}}
  - : `string`. Entspricht, wenn das Abfrage-Segment der URL mit einer angegebenen Zeichenfolge endet.
- `urlContains` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragment-Identifikator) eine angegebene Zeichenfolge enthält. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlEquals` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragment-Identifikator) einer angegebenen Zeichenfolge entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlMatches` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragment-Identifikator) einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
    - Zum Beispiel: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` entspricht `https://mozilla.org/`, `https://developer.mozilla.org/`, aber nicht `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL ohne Abfrage-Segment und Fragment-Identifikator einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
- `urlPrefix` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragment-Identifikator) mit einer angegebenen Zeichenfolge beginnt. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen.
    - Beispiel: `"https://developer"` entspricht `https://developer.mozilla.org/` und `https://developers.facebook.com/`.

- `urlSuffix` {{optional_inline}}
  - : `string`. Entspricht, wenn die URL (ohne Fragment-Identifikator) mit einer angegebenen Zeichenfolge endet. Portnummern werden aus der URL entfernt, wenn sie der Standardportnummer entsprechen. Beachten Sie, dass ein impliziter Schrägstrich "/" nach dem Host hinzugefügt wird, so dass `"com/"` `https://example.com` entspricht, aber `"com"` nicht.
- `schemes` {{optional_inline}}
  - : `array` von `string`. Entspricht, wenn das Schema der URL mit einem der im Array angegebenen Schemen übereinstimmt. Da Schemen immer in Kleinbuchstaben umgewandelt werden, sollte dies immer in Kleinbuchstaben angegeben werden, sonst wird es nie übereinstimmen.
    - Beispiel: `["https"]` wird nur HTTPS-URLs entsprechen.

- `ports` {{optional_inline}}
  - : `array` von (`integer` oder (`array` von `integer`)). Ein Array, das Ganzzahlen und Arrays von Ganzzahlen enthalten kann. Ganzzahlen werden als Portnummern interpretiert, während Arrays von Ganzzahlen als Portbereiche interpretiert werden. Entspricht, wenn der Port der URL mit einer beliebigen Portnummer übereinstimmt oder in einem der Bereiche enthalten ist.
    - Zum Beispiel: `[80, 443, [1000, 1200]]` entspricht allen Anfragen auf den Ports 80, 443 und im Bereich 1000-1200.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-UrlFilter). Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
