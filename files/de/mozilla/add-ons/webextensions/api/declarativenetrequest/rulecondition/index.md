---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Details zur Bedingung, die bestimmt, ob eine Regel mit einer Anfrage übereinstimmt, als `condition`-Eigenschaft der {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Gibt an, ob die Netzwerk-Anfrage Erstanbieter oder Drittanbieter ist. Die Anfrage wird als Erstanbieter betrachtet, wenn sie für die gleiche Domain wie das Dokument oder Unterdokument ist, das die Anfrage initiiert. Andernfalls wird sie als Drittanbieter betrachtet. Wenn weggelassen, werden alle Anfragen akzeptiert. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel stimmt nur mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel stimmt nicht mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies stimmt mit dem Initiator der Anfrage und nicht mit der Anfrage-URL überein.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen. Wenn die Liste leer oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies stimmt mit dem Initiator der Anfrage und nicht mit der Anfrage-URL überein.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (welcher auch immer angegeben ist) case-sensitive ist. Während es einen Konsens gibt, in [WECG issue 269](https://github.com/w3c/webextensions/issues/269) standardmäßig auf `false` zu setzen, war der Wert in älteren Versionen von Chrome und Safari `true`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, um mit der Netzwerk-Anfrage-URL übereinzustimmen. Beachten Sie:
    - Das unterstützte Format ist nicht stabil und variiert zwischen den Browsern, siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Es kann nur einer der beiden `[urlFilter`](#urlfilter) oder `regexFilter`](#regexfilter) angegeben werden.
    - Der [`regexFilter`](#regexfilter) muss nur aus {{Glossary("ASCII", "ASCII")}}-Zeichen bestehen. Dies wird gegen eine URL gematcht, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format kodiert ist (im Falle von internationalisierten Domains) und alle anderen Nicht-ASCII-Zeichen in UTF-8 percent-kodiert sind.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerk-Anfragen überein, wenn die Domain mit einer dieser Liste übereinstimmt. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerk-Anfragen überein, wenn die Domain mit einer dieser Liste übereinstimmt. Wenn die Liste leer oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der HTTP-Anfragemethoden, die die Regel überprüft. Eine leere Liste ist nicht erlaubt. Das Angeben einer `requestMethods`-Bedingung schließt auch nicht-HTTP(s)-Anfragen aus, während das Angeben von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der Anfragemethoden, die die Regel nicht überprüft. Es sollte nur einer der beiden `requestMethods`](#requestmethods) und `excludedRequestMethods` angegeben werden. Wenn keiner von beiden angegeben ist, werden alle Anfragemethoden überprüft.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` enthalten.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel nicht übereinstimmt. Es sollte nur einer der beiden `resourceTypes`](#resourcetypes) und `excludedResourceTypes` angegeben werden. Wenn keiner von beiden angegeben ist, werden alle Ressourcentypen außer `"main_frame"` blockiert.
- `responseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt überein, wenn die Anfrage mit einer beliebigen Antwortheader-Bedingung in dieser Liste übereinstimmt (falls angegeben).
- `excludedResponseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt nicht überein, wenn die Anfrage mit einer beliebigen Antwortheader-Bedingung in dieser Liste übereinstimmt (falls angegeben). Wenn sowohl `excludedResponseHeaders` als auch `responseHeaders` angegeben sind, hat die `excludedResponseHeaders`-Eigenschaft Vorrang.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste der {{WebExtAPIRef("tabs.Tab")}}. `id`, die die Regel überprüfen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} stimmt mit Anfragen überein, die nicht von einem Tab stammen. Eine leere Liste ist nicht erlaubt. Nur für sitzungsbezogene Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste der {{WebExtAPIRef("tabs.Tab")}}. `id`, die die Regel nicht überprüfen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anfragen aus, die nicht von einem Tab stammen. Nur für sitzungsbezogene Regeln unterstützt.
- `urlFilter` {{optional_inline}}
  - : Ein `string`. Das Muster, das mit der Netzwerk-Anfrage-URL übereinstimmt. Unterstützte Konstrukte:
    - `*` : Wildcard: Stimmt mit einer beliebigen Anzahl von Zeichen überein.
    - `|` : Linker oder rechter Anker: Wenn am Anfang oder Ende des Musters verwendet, gibt das den Anfang oder das Ende der URL an.
    - `||` : Domainname-Anker: Wenn am Anfang des Musters verwendet, gibt das den Start einer (Unter-)Domain der URL an.
    - `^` : Trennzeichen: Dies stimmt mit allem überein, außer mit Buchstaben, einer Ziffer oder einem der Zeichen `_`, `-`, `.`, oder `%`. Das letzte `^` kann auch das Ende der URL statt eines Trennzeichens anzeigen.

    Der `urlFilter` besteht aus folgenden Teilen: (optional linker/Domainname-Anker) + Muster + (optional rechter Anker).
    Wenn weggelassen, werden alle URLs überprüft. Ein leerer String ist nicht erlaubt.
    Ein Muster, das mit `||*` beginnt, ist nicht erlaubt. Verwenden Sie stattdessen `*`.
    Beachten Sie:
    - Es kann nur einer der beiden `urlFilter` oder [`regexFilter`](#regexfilter) angegeben werden.
    - Der `urlFilter` muss nur aus ASCII-Zeichen bestehen. Dies wird gegen eine URL gematcht, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format kodiert ist (im Falle von internationalisierten Domains) und alle anderen Nicht-ASCII-Zeichen in UTF-8 percent-kodiert sind. Beispielsweise wenn die Anfrage-URL `http://abc.рф?q=ф` ist, wird der `urlFilter` gegen die URL `http://abc.xn--p1ai/?q=%D1%84` gematcht.

### Kanonische Domain

Domains, die in `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegeben sind, sollten den folgenden Anforderungen entsprechen:

- Sub-Domains wie "a.example.com" sind erlaubt.
- Die Einträge dürfen nur aus _kleingeschriebenen_ ASCII-Zeichen bestehen.
- Verwenden Sie [Punycode](https://de.wikipedia.org/wiki/Punycode)-Kodierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 durch Punkt getrennte Zahlen dargestellt werden.
- IPv6-Adressen sollten in ihrer kanonischen Form dargestellt und in eckige Klammern eingeschlossen werden.

Um die kanonische Domain für eine URL programmgesteuert zu erzeugen, verwenden Sie die [URL API](/de/docs/Web/API/URL) und lesen Sie ihre `hostname`-Eigenschaft, z.B. `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
