---
title: "GeolocationPositionError: code Eigenschaft"
short-title: code
slug: Web/API/GeolocationPositionError/code
l10n:
  sourceCommit: 066d55a090927fa19ba19c2a4b2417470e1a979f
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte Eigenschaft **`code`** der Schnittstelle [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) ist ein `unsigned short`, der den Fehlercode darstellt.

Die folgenden Werte sind möglich:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Wert</th>
      <th scope="col">Zugehörige Konstante</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1</code></td>
      <td><code>PERMISSION_DENIED</code></td>
      <td>
        Die Erfassung der Geolokalisierungsinformationen ist fehlgeschlagen, da die Seite keine Berechtigung dafür hatte.
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>POSITION_UNAVAILABLE</code></td>
      <td>
        Die Erfassung der Geolokalisierung ist fehlgeschlagen, da eine oder mehrere interne Positionsquellen einen internen Fehler zurückgegeben haben.
      </td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>TIMEOUT</code></td>
      <td>Geolokalisierungsinformationen wurden nicht in der erlaubten Zeit erhalten.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolokalisierung](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
