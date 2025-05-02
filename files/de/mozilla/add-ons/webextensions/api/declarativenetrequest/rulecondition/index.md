---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{AddonSidebar}}

Details zur Bedingung, die bestimmt, ob eine Regel mit einer Anfrage übereinstimmt, als die `condition`-Eigenschaft von {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Gibt an, ob die Netzwerkanfrage First-Party oder Third-Party ist. Die Anfrage wird als First-Party betrachtet, wenn sie für dieselbe Domain wie das Dokument oder Subdokument ist, das die Anfrage initiiert. Andernfalls wird sie als Third-Party betrachtet. Wenn weggelassen, werden alle Anfragen akzeptiert. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel entspricht nur Netzwerkanfragen, die von dieser Liste von Domains stammen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel entspricht nicht Netzwerkanfragen, die von dieser Liste von Domains stammen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel entspricht nur Netzwerkanfragen, die von dieser Liste von Domains stammen. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen aus allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies entspricht dem Anfrager und nicht der Anfragen-URL.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel entspricht nicht Netzwerkanfragen, die von dieser Liste von Domains stammen. Wenn die Liste leer ist oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies entspricht dem Anfrager und nicht der Anfragen-URL.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (welcher auch immer angegeben ist) case-sensitive ist. Während es einen Konsens gibt, `false` als Standardwert über alle Browser hinweg gemäß [WECG issue 269](https://github.com/w3c/webextensions/issues/269) zu verwenden, war der Wert in (älteren) Versionen von Chrome und Safari `true`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, um mit der Netzwerkanfragen-URL übereinzustimmen. Beachten Sie, dass:
    - Das unterstützte Format ist nicht stabil und variiert zwischen Browsern, siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Nur einer von [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) kann angegeben werden.
    - Der [`regexFilter`](#regexfilter) muss nur aus {{Glossary("ASCII", "ASCII")}}-Zeichen bestehen. Dies wird mit einer URL abgeglichen, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format (bei internationalisierten Domains) codiert ist und alle anderen nicht-ASCII-Zeichen in UTF-8 Prozent-kodiert sind.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel entspricht nur Netzwerkanfragen, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen aus allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel entspricht nicht Netzwerkanfragen, wenn die Domains mit einer aus dieser Liste übereinstimmen. Wenn die Liste leer ist oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der HTTP-Anfragemethoden, die mit der Regel übereinstimmen. Eine leere Liste ist nicht erlaubt. Das Angeben einer `requestMethods`-Bedingung schließt auch nicht-http(s)-Anfragen aus, während das Angeben von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der Anfragemethoden, die mit der Regel nicht übereinstimmen. Nur eine von [`requestMethods`](#requestmethods) und `excludedRequestMethods` sollte angegeben werden. Wenn keiner von beiden angegeben ist, werden alle Anfragemethoden abgeglichen.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` enthalten.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel nicht übereinstimmt. Nur eine von [`resourceTypes`](#resourcetypes) und `excludedResourceTypes` sollte angegeben werden. Wenn keiner von beiden angegeben ist, werden alle Ressourcentypen außer `"main_frame"` blockiert.
- `responseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt überein, wenn die Anfrage mit einer beliebigen Bedingung der Antwortheader in dieser Liste übereinstimmt (falls angegeben).
- `excludedResponseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt nicht überein, wenn die Anfrage mit einer beliebigen Bedingung der Antwortheader in dieser Liste übereinstimmt (falls angegeben). Wenn sowohl `excludedResponseHeaders` als auch `responseHeaders` angegeben sind, hat die `excludedResponseHeaders`-Eigenschaft Vorrang.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}. `id`, die die Regel übereinstimmen sollte. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} stimmt mit Anfragen überein, die nicht von einem Tab stammen. Eine leere Liste ist nicht erlaubt. Nur für sitzungsbezogene Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}. `id`, mit der die Regel nicht übereinstimmen sollte. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anfragen aus, die nicht von einem Tab stammen. Nur für sitzungsbezogene Regeln unterstützt.
- `urlFilter` {{optional_inline}}

  - : Ein `string`. Das Muster, das mit der Netzwerkanfragen-URL übereinstimmt. Unterstützte Konstrukte:

    - `*` : Platzhalter: Entspricht einer beliebigen Anzahl von Zeichen.
    - `|` : Linker oder rechter Anker: Wenn es an einem der Enden des Musters verwendet wird, gibt es den Anfang oder das Ende der URL an.
    - `||` : Anker für Domainnamen: Wenn es am Anfang des Musters verwendet wird, gibt es den Anfang eines (Sub-)Domains der URL an.
    - `^` : Trennzeichen: Dies entspricht allem außer einem Buchstaben, einer Zahl oder einem der Zeichen `_`, `-`, `.`, oder `%`. Das letzte `^` kann auch das Ende der URL anstelle eines Trennzeichens entsprechen.

    `urlFilter` ist aus folgenden Teilen zusammengesetzt: (optionaler linker/Domain-Name-Anker) + Muster + (optional rechter Anker).
    Wenn weggelassen, werden alle URLs abgeglichen. Ein leerer String ist nicht erlaubt.
    Ein Muster, das mit `||*` beginnt, ist nicht erlaubt. Verwenden Sie stattdessen `*`.
    Beachten Sie, dass:

    - Nur einer von `urlFilter` oder [`regexFilter`](#regexfilter) kann angegeben werden.
    - Der `urlFilter` muss nur aus ASCII-Zeichen bestehen. Dies wird mit einer URL abgeglichen, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format (bei internationalisierten Domains) codiert ist und alle anderen nicht-ASCII-Zeichen in UTF-8 Prozent-kodiert sind. Zum Beispiel, wenn die Anfragen-URL `http://abc.рф?q=ф` ist, wird der `urlFilter` gegen die URL `http://abc.xn--p1ai/?q=%D1%84` abgeglichen.

### Kanonische Domain

Domains, die in `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegeben sind, sollten Folgendes erfüllen:

- Sub-Domains wie "a.example.com" sind erlaubt.
- Die Einträge müssen nur aus _kleinbuchstabigen_ ASCII-Zeichen bestehen.
- Verwenden Sie [Punycode](https://de.wikipedia.org/wiki/Punycode) Codierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 Zahlen dargestellt werden, die durch einen Punkt getrennt sind.
- IPv6-Adressen sollten in ihrer kanonischen Form dargestellt und in eckige Klammern gesetzt werden.

Um programmgesteuert die kanonische Domain für eine URL zu erzeugen, verwenden Sie die [URL API](/de/docs/Web/API/URL) und lesen deren `hostname`-Eigenschaft aus, d.h. `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
