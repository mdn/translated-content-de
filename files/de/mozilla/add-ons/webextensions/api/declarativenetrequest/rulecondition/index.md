---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: 8b4e4810dcf61909fb1b492f4dcf81f1caf43fed
---

{{AddonSidebar}}

Details of the condition that determines whether a rule matches a request, as the `condition` property of a {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Gibt an, ob die Netzwerkanforderung First-Party oder Third-Party ist. Die Anforderung wird als First-Party betrachtet, wenn sie für die gleiche Domain wie das Dokument oder Subdokument ist, das die Anforderung einleitet. Andernfalls wird sie als Third-Party betrachtet. Wenn ausgelassen, werden alle Anforderungen akzeptiert. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel passt nur zu Netzwerkanforderungen, die von dieser Liste von Domains ausgehen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel passt nicht zu Netzwerkanforderungen, die von dieser Liste von Domains ausgehen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nur zu Netzwerkanforderungen, die von dieser Liste von Domains ausgehen. Wenn die Liste ausgelassen wird, wird die Regel auf Anforderungen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies stimmt mit dem Anforderungsinitiator und nicht der Anforderungs-URL überein.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nicht zu Netzwerkanforderungen, die von dieser Liste von Domains ausgehen. Wenn die Liste leer oder ausgelassen ist, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#whocanonical_domain) sollte verwendet werden. Dies stimmt mit dem Anforderungsinitiator und nicht der Anforderungs-URL überein.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (je nachdem, was angegeben ist) groß-/kleinschreibungsempfindlich ist. Während es einen Konsens gibt, bei der Voreinstellung auf `false` über alle Browser hinweg in [WECG Issue 269](https://github.com/w3c/webextensions/issues/269), war der Wert in (älteren) Versionen von Chrome und Safari `true`. Details siehe [Browserkompatibilität](#browserkompatibilität).
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, der mit der Netzwerkanforderungs-URL abgeglichen wird. Beachten Sie:
    - Das unterstützte Format ist nicht stabil und variiert je nach Browser, siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Nur einer von [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) kann angegeben werden.
    - Der [`regexFilter`](#regexfilter) muss ausschließlich aus {{Glossary("ASCII")}}-Zeichen bestehen. Dies wird mit einer URL abgeglichen, die den Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format kodiert (bei internationalisierten Domains) und alle anderen Nicht-ASCII-Zeichen in UTF-8 prozentkodiert sind.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nur zu Netzwerkanforderungen, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste ausgelassen wird, wird die Regel auf Anforderungen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nicht zu Netzwerkanforderungen, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste leer oder ausgelassen ist, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der HTTP-Anforderungsmethoden, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Die Angabe einer `requestMethods` Regelbedingung schließt auch Nicht-HTTP(s)-Anforderungen aus, während das Festlegen von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste von Anforderungsmethoden, mit denen die Regel nicht übereinstimmt. Nur eine von [`requestMethods`](#requestmethods) und `excludedRequestMethods` sollte angegeben werden. Wenn keine von ihnen spezifiziert ist, werden alle Anforderungsmethoden abgeglichen.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` einschließen.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel nicht übereinstimmt. Nur eine von [`resourceTypes`](#resourcetypes) und `excludedResourceTypes` sollte angegeben werden. Wenn keine von ihnen spezifiziert ist, werden alle Ressourcentypen außer `"main_frame"` blockiert.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, mit denen die Regel übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} entspricht Anforderungen, die nicht von einem Tab stammen. Eine leere Liste ist nicht erlaubt. Nur für sitzungsbezogene Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, mit denen die Regel nicht übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anforderungen aus, die nicht von einem Tab stammen. Nur für sitzungsbezogene Regeln unterstützt.
- `urlFilter` {{optional_inline}}

  - : Ein `string`. Das Muster, das mit der Netzwerkanforderungs-URL abgeglichen wird. Unterstützte Konstrukte:

    - `*` : Platzhalter: Passt zu beliebig vielen Zeichen.
    - `|` : Linker oder rechter Anker: Wenn am Anfang oder Ende des Musters verwendet, spezifiziert es den Anfang bzw. das Ende der URL.
    - `||` : Domainnamen-Anker: Wenn am Anfang des Musters verwendet, spezifiziert es den Beginn einer (Sub-)Domain der URL.
    - `^` : Trennzeichen: Dies entspricht allem, außer einem Buchstaben, einer Ziffer oder einem von `_`, `-`, `.`, oder `%`. Der letzte `^` kann auch dem Ende der URL statt einem Trennzeichen entsprechen.

    `urlFilter` besteht aus den folgenden Teilen: (optional linker/Domainnamen-Anker) + Muster + (optional rechter Anker).
    Wenn weggelassen, werden alle URLs abgeglichen. Ein leerer String ist nicht erlaubt.
    Ein Muster, das mit `||*` beginnt, ist nicht erlaubt. Verwenden Sie stattdessen `*`.
    Beachten Sie:

    - Nur einer von `urlFilter` oder [`regexFilter`](#regexfilter) kann angegeben werden.
    - Der `urlFilter` muss ausschließlich aus ASCII-Zeichen bestehen. Dies wird mit einer URL abgeglichen, die den Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format kodiert (bei internationalisierten Domains) und alle anderen Nicht-ASCII-Zeichen in UTF-8 prozentkodiert sind. Beispielsweise, wenn die Anforderungs-URL `http://abc.рф?q=ф` ist, wird der `urlFilter` mit der URL `http://abc.xn--p1ai/?q=%D1%84` abgeglichen.

### Kanonische Domain

In `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegebene Domains sollten den folgenden Richtlinien entsprechen:

- Sub-Domains wie "a.example.com" sind erlaubt.
- Die Einträge müssen ausschließlich aus _kleinbuchstabigen_ ASCII-Zeichen bestehen.
- Verwenden Sie [Punycode](https://de.wikipedia.org/wiki/Punycode) Kodierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 durch Punkte getrennte Zahlen dargestellt werden.
- IPv6-Adressen sollten in ihrer kanonischen Form dargestellt und in eckige Klammern gesetzt werden.

Um programmgesteuert die kanonische Domain für eine URL zu generieren, verwenden Sie die [URL API](/de/docs/Web/API/URL) und lesen Sie deren `hostname`-Eigenschaft, d. h. `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browserkompatibilität

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
