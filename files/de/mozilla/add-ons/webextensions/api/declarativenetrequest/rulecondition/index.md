---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{AddonSidebar}}

Details zu der Bedingung, die bestimmt, ob eine Regel mit einer Anfrage übereinstimmt, als `condition`-Eigenschaft eines {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Gibt an, ob die Netzwerk-Anfrage "first-party" oder "third-party" ist. Die Anfrage wird als "first-party" betrachtet, wenn sie für dieselbe Domain wie das Dokument oder Unterdokument erfolgt, das die Anfrage initiiert. Andernfalls wird sie als "third-party" betrachtet. Wenn ausgelassen, werden alle Anfragen akzeptiert. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel trifft nur auf Netzwerk-Anfragen zu, die von dieser Liste von Domains stammen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel trifft nicht auf Netzwerk-Anfragen zu, die von dieser Liste von Domains stammen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel trifft nur auf Netzwerk-Anfragen zu, die von dieser Liste von Domains stammen. Wenn die Liste ausgelassen wird, gilt die Regel für Anfragen von allen Domains. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies trifft auf den Anfragesteller zu, nicht auf die Anfragere-URL.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel trifft nicht auf Netzwerk-Anfragen zu, die von dieser Liste von Domains stammen. Wenn die Liste leer oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies trifft auf den Anfragesteller zu, nicht auf die Anfragere-URL.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Gibt an, ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (je nachdem, welcher angegeben ist) groß-/kleinschreibungssensitiv ist. Wobei ein Konsens besteht, standardmäßig `false` zu verwenden, siehe [WECG issue 269](https://github.com/w3c/webextensions/issues/269), war der Wert in (älteren) Versionen von Chrome und Safari `true`. Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, der mit der Netzwerk-Anfrage-URL übereinstimmen soll. Beachten Sie, dass:
    - Das unterstützte Format nicht stabil ist und je nach Browser variiert, siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Nur einer von [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) angegeben werden kann.
    - Der [`regexFilter`](#regexfilter) muss ausschließlich aus {{Glossary("ASCII", "ASCII")}} Zeichen bestehen. Dies wird mit einer URL verglichen, wobei der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode) Format kodiert ist (im Falle von internationalisierten Domains) und alle anderen nicht-ASCII-Zeichen in UTF-8 Prozent-codiert sind.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel trifft nur auf Netzwerk-Anfragen zu, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste ausgelassen wird, gilt die Regel für Anfragen von allen Domains. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel trifft nicht auf Netzwerk-Anfragen zu, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste leer oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste von HTTP-Anfragemethoden, die die Regel trifft. Eine leere Liste ist nicht erlaubt. Das Festlegen einer `requestMethods`-Bedingung schließt auch Nicht-HTTP(s)-Anfragen aus, während die Festlegung von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste von Anfragemethoden, auf die die Regel nicht zutrifft. Nur einer von [`requestMethods`](#requestmethods) und `excludedRequestMethods` sollte angegeben werden. Wenn keiner von ihnen angegeben ist, werden alle Anfragemethoden getroffen.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste von Ressourcentypen, die die Regel trifft. Eine leere Liste ist nicht erlaubt. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` enthalten.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste von Ressourcentypen, auf die die Regel nicht zutrifft. Nur einer von [`resourceTypes`](#resourcetypes) und `excludedResourceTypes` sollte angegeben werden. Wenn keiner von ihnen angegeben ist, werden alle Ressourcentypen außer `"main_frame"` blockiert.
- `responseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel trifft zu, wenn die Anfrage mit einer beliebigen Antwort-Header-Bedingung in dieser Liste übereinstimmt (falls angegeben).
- `excludedResponseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel trifft nicht zu, wenn die Anfrage mit einer beliebigen Antwort-Header-Bedingung in dieser Liste übereinstimmt (falls angegeben). Wenn sowohl `excludedResponseHeaders` als auch `responseHeaders` angegeben sind, hat die Eigenschaft `excludedResponseHeaders` Vorrang.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste der {{WebExtAPIRef("tabs.Tab")}}.`id`, mit denen die Regel übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} trifft auf Anfragen zu, die nicht aus einem Tab stammen. Eine leere Liste ist nicht erlaubt. Nur für regelbereichsbezogene Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste der {{WebExtAPIRef("tabs.Tab")}}.`id`, mit denen die Regel nicht übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anfragen aus, die nicht aus einem Tab stammen. Nur für regelbereichsbezogene Regeln unterstützt.
- `urlFilter` {{optional_inline}}

  - : Ein `string`. Das Muster, das mit der Netzwerk-Anfrage-URL abgeglichen wird. Unterstützte Konstrukte:

    - `*` : Platzhalter: Treffer für eine beliebige Anzahl von Zeichen.
    - `|` : Linker oder rechter Anker: Gibt bei Verwendung am Anfang oder Ende des Musters den Anfang beziehungsweise das Ende der URL an.
    - `||` : Domainnamenanker: Gibt bei Verwendung am Anfang des Musters den Anfang einer (Sub-)Domain der URL an.
    - `^` : Trennzeichen: Dies entspricht allem außer einem Buchstaben, einer Ziffer oder einem der Zeichen `_`, `-`, `.`, oder `%`. Das letzte `^` kann auch das Ende der URL anstelle eines Trennzeichens entsprechen.

    Der `urlFilter` besteht aus den folgenden Teilen: (optionaler linker/Domainnamenanker) + Muster + (optionaler rechter Anker).
    Wenn ausgelassen, werden alle URLs abgeglichen. Ein leerer String ist nicht erlaubt.
    Ein Muster, das mit `||*` beginnt, ist nicht erlaubt. Verwenden Sie stattdessen `*`.
    Beachten Sie, dass:

    - Nur einer von `urlFilter` oder [`regexFilter`](#regexfilter) kann angegeben werden.
    - Der `urlFilter` muss ausschließlich aus ASCII-Zeichen bestehen. Dies wird mit einer URL abgeglichen, wobei der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode) Format kodiert ist (im Falle von internationalisierten Domains) und alle anderen nicht-ASCII-Zeichen in UTF-8 Prozent-codiert sind. Wenn zum Beispiel die Anfragere-URL `http://abc.рф?q=ф` lautet, wird der `urlFilter` mit der URL `http://abc.xn--p1ai/?q=%D1%84` abgeglichen.

### Kanonische Domain

In `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegebene Domains sollten den folgenden Vorgaben entsprechen:

- Sub-Domains wie "a.example.com" sind erlaubt.
- Die Einträge müssen nur _kleinbuchstabige_ ASCII-Zeichen enthalten.
- Verwenden Sie [Punycode](https://de.wikipedia.org/wiki/Punycode) Kodierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 durch einen Punkt getrennte Zahlen dargestellt werden.
- IPv6-Adressen sollten in ihrer kanonischen Form dargestellt und in eckige Klammern gesetzt werden.

Um programmgesteuert die kanonische Domain für eine URL zu erzeugen, verwenden Sie die [URL API](/de/docs/Web/API/URL) und lesen deren `hostname`-Eigenschaft, also `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

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
