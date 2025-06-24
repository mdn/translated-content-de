---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Details zu der Bedingung, die bestimmt, ob eine Regel mit einer Anforderung übereinstimmt, als `condition`-Eigenschaft von {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Gibt an, ob die Netzwerk-Anforderung von der gleichen oder einer anderen Domain stammt. Die Anforderung wird als von der gleichen Domain stammend betrachtet, wenn sie für dieselbe Domain wie das Dokument oder Sub-Dokument ist, das die Anforderung initiiert. Andernfalls wird sie als von einer anderen Domain stammend betrachtet. Wenn ausgelassen, werden alle Anforderungen akzeptiert. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Nutzen Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel stimmt nur mit Netzwerk-Anforderungen überein, die von dieser Liste von Domains stammen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Nutzen Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel stimmt nicht mit Netzwerk-Anforderungen überein, die von dieser Liste von Domains stammen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerk-Anforderungen überein, die von dieser Liste von Domains stammen. Wenn die Liste ausgelassen wird, wird die Regel auf Anforderungen von allen Domains angewendet. Eine leere Liste ist nicht zulässig. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies stimmt mit dem Initiator der Anforderung überein und nicht mit der URL der Anforderung.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerk-Anforderungen überein, die von dieser Liste von Domains stammen. Wenn die Liste leer oder ausgelassen ist, sind keine Domains ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies stimmt mit dem Initiator der Anforderung überein und nicht mit der URL der Anforderung.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Gibt an, ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (welcher auch immer spezifiziert ist) groß- und kleinschreibungsempfindlich ist. Obwohl es einen Konsens gibt, standardmäßig `false` in allen Browsern wie in [WECG issue 269](https://github.com/w3c/webextensions/issues/269) festgelegt, war der Wert in (älteren) Versionen von Chrome und Safari `true`. Für Details siehe [Browser-Kompatibilität](#browser-kompatibilität).
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, der mit der Netzwerk-Anforderungs-URL abgeglichen wird. Beachten Sie, dass:
    - Das unterstützte Format ist nicht stabil und variiert je nach Browser, siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Es kann nur einer von [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) angegeben werden.
    - Der [`regexFilter`](#regexfilter) muss nur aus {{Glossary("ASCII", "ASCII")}}-Zeichen bestehen. Dieser wird mit einer URL abgeglichen, bei der der Host im [Punycode](https://en.wikipedia.org/wiki/Punycode)-Format codiert ist (bei internationalisierten Domains) und alle anderen Nicht-ASCII-Zeichen in UTF-8 prozentcodiert sind.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerk-Anforderungen überein, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste ausgelassen wird, wird die Regel auf Anforderungen von allen Domains angewendet. Eine leere Liste ist nicht zulässig. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerk-Anforderungen überein, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste leer oder ausgelassen ist, sind keine Domains ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der HTTP-Anforderungsmethoden, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht zulässig. Die Angabe einer `requestMethods`-Regelbedingung schließt auch Nicht-HTTP(s)-Anforderungen aus, während die Angabe von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der Anforderungsmethoden, mit denen die Regel nicht übereinstimmt. Es sollte nur einer von [`requestMethods`](#requestmethods) und `excludedRequestMethods` angegeben werden. Wenn keiner von beiden angegeben ist, werden alle Anforderungsmethoden abgeglichen.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht zulässig. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` enthalten.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel nicht übereinstimmt. Es sollte nur einer von [`resourceTypes`](#resourcetypes) und `excludedResourceTypes` angegeben werden. Wenn keiner von beiden angegeben ist, sind alle Ressourcentypen außer `"main_frame"` blockiert.
- `responseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt, wenn die Anforderung mit einer der Antwortheaderbedingungen in dieser Liste übereinstimmt (falls angegeben).
- `excludedResponseHeaders` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. Die Regel stimmt nicht, wenn die Anforderung mit einer der Antwortheaderbedingungen in dieser Liste übereinstimmt (falls angegeben). Wenn sowohl `excludedResponseHeaders` als auch `responseHeaders` angegeben sind, hat die Eigenschaft `excludedResponseHeaders` Vorrang.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}. `id`, mit der die Regel übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} stimmt mit Anforderungen überein, die nicht von einem Tab stammen. Eine leere Liste ist nicht zulässig. Nur für session-gebundene Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}. `id`, mit der die Regel nicht übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anforderungen aus, die nicht von einem Tab stammen. Nur für session-gebundene Regeln unterstützt.
- `urlFilter` {{optional_inline}}

  - : Ein `string`. Das Muster, das mit der Netzwerk-Anforderungs-URL abgeglichen wird. Unterstütze Konstrukte:

    - `*` : Platzhalter: Stimmt mit einer beliebigen Anzahl von Zeichen überein.
    - `|` : Linker oder rechter Anker: Wenn am Anfang oder Ende des Musters verwendet, spezifiziert den Anfang oder das Ende der URL.
    - `||` : Domainnameanker: Wenn am Anfang des Musters verwendet, spezifiziert den Anfang einer (Unter-) Domain der URL.
    - `^` : Trennzeichen: Dies stimmt mit allem überein außer einem Buchstaben, einer Ziffer oder einem von `_`, `-`, `.`, oder `%`. Das letzte `^` kann auch mit dem Ende der URL und nicht mit einem Trennzeichen übereinstimmen.

    `urlFilter` besteht aus den folgenden Teilen: (optional linker/Domainnameanker) + Muster + (optional rechter Anker).
    Wenn weggelassen, werden alle URLs abgeglichen. Ein leerer String ist nicht zulässig.
    Ein Muster, das mit `||*` beginnt, ist nicht zulässig. Verwenden Sie stattdessen `*`.
    Beachten Sie, dass:

    - Es kann nur einer von `urlFilter` oder [`regexFilter`](#regexfilter) angegeben werden.
    - Der `urlFilter` muss nur aus ASCII-Zeichen bestehen. Dieser wird mit einer URL verglichen, bei der der Host im [Punycode](https://en.wikipedia.org/wiki/Punycode)-Format codiert ist (bei internationalisierten Domains) und alle anderen Nicht-ASCII-Zeichen in UTF-8 prozentcodiert sind. Zum Beispiel, wenn die Anforderungs-URL `http://abc.рф?q=ф` ist, wird der `urlFilter` mit der URL `http://abc.xn--p1ai/?q=%D1%84` abgeglichen.

### Kanonische Domain

Domains, die in `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegeben sind, sollten den folgenden Anforderungen entsprechen:

- Subdomains wie "a.example.com" sind erlaubt.
- Die Einträge müssen aus nur _kleineren_ ASCII-Zeichen bestehen.
- Verwenden Sie [Punycode](https://en.wikipedia.org/wiki/Punycode)-Kodierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 Zahlen dargestellt werden, die durch einen Punkt getrennt sind.
- IPv6-Adressen sollten in ihrer kanonischen Form dargestellt werden und in eckige Klammern gesetzt werden.

Um die kanonische Domain für eine URL programmgesteuert zu erzeugen, nutzen Sie die [URL API](/de/docs/Web/API/URL) und lesen Sie ihre `hostname`-Eigenschaft, z. B. `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
