---
title: <Metadaten>
slug: Web/SVG/Element/metadata
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das **`<metadata>`** [SVG](/de/docs/Web/SVG) Element fügt Metadaten zu SVG-Inhalten hinzu. Metadaten sind strukturierte Informationen über Daten. Der Inhalt von `<metadata>` sollte Elemente aus anderen {{Glossary("XML")}}-{{Glossary("namespace", "Namespaces")}} wie {{Glossary("RDF")}}, [FOAF](<https://en.wikipedia.org/wiki/FOAF_(ontology)>), etc. enthalten.

## Nutzungskontext

{{svginfo}}

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("SVGMetadataElement")}} Schnittstelle.

## Beispiel

```html
<svg
  width="400"
  viewBox="0 0 400 300"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <metadata>
    <rdf:RDF
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:connect="http://www.w3.org/1999/08/29-svg-connections-in-RDF#">
      <rdf:Description about="#CableA">
        <connect:ends rdf:resource="#socket1" />
        <connect:ends rdf:resource="#ComputerA" />
      </rdf:Description>
      <rdf:Description about="#CableB">
        <connect:ends rdf:resource="#socket2" />
        <connect:ends rdf:resource="#ComputerB" />
      </rdf:Description>
      <rdf:Description about="#CableN">
        <connect:ends rdf:resource="#socket5" />
        <connect:ends>Alles</connect:ends>
      </rdf:Description>
      <rdf:Description about="#Hub">
        <connect:ends rdf:resource="#socket1" />
        <connect:ends rdf:resource="#socket2" />
        <connect:ends rdf:resource="#socket3" />
        <connect:ends rdf:resource="#socket4" />
        <connect:ends rdf:resource="#socket5" />
      </rdf:Description>
    </rdf:RDF>
  </metadata>
  <title>Netzwerk</title>
  <desc>Ein Beispiel für ein Computernetzwerk basierend auf einem Hub.</desc>

  <style>
    svg {
      /* Standardstile zur Vererbung */
      fill: white;
      stroke: black;
    }
    text {
      fill: black;
      stroke: none;
    }
    path {
      fill: none;
    }
  </style>

  <!-- Symbole definieren, die im SVG verwendet werden -->
  <defs>
    <!-- hubPlug-Symbol. Wird vom Hub-Symbol verwendet -->
    <symbol id="hubPlug">
      <desc>Ein 10BaseT/100baseTX-Anschluss</desc>
      <path d="M0,10 h5 v-9 h12 v9 h5 v16 h-22 z" />
    </symbol>

    <!-- hub-Symbol -->
    <symbol id="hub">
      <desc>Ein typischer 10BaseT/100BaseTX-Netzwerk-Hub</desc>
      <text x="0" y="15">Hub</text>
      <g transform="translate(0 20)">
        <rect width="253" height="84" />
        <rect width="229" height="44" x="12" y="10" />
        <circle fill="red" cx="227" cy="71" r="7" />
        <!-- fünf Gruppen, die jeweils den definierten Anschluss verwenden -->
        <g id="sock1et" transform="translate(25 20)">
          <title>Socket 1</title>
          <use href="#hubPlug" />
        </g>
        <g id="socket2" transform="translate(70 20)">
          <title>Socket 2</title>
          <use href="#hubPlug" />
        </g>
        <g id="socket3" transform="translate(115 20)">
          <title>Socket 3</title>
          <use href="#hubPlug" />
        </g>
        <g id="socket4" transform="translate(160 20)">
          <title>Socket 4</title>
          <use href="#hubPlug" />
        </g>
        <g id="socket5" transform="translate(205 20)">
          <title>Socket 5</title>
          <use href="#hubPlug" />
        </g>
      </g>
    </symbol>

    <!-- computer-Symbol -->
    <symbol id="computer">
      <desc>Ein üblicher Desktop-PC</desc>
      <g id="monitorStand" transform="translate(40 121)">
        <title>Monitorständer</title>
        <desc>
          Einer dieser coolen schwenkbaren Monitorständer, die unter dem Monitor stehen
        </desc>
        <path d="m0,0 S 10 10 40 12" />
        <path d="m80,0 S 70 10 40 12" />
        <path d="m0,20 L 10 10 S 40 12 70 10 L 80 20z" />
      </g>
      <g id="monitor">
        <title>Monitor</title>
        <desc>Ein sehr schicker Monitor</desc>
        <rect width="160" height="120" />
        <rect fill="lightgrey" width="138" height="95" x="11" y="12" />
      </g>
      <g id="processor" transform="translate(0 142)">
        <title>Der Computer</title>
        <desc>Ein Desktop-Computer - breiter, flacher Box-Stil</desc>
        <rect width="160" height="60" />
        <g id="discDrive" transform="translate(70 8)">
          <title>Laufwerk</title>
          <desc>Ein eingebautes Laufwerk</desc>
          <rect width="58" height="3" x="12" y="8" />
          <rect width="8" height="2" x="12" y="15" />
        </g>
        <circle cx="135" cy="40" r="5" />
      </g>
    </symbol>
  </defs>

  <text x="0" y="15">Netzwerk</text>

  <!-- Verwenden Sie das Hub-Symbol. -->
  <g id="Hub" transform="translate(80 45)">
    <title>Hub</title>
    <use href="#hub" transform="scale(0.75)" />
  </g>

  <!-- Verwenden Sie das Computer-Symbol. -->
  <g id="ComputerA" transform="translate(20 170)">
    <title>Computer A</title>
    <use href="#computer" transform="scale(0.5)" />
  </g>

  <!-- Verwenden Sie dasselbe Computer-Symbol. -->
  <g id="ComputerB" transform="translate(300 170)">
    <title>Computer B</title>
    <use href="#computer" transform="scale(0.5)" />
  </g>

  <!-- Zeichnen Sie Kabel A. -->
  <g id="CableA" transform="translate(107 88)">
    <title>Kabel A</title>
    <desc>10BaseT-Twisted-Pair-Kabel</desc>
    <path d="M0,0c100,140 50,140 -8,160" />
  </g>

  <!-- Zeichnen Sie Kabel B. -->
  <g id="CableB" transform="translate(142 88)">
    <title>Kabel B</title>
    <desc>10BaseT-Twisted-Pair-Kabel</desc>
    <path d="M0,0c100,180 110,160 159,160" />
  </g>

  <!-- Zeichnen Sie Kabel N. -->
  <g id="CableN" transform="translate(242 88)">
    <title>Kabel N</title>
    <desc>10BaseT-Twisted-Pair-Kabel</desc>
    <path d="M0,0c0,-70 20,-50 60,-50" />
  </g>
</svg>
```

{{ EmbedLiveSample('Example', '100%', 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
