---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Beschreibt verschiedene Kriterien zum Filtern von URLs. Wenn alle in den Eigenschaften des Filters angegebenen Kriterien mit der URL übereinstimmen, dann passt der Filter. Filter werden oft API-Methoden in einem [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters zur Verfügung gestellt. Beispielsweise können [webNavigation](/de/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation) Listener mit einem Filter hinzugefügt werden, der ein Objekt mit einer einzelnen `url`-Eigenschaft ist, die ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von UrlFilters ist, z.B. `{url:[UrlFilter, UrlFilter, …]}`. Wenn ein Filter innerhalb des Arrays von UrlFilters übereinstimmt, wird dies als Übereinstimmung für das Array betrachtet. Effektiv werden die Kriterien innerhalb eines einzelnen Filters mit UND verknüpft, während alle einzelnen Filter innerhalb eines Arrays mit ODER verknüpft werden.

Alle Kriterien sind case-sensitiv.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

Beachten Sie jedoch, dass diese letzten beiden Muster nicht mit der letzten Komponente des Hostnamens übereinstimmen, da kein impliziter Punkt am Ende des Hostnamens hinzugefügt wird. Beispielsweise stimmt `"org."` mit `https://borg.com` überein, aber nicht mit `https://example.org`. Um diese Muster abzugleichen, verwenden Sie `hostSuffix`.

- `hostContains` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der [Hostname](/de/docs/Web/API/HTMLAnchorElement/hostname) der URL (ohne Protokoll oder Port – siehe `schemes` und `ports`) die angegebene Zeichenkette enthält.
    - Um zu testen, ob eine Hostname-Komponente mit "foo" beginnt, verwenden Sie `".foo"`. Das stimmt mit `www.foobar.com` und `foo.com` überein, da ein impliziter Punkt am Anfang des Hostnamens hinzugefügt wird.
    - Um zu testen, ob eine Hostname-Komponente mit "foo" endet, verwenden Sie `"foo."`.
    - Um zu testen, ob eine Hostname-Komponente genau "foo" entspricht, verwenden Sie `".foo."`.

- `hostEquals` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Hostname der URL mit einer angegebenen Zeichenkette identisch ist.
    - Beispiel: `"www.example.com"` stimmt überein mit `http://www.example.com` und `https://www.example.com/`, aber nicht mit `http://example.com/`.

- `hostPrefix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Hostname der URL mit einer angegebenen Zeichenkette beginnt.
- `hostSuffix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Hostname der URL mit einer angegebenen Zeichenkette endet.
    - Beispiel: `".example.com"` stimmt überein mit `http://www.example.com/`, aber nicht mit `http://example.com/`.
    - Beispiel: `"example.com"` stimmt überein mit `http://www.example.com/`, und `http://fakeexample.com/`.

- `pathContains` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Pfadabschnitt der URL eine angegebene Zeichenkette enthält.
- `pathEquals` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Pfadabschnitt der URL einer angegebenen Zeichenkette entspricht.
- `pathPrefix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Pfadabschnitt der URL mit einer angegebenen Zeichenkette beginnt.
- `pathSuffix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Pfadabschnitt der URL mit einer angegebenen Zeichenkette endet.
- `queryContains` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Query-Abschnitt der URL eine angegebene Zeichenkette enthält.
- `queryEquals` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Query-Abschnitt der URL einer angegebenen Zeichenkette entspricht.
- `queryPrefix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Query-Abschnitt der URL mit einer angegebenen Zeichenkette beginnt.
- `querySuffix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn der Query-Abschnitt der URL mit einer angegebenen Zeichenkette endet.
- `urlContains` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragmentbezeichner) eine angegebene Zeichenkette enthält. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlEquals` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragmentbezeichner) einer angegebenen Zeichenkette entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlMatches` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragmentbezeichner) einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
    - Beispiel: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` stimmt überein mit `https://mozilla.org/`, `https://developer.mozilla.org/`, aber nicht mit `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL ohne Query-Segment und Fragmentbezeichner einem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) entspricht. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
- `urlPrefix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragmentbezeichner) mit einer angegebenen Zeichenkette beginnt. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen.
    - Beispiel: `"https://developer"` stimmt überein mit `https://developer.mozilla.org/` und `https://developers.facebook.com/`.

- `urlSuffix` {{optional_inline}}
  - : `string`. Stimmt überein, wenn die URL (ohne Fragmentbezeichner) mit einer angegebenen Zeichenkette endet. Portnummern werden aus der URL entfernt, wenn sie mit der Standardportnummer übereinstimmen. Beachten Sie, dass nach dem Host ein impliziter Schrägstrich "/" hinzugefügt wird, sodass `"com/"` mit `https://example.com` übereinstimmt, aber `"com"` nicht.
- `schemes` {{optional_inline}}
  - : `array` von `string`. Stimmt überein, wenn das Schema der URL gleich einem der in dem Array angegebenen Schemata ist. Da Schemata immer in Kleinbuchstaben umgewandelt werden, sollte dies immer in Kleinbuchstaben angegeben werden, da es sonst nie übereinstimmen wird.
    - Beispiel: `["https"]` wird nur HTTPS-URLs abgleichen.

- `ports` {{optional_inline}}
  - : `array` von (`integer` oder (`array` von `integer`)). Ein Array, das Ganzzahlen und Arrays von Ganzzahlen enthalten kann. Ganzzahlen werden als Portnummern interpretiert, während Arrays von Ganzzahlen als Portbereiche interpretiert werden. Stimmt überein, wenn der Port der URL mit einer Portnummer übereinstimmt oder in einem der Bereiche enthalten ist.
    - Zum Beispiel: `[80, 443, [1000, 1200]]` stimmt mit allen Anforderungen an den Ports 80, 443 und im Bereich 1000-1200 überein.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-UrlFilter) API. Diese Dokumentation ist abgeleitet von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

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
