---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Beschreibt verschiedene Kriterien für das Filtern von URLs. Wenn alle in den Eigenschaften des Filters angegebenen Kriterien mit der URL übereinstimmen, dann passt der Filter. Filter werden oft als [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters zu API-Methoden bereitgestellt. Zum Beispiel können [webNavigation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation)-Listener mit einem Filter hinzugefügt werden, der ein Objekt mit einer einzigen `url`-Eigenschaft ist, die ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters ist, z.B. `{url:[UrlFilter, UrlFilter, …]}`. Wenn irgendein Filter innerhalb des Arrays von UrlFilters übereinstimmt, wird es als Übereinstimmung für das Array betrachtet. Effektiv werden die Kriterien innerhalb eines einzigen Filters miteinander verbunden (UND-Verbindung), während alle individuellen Filter innerhalb eines Arrays verbunden sind (ODER-Verbindung).

Alle Kriterien sind case-sensitive.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

Beachten Sie jedoch, dass diese letzten beiden Muster nicht mit der letzten Komponente des Hostnamens übereinstimmen, da kein implizierter Punkt am Ende des Hostnamens hinzugefügt wird. Zum Beispiel wird `"org."` `https://borg.com` matchen, aber nicht `https://example.org`. Um diese Muster zu treffen, verwenden Sie `hostSuffix`.

- `hostContains` {{optional_inline}}

  - : `string`. Passt, wenn der [Hostname](/de/docs/Web/API/HTMLAnchorElement/hostname) der URL (ohne Protokoll oder Port – siehe `schemes` und `ports`) den angegebenen String enthält.
    - Um zu testen, ob eine Hostname-Komponente mit "foo" beginnt, verwenden Sie `".foo"`. Dies passt zu `www.foobar.com` und `foo.com`, da ein impliziter Punkt am Anfang des Hostnamens hinzugefügt wird.
    - Um zu testen, ob eine Hostname-Komponente mit "foo" endet, verwenden Sie `"foo."`.
    - Um zu testen, ob eine Hostname-Komponente genau "foo" entspricht, verwenden Sie `".foo."`.

- `hostEquals` {{optional_inline}}

  - : `string`. Passt, wenn der Hostname der URL einer angegebenen Zeichenkette entspricht.
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
  - : `string`. Passt, wenn die URL (ohne Fragmentkennung) einen angegebenen String enthält. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlEquals` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragmentkennung) einem angegebenen String entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlMatches` {{optional_inline}}

  - : `string`. Passt, wenn die URL (ohne Fragmentkennung) einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
    - Zum Beispiel: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` passt zu `https://mozilla.org/`, `https://developer.mozilla.org/`, aber nicht zu `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Passt, wenn die URL ohne Abfrage-Segment und Fragmentkennung einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlPrefix` {{optional_inline}}

  - : `string`. Passt, wenn die URL (ohne Fragmentkennung) mit einem angegebenen String beginnt. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
    - Beispiel: `"https://developer"` passt zu `https://developer.mozilla.org/` und `https://developers.facebook.com/`.

- `urlSuffix` {{optional_inline}}
  - : `string`. Passt, wenn die URL (ohne Fragmentkennung) mit einem angegebenen String endet. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen. Beachten Sie, dass ein implizierter Schrägstrich "/" nach dem Host hinzugefügt wird, sodass `"com/"` zu `https://example.com` passt, aber `"com"` nicht.
- `schemes` {{optional_inline}}

  - : `array` von `string`. Passt, wenn das Schema der URL einem der in dem Array angegebenen Schemas entspricht. Da Schemas immer in Kleinbuchstaben umgewandelt werden, sollte es immer in Kleinbuchstaben angegeben werden, sonst wird es nie übereinstimmen.
    - Beispiel: `["https"]` wird nur HTTPS-URLs entsprechen.

- `ports` {{optional_inline}}
  - : `array` von (`integer` oder (`array` von `integer`)). Ein Array, das ganze Zahlen und Arrays von ganzen Zahlen enthalten kann. Ganze Zahlen werden als Portnummern interpretiert, während Arrays von ganzen Zahlen als Portbereiche interpretiert werden. Passt, wenn der Port der URL mit einer Portnummer übereinstimmt oder in einem der Bereiche enthalten ist.
    - Zum Beispiel: `[80, 443, [1000, 1200]]` entspricht allen Anfragen auf den Ports 80, 443 und im Bereich 1000-1200.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-UrlFilter) API. Diese Dokumentation ist von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code abgeleitet.

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
