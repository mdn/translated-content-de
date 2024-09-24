---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: a0835f752a97d1c4d738639f562db9d8e7551a1e
---

{{AddonSidebar}}

Details der Bedingung, die bestimmt, ob eine Regel mit einer Anfrage übereinstimmt, als `condition`-Eigenschaft von {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Gibt an, ob die Netzwerkanfrage erst- oder drittseitig ist. Die Anfrage wird als erstseitig betrachtet, wenn sie für dieselbe Domain wie das Dokument oder Unterdokument gilt, das die Anfrage initiiert. Andernfalls wird sie als drittseitig betrachtet. Wird sie weggelassen, werden alle Anfragen akzeptiert. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel stimmt nur mit Netzwerkanfragen überein, die von dieser Liste von Domains stammen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel stimmt nicht mit Netzwerkanfragen überein, die von dieser Liste von Domains stammen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerkanfragen überein, die von dieser Liste von Domains stammen. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies entspricht dem Anforderungsinitiator und nicht der Anforderungs-URL.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerkanfragen überein, die von dieser Liste von Domains stammen. Wenn die Liste leer oder weggelassen ist, wird keine Domain ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies entspricht dem Anforderungsinitiator und nicht der Anforderungs-URL.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (je nachdem, welcher angegeben ist) groß-/kleinschreibungsempfindlich ist. Während Konsens besteht, standardmäßig `false` in allen Browsern gemäß [WECG issue 269](https://github.com/w3c/webextensions/issues/269) zu verwenden, war der Wert in älteren Versionen von Chrome und Safari `true`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, der mit der Netzwerkanfrage-URL übereinstimmt. Beachten Sie, dass:
    - Das unterstützte Format ist nicht stabil und variiert zwischen Browsern. Siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Es kann nur entweder [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) angegeben werden.
    - Der [`regexFilter`](#regexfilter) muss nur aus {{Glossary("ASCII", "ASCII")}}-Zeichen bestehen. Er wird mit einer URL abgeglichen, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format kodiert ist (im Falle internationalisierter Domains) und alle anderen nicht-ASCII-Zeichen im UTF-8 % kodiert sind.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerkanfragen überein, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerkanfragen überein, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste leer oder weggelassen ist, wird keine Domain ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste von HTTP-Anfragemethoden, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Die Angabe einer `requestMethods`-Regelbedingung schließt auch nicht-HTTP(s)-Anfragen aus, während die Angabe von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste von Anfragemethoden, mit denen die Regel nicht übereinstimmt. Es sollte nur einer von beiden, [`requestMethods`](#requestmethods) und `excludedRequestMethods`, angegeben werden. Wenn keiner von beiden angegeben ist, werden alle Anfragemethoden abgeglichen.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste von Ressourcentypen, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` enthalten.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste von Ressourcentypen, mit denen die Regel nicht übereinstimmt. Es sollte nur einer von beiden, [`resourceTypes`](#resourcetypes) und `excludedResourceTypes`, angegeben werden. Wenn keiner von beiden angegeben ist, werden alle Ressourcentypen außer `"main_frame"` blockiert.
- `responseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt, wenn die Anfrage einer Bedingung für Antwort-Header in dieser Liste entspricht (falls angegeben).
- `excludedResponseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt nicht, wenn die Anfrage einer Bedingung für Antwort-Header in dieser Liste entspricht (falls angegeben). Wenn sowohl `excludedResponseHeaders` als auch `responseHeaders` angegeben sind, hat die Eigenschaft `excludedResponseHeaders` Vorrang.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, die mit der Regel übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} stimmt mit Anfragen überein, die nicht von einem Tab stammen. Eine leere Liste ist nicht erlaubt. Nur für sitzungsbezogene Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, die nicht mit der Regel übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anfragen aus, die nicht von einem Tab stammen. Nur für sitzungsbezogene Regeln unterstützt.
- `urlFilter` {{optional_inline}}

  - : Ein `string`. Das Muster, das mit der Netzwerkanfrage-URL abgeglichen wird. Unterstützte Konstrukte:

    - `*` : Platzhalter: Entspricht einer beliebigen Anzahl von Zeichen.
    - `|` : Linker oder rechter Anker: Wenn am Anfang oder Ende des Musters verwendet, gibt es den Beginn oder das Ende der URL an.
    - `||` : Domainnamen-Anker: Wenn am Anfang des Musters verwendet, gibt es den Beginn einer (Unter-)Domain der URL an.
    - `^` : Trennzeichen: Dies entspricht allem außer einem Buchstaben, einer Ziffer oder einem der Zeichen `_`, `-`, `.`, oder `%`. Das letzte `^` kann auch das Ende der URL anstelle eines Trennzeichens entsprechen.

    Der `urlFilter` setzt sich aus den folgenden Teilen zusammen: (optional linker/Domainnamen-Anker) + Muster + (optional rechter Anker). Wird er weggelassen, werden alle URLs abgeglichen. Ein Leerzeichen ist nicht erlaubt. Ein Muster, das mit `||*` beginnt, ist nicht erlaubt. Verwenden Sie stattdessen `*`. Beachten Sie:

    - Es kann nur entweder `urlFilter` oder [`regexFilter`](#regexfilter) angegeben werden.
    - Der `urlFilter` muss nur aus ASCII-Zeichen bestehen. Dies wird mit einer URL abgeglichen, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format kodiert ist (im Falle internationalisierter Domains) und alle anderen nicht-ASCII-Zeichen im UTF-8 % kodiert sind. Zum Beispiel, wenn die Anforderungs-URL `http://abc.рф?q=ф` ist, wird der `urlFilter` gegen die URL `http://abc.xn--p1ai/?q=%D1%84` abgeglichen.

### Kanonische Domain

Domains, die in `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegeben sind, sollten den folgenden Anforderungen genügen:

- Subdomains wie "a.example.com" sind erlaubt.
- Die Einträge müssen nur aus _kleinbuchstabigen_ ASCII-Zeichen bestehen.
- Verwenden Sie [Punycode](https://de.wikipedia.org/wiki/Punycode)-Kodierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 Zahlen dargestellt werden, die durch einen Punkt getrennt sind.
- IPv6-Adressen sollten in ihrer kanonischen Form dargestellt werden und in eckigen Klammern stehen.

Um programmatisch die kanonische Domain für eine URL zu generieren, verwenden Sie die [URL API](/de/docs/Web/API/URL) und lesen Sie deren `hostname`-Eigenschaft, z.B. `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
